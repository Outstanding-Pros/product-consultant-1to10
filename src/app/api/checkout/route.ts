import { NextRequest, NextResponse } from 'next/server'
import { insertOrder, updateOrderById } from '@/lib/supabaseAdmin'
import { Polar } from '@polar-sh/sdk'

type Plan = 'basic' | 'pro'
type BillingCountry = 'KR' | 'INTL'
type Provider = 'payapp' | 'polar'

type CheckoutPayload = {
  locale?: 'ko' | 'en'
  plan?: Plan
  billingCountry?: BillingCountry
  payerEmail?: string
  payerPhone?: string
}

function pickProvider(billingCountry: BillingCountry): Provider {
  return billingCountry === 'KR' ? 'payapp' : 'polar'
}

function getAppUrl(request: NextRequest): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? new URL(request.url).origin
}

function planName(plan: Plan, locale: 'ko' | 'en'): string {
  if (locale === 'en') return plan === 'pro' ? 'Propel Pro Plan' : 'Propel Basic Plan'
  return plan === 'pro' ? 'Propel Pro 플랜' : 'Propel Basic 플랜'
}

function planPrice(plan: Plan): number {
  const basic = Number(process.env.PAYAPP_PRICE_BASIC ?? 9500)
  const pro = Number(process.env.PAYAPP_PRICE_PRO ?? 29500)
  return plan === 'pro' ? pro : basic
}

function polarPlanPrice(plan: Plan): number {
  const basic = Number(process.env.POLAR_PRICE_BASIC ?? 7)
  const pro = Number(process.env.POLAR_PRICE_PRO ?? 20)
  return plan === 'pro' ? pro : basic
}

function normalizeKoreanPhone(value: string): string {
  return value.replace(/[^0-9]/g, '')
}

async function payappCheckoutUrl({
  plan,
  appUrl,
  locale,
  payerEmail,
  payerPhone,
  orderId,
}: {
  plan: Plan
  appUrl: string
  locale: 'ko' | 'en'
  payerEmail: string
  payerPhone: string
  orderId: string
}): Promise<string | null> {
  const userid = process.env.PAYAPP_USER_ID
  if (!userid) return null

  const recvphone = normalizeKoreanPhone(payerPhone)
  if (!recvphone) return null

  const feedbackToken = process.env.PAYAPP_FEEDBACK_TOKEN
  const feedbackUrl = new URL('/api/webhooks/payapp', appUrl)
  if (feedbackToken) {
    feedbackUrl.searchParams.set('token', feedbackToken)
  }

  const params = new URLSearchParams({
    cmd: 'payrequest',
    userid,
    goodname: planName(plan, locale),
    price: String(planPrice(plan)),
    recvphone,
    recvemail: payerEmail,
    smsuse: 'n',
    feedbackurl: feedbackUrl.toString(),
    returnurl: `${appUrl}/checkout/success?provider=payapp&plan=${plan}&lang=${locale}&order_id=${orderId}`,
    var1: orderId,
    var2: plan,
  })

  const openpaytype = process.env.PAYAPP_OPENPAYTYPE?.trim()
  if (openpaytype) {
    params.set('openpaytype', openpaytype)
  }

  const response = await fetch('https://api.payapp.kr/oapi/apiLoad.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
    cache: 'no-store',
  })

  const raw = await response.text()
  const result = new URLSearchParams(raw)
  const state = result.get('state')
  const errorMessage = result.get('errorMessage')
  const payurl = result.get('payurl')

  if (!response.ok || state !== '1' || !payurl) {
    throw new Error(errorMessage || 'PayApp payrequest failed.')
  }

  return payurl
}

async function polarCheckoutUrl(
  plan: Plan,
  appUrl: string,
  locale: 'ko' | 'en',
  payerEmail: string,
  orderId: string
): Promise<string | null> {
  const accessToken = process.env.POLAR_ACCESS_TOKEN
  const productId = plan === 'pro' ? process.env.POLAR_PRODUCT_ID_PRO : process.env.POLAR_PRODUCT_ID_BASIC

  if (!accessToken || !productId) {
    return null
  }

  const server = process.env.POLAR_SERVER === 'sandbox' ? 'sandbox' : 'production'
  const polar = new Polar({ accessToken, server })

  const checkout = await polar.checkouts.create({
    products: [productId],
    customerEmail: payerEmail,
    locale,
    successUrl: `${appUrl}/checkout/success?provider=polar&plan=${plan}&lang=${locale}&order_id=${orderId}`,
    returnUrl: `${appUrl}/checkout/cancel?provider=polar&plan=${plan}&lang=${locale}&order_id=${orderId}`,
    metadata: {
      order_id: orderId,
      plan,
      locale,
      billing_country: 'INTL',
      payer_email: payerEmail,
      source: 'landing_pricing_modal',
    },
  })

  return checkout.url
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as CheckoutPayload

  const locale = body.locale === 'en' ? 'en' : 'ko'
  const plan = body.plan === 'pro' ? 'pro' : 'basic'
  const billingCountry = body.billingCountry === 'KR' ? 'KR' : 'INTL'
  const payerEmail = body.payerEmail?.trim()
  const payerPhone = body.payerPhone?.trim() ?? ''

  if (!payerEmail) {
    return NextResponse.json({ error: 'payerEmail is required.' }, { status: 400 })
  }

  const provider = pickProvider(billingCountry)
  if (provider === 'payapp' && !normalizeKoreanPhone(payerPhone)) {
    return NextResponse.json({ error: 'payerPhone is required for PayApp checkout.' }, { status: 400 })
  }

  const appUrl = getAppUrl(request)
  const orderId = crypto.randomUUID()
  const amount = provider === 'payapp' ? planPrice(plan) : polarPlanPrice(plan)
  const currency = provider === 'payapp' ? 'KRW' : 'USD'

  try {
    await insertOrder({
      id: orderId,
      provider,
      plan,
      locale,
      payer_email: payerEmail,
      payer_phone: provider === 'payapp' ? normalizeKoreanPhone(payerPhone) : null,
      amount,
      currency,
      status: 'pending',
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to create order.'
    return NextResponse.json({ error: message }, { status: 500 })
  }

  let checkoutUrl: string | null = null
  try {
    checkoutUrl =
      provider === 'payapp'
        ? await payappCheckoutUrl({ plan, appUrl, locale, payerEmail, payerPhone, orderId })
        : await polarCheckoutUrl(plan, appUrl, locale, payerEmail, orderId)
  } catch (error) {
    await updateOrderById(orderId, { status: 'failed' })
    const message = error instanceof Error ? error.message : 'Checkout request failed.'
    return NextResponse.json({ error: message }, { status: 502 })
  }

  if (!checkoutUrl) {
    try {
      await updateOrderById(orderId, { status: 'failed' })
    } catch (error) {
      console.error('[checkout] failed to update order status', error)
    }

    const missing =
      provider === 'payapp'
        ? 'PAYAPP_USER_ID (and valid payerPhone)'
        : 'POLAR_ACCESS_TOKEN + POLAR_PRODUCT_ID_BASIC/PRO'
    return NextResponse.json(
      { error: `Missing checkout URL env for ${provider}. Set ${missing}.` },
      { status: 500 }
    )
  }

  return NextResponse.json({ checkoutUrl, provider })
}
