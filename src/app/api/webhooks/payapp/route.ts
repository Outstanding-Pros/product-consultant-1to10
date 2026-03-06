import { NextRequest, NextResponse } from 'next/server'
import { updateOrderById, updateOrderByProviderRef } from '@/lib/supabaseAdmin'

export async function POST(request: NextRequest) {
  const expectedToken = process.env.PAYAPP_FEEDBACK_TOKEN
  const incomingToken = request.nextUrl.searchParams.get('token')

  if (!expectedToken) {
    return NextResponse.json({ error: 'Missing PAYAPP_FEEDBACK_TOKEN env.' }, { status: 500 })
  }

  if (incomingToken !== expectedToken) {
    return NextResponse.json({ error: 'Invalid webhook token.' }, { status: 401 })
  }

  const rawBody = await request.text()
  const form = new URLSearchParams(rawBody)
  const paymentRef = form.get('mul_no') ?? ''
  const state = form.get('state') ?? ''
  const orderId = form.get('var1') ?? ''
  const plan = form.get('var2') ?? ''

  try {
    if (state === '1') {
      if (orderId) {
        await updateOrderById(orderId, {
          status: 'paid',
          provider_order_id: paymentRef || null,
          paid_at: new Date().toISOString(),
        })
      } else if (paymentRef) {
        await updateOrderByProviderRef('payapp', paymentRef, {
          status: 'paid',
          paid_at: new Date().toISOString(),
        })
      }
    } else if (orderId) {
      await updateOrderById(orderId, { status: 'failed' })
    }
  } catch (error) {
    console.error('[webhook][payapp] db update failed', error)
  }

  console.log('[webhook][payapp] received', { paymentRef, state, orderId, plan })

  // PayApp feedbackurl must return success response without redirect.
  return new NextResponse('OK', { status: 200 })
}
