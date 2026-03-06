import { NextRequest, NextResponse } from 'next/server'
import { insertIntakeForm, updateOrderById } from '@/lib/supabaseAdmin'

type IntakePayload = {
  orderId?: string
  locale?: 'ko' | 'en'
  provider?: 'payapp' | 'polar' | 'unknown'
  plan?: 'basic' | 'pro'
  serviceName?: string
  platform?: string
  category?: string
  dau?: string
  monthlyRevenue?: string
  challenge?: string
  email?: string
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as IntakePayload

  const orderId = body.orderId?.trim()
  if (!orderId) {
    return NextResponse.json({ error: 'orderId is required.' }, { status: 400 })
  }

  const locale = body.locale === 'en' ? 'en' : 'ko'
  const plan = body.plan === 'pro' ? 'pro' : 'basic'
  const provider = body.provider === 'payapp' || body.provider === 'polar' ? body.provider : 'unknown'

  try {
    await insertIntakeForm({
      order_id: orderId,
      locale,
      plan,
      provider,
      service_name: body.serviceName?.trim() ?? '',
      platform: body.platform?.trim() ?? '',
      category: body.category?.trim() ?? '',
      dau: body.dau?.trim() ?? '',
      monthly_revenue: body.monthlyRevenue?.trim() ?? '',
      challenge: body.challenge?.trim() ?? '',
      contact_email: body.email?.trim() ?? '',
    })

    await updateOrderById(orderId, { intake_submitted_at: new Date().toISOString() })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to save intake form.'
    return NextResponse.json({ error: message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, orderId })
}
