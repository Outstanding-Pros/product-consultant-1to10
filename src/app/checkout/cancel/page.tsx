import Link from 'next/link'
import { resolveLocale } from '@/i18n/locale'

type CancelPageProps = {
  searchParams: Promise<{ lang?: string }>
}

export default async function CheckoutCancelPage({ searchParams }: CancelPageProps) {
  const params = await searchParams
  const locale = resolveLocale(params.lang)
  const isEn = locale === 'en'

  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="comparison-heading">{isEn ? 'Payment was canceled.' : '결제가 취소되었습니다.'}</h1>
        <p className="comparison-sub">{isEn ? 'You can restart checkout from the pricing section.' : '가격 섹션에서 다시 결제를 진행할 수 있습니다.'}</p>
        <Link href={locale === 'en' ? '/?lang=en#pricing' : '/#pricing'} className="btn-primary">
          {isEn ? 'Back to pricing' : '가격 섹션으로 돌아가기'}
        </Link>
      </div>
    </section>
  )
}
