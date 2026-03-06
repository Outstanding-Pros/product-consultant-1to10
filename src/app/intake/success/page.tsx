import Link from 'next/link'
import { resolveLocale } from '@/i18n/locale'

type IntakeSuccessPageProps = {
  searchParams: Promise<{ lang?: string }>
}

export default async function IntakeSuccessPage({ searchParams }: IntakeSuccessPageProps) {
  const params = await searchParams
  const locale = resolveLocale(params.lang)
  const isEn = locale === 'en'

  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="comparison-heading">
          {isEn ? 'Thank you for your early access.' : '사전 결제 감사드립니다.'}
        </h1>
        <p className="comparison-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          {isEn
            ? <>We are planning to launch the beta version around the beginning of April.<br />We'll make sure you're the first to know.<br /> We’ll reach out via email with more updates soon!</>
            : <>베타 서비스 출시는 약 4월 초 예정입니다.<br />새로운 소식이 나오는 대로 가장 먼저 이메일로 공유해 드릴 예정이니,<br /> 조금만 기다려 주세요!</>}
        </p>
        <Link href={locale === 'en' ? '/?lang=en' : '/'} className="btn-primary">
          {isEn ? 'Back to Home' : '홈으로 이동'}
        </Link>
      </div>
    </section>
  )
}
