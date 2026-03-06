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
  const result = form.get('result') ?? ''
  const status = form.get('status') ?? ''

  try {
    // PayApp feedbackurl is sent on completed payment.
    // Treat callback with mul_no as paid unless explicit failure code exists.
    const explicitlyFailed = state === '0' || result.toLowerCase() === 'fail' || status.toLowerCase() === 'fail'
    const paidSignal = Boolean(paymentRef) && !explicitlyFailed

    if (paidSignal) {
      if (orderId) {
        await updateOrderById(orderId, {
          status: 'paid',
          provider_order_id: paymentRef,
          paid_at: new Date().toISOString(),
        })
      } else {
        await updateOrderByProviderRef('payapp', paymentRef, {
          status: 'paid',
          paid_at: new Date().toISOString(),
        })
      }
    } else if (explicitlyFailed && orderId) {
      await updateOrderById(orderId, { status: 'failed' })
    }
  } catch (error) {
    console.error('[webhook][payapp] db update failed', error)
  }

  console.log('[webhook][payapp] received', { paymentRef, state, result, status, orderId, plan })

  // PayApp feedbackurl must return success response without redirect.
  return new NextResponse('OK', { status: 200 })
}
