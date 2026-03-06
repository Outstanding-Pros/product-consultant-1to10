import { NextRequest, NextResponse } from 'next/server'
import { validateEvent, WebhookVerificationError } from '@polar-sh/sdk/webhooks'
import { updateOrderById, updateOrderByProviderRef } from '@/lib/supabaseAdmin'

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.POLAR_WEBHOOK_SECRET

  if (!webhookSecret) {
    return NextResponse.json({ error: 'Missing POLAR_WEBHOOK_SECRET env.' }, { status: 500 })
  }

  const rawBody = await request.text()

  const headerRecord = Object.fromEntries(request.headers.entries())
  let payload: Record<string, unknown>
  try {
    payload = validateEvent(rawBody, headerRecord, webhookSecret) as Record<string, unknown>
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      return NextResponse.json({ error: 'Invalid webhook signature.' }, { status: 403 })
    }
    return NextResponse.json({ error: 'Invalid webhook payload.' }, { status: 400 })
  }

  const eventType = String(payload.type ?? payload.event ?? '')
  const data = (payload.data ?? {}) as Record<string, unknown>
  const providerOrderId = typeof data.id === 'string' ? data.id : ''
  const metadata = (data.metadata ?? {}) as Record<string, unknown>
  const orderId = typeof metadata.order_id === 'string' ? metadata.order_id : ''

  try {
    if (eventType === 'order.paid') {
      if (orderId) {
        await updateOrderById(orderId, {
          status: 'paid',
          provider_order_id: providerOrderId || null,
          paid_at: new Date().toISOString(),
        })
      } else if (providerOrderId) {
        await updateOrderByProviderRef('polar', providerOrderId, {
          status: 'paid',
          paid_at: new Date().toISOString(),
        })
      }
    }

    if (eventType === 'order.refunded') {
      if (orderId) {
        await updateOrderById(orderId, { status: 'refunded' })
      } else if (providerOrderId) {
        await updateOrderByProviderRef('polar', providerOrderId, { status: 'refunded' })
      }
    }
  } catch (error) {
    console.error('[webhook][polar] db update failed', error)
  }

  console.log('[webhook][polar] received', { eventType, providerOrderId, orderId })

  return NextResponse.json({ ok: true })
}
