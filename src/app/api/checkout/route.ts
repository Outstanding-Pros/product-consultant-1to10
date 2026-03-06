import { NextRequest, NextResponse } from 'next/server'
import { insertOrder, updateOrderById } from '@/lib/supabaseAdmin'

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

function withParams(baseUrl: string, params: Record<string, string>): string {
  const url = new URL(baseUrl)
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value)
  })
  return url.toString()
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

function polarCheckoutUrl(
  plan: Plan,
  appUrl: string,
  locale: 'ko' | 'en',
  payerEmail: string,
  orderId: string
): string | null {
  const byPlan = plan === 'pro' ? process.env.POLAR_CHECKOUT_URL_PRO : process.env.POLAR_CHECKOUT_URL_BASIC
  const baseUrl = byPlan ?? process.env.POLAR_CHECKOUT_URL

  if (!baseUrl) return null

  return withParams(baseUrl, {
    plan,
    locale,
    email: payerEmail,
    success_url: `${appUrl}/checkout/success?provider=polar&plan=${plan}&lang=${locale}&order_id=${orderId}`,
    cancel_url: `${appUrl}/checkout/cancel?provider=polar&plan=${plan}&lang=${locale}&order_id=${orderId}`,
    order_id: orderId,
  })
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
        : polarCheckoutUrl(plan, appUrl, locale, payerEmail, orderId)
  } catch (error) {
    await updateOrderById(orderId, { status: 'failed' })
    const message = error instanceof Error ? error.message : 'Checkout request failed.'
    return NextResponse.json({ error: message }, { status: 502 })
  }

  if (!checkoutUrl) {
    const missing =
      provider === 'payapp'
        ? 'PAYAPP_USER_ID (and valid payerPhone)'
        : 'POLAR_CHECKOUT_URL(_BASIC/_PRO)'
    return NextResponse.json(
      { error: `Missing checkout URL env for ${provider}. Set ${missing}.` },
      { status: 500 }
    )
  }

  return NextResponse.json({ checkoutUrl, provider })
}
