const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

type OrderStatus = 'pending' | 'paid' | 'failed' | 'refunded'

type OrderInsert = {
  id: string
  provider: 'payapp' | 'polar'
  plan: 'basic' | 'pro'
  locale: 'ko' | 'en'
  payer_email: string
  payer_phone: string | null
  amount: number
  currency: string
  status: OrderStatus
}

type IntakeInsert = {
  order_id: string
  locale: 'ko' | 'en'
  provider: 'payapp' | 'polar' | 'unknown'
  plan: 'basic' | 'pro'
  service_name: string
  platform: string
  category: string
  dau: string
  monthly_revenue: string
  challenge: string
  contact_email: string
}

function assertConfig() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env.')
  }
}

async function requestSupabase<T>(path: string, init: RequestInit): Promise<T> {
  assertConfig()

  const response = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY as string,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY as string}`,
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || 'Supabase request failed.')
  }

  if (response.status === 204) {
    return undefined as T
  }

  return (await response.json()) as T
}

export async function insertOrder(input: OrderInsert): Promise<{ id: string }> {
  const rows = await requestSupabase<Array<{ id: string }>>('/orders', {
    method: 'POST',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify(input),
  })

  const first = rows[0]
  if (!first?.id) {
    throw new Error('Failed to insert order.')
  }

  return first
}

export async function updateOrderById(orderId: string, updates: Record<string, Json>): Promise<void> {
  const params = new URLSearchParams({ id: `eq.${orderId}` })
  await requestSupabase<void>(`/orders?${params.toString()}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  })
}

export async function updateOrderByProviderRef(
  provider: 'payapp' | 'polar',
  providerOrderId: string,
  updates: Record<string, Json>
): Promise<void> {
  const params = new URLSearchParams({
    provider: `eq.${provider}`,
    provider_order_id: `eq.${providerOrderId}`,
  })
  await requestSupabase<void>(`/orders?${params.toString()}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  })
}

export async function insertIntakeForm(input: IntakeInsert): Promise<void> {
  await requestSupabase('/intake_forms', {
    method: 'POST',
    body: JSON.stringify(input),
  })
}
