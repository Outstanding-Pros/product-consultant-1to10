import { NextRequest, NextResponse } from 'next/server'
import { updateOrderById, updateOrderByProviderRef } from '@/lib/supabaseAdmin'

export async function POST(request: NextRequest) {
  const expectedToken = process.env.POLAR_WEBHOOK_TOKEN
  const incomingToken = request.headers.get('x-webhook-token')

  if (expectedToken && incomingToken !== expectedToken) {
    return NextResponse.json({ error: 'Invalid webhook token.' }, { status: 401 })
  }

  const rawBody = await request.text()
  let payload: Record<string, unknown> = {}
  try {
    payload = JSON.parse(rawBody) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 })
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

  // TODO: Verify Polar signature with official method before production use.
  console.log('[webhook][polar] received', { eventType, providerOrderId, orderId })

  return NextResponse.json({ ok: true })
}
