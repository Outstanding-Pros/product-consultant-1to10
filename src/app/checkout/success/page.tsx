import PostPaymentIntakeForm from '@/components/PostPaymentIntakeForm'
import { resolveLocale } from '@/i18n/locale'

type SuccessPageProps = {
  searchParams: Promise<{ lang?: string; plan?: string; provider?: string; order_id?: string }>
}

export default async function CheckoutSuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams
  const locale = resolveLocale(params.lang)
  const plan = params.plan === 'pro' ? 'pro' : 'basic'
  const provider = params.provider === 'payapp' || params.provider === 'polar' ? params.provider : 'unknown'
  const orderId = params.order_id ?? ''

  return <PostPaymentIntakeForm locale={locale} plan={plan} provider={provider} orderId={orderId} />
}
