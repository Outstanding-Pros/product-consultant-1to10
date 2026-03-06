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
          {isEn ? 'Submitted successfully.' : '정상 제출되었습니다.'}
        </h1>
        <p className="comparison-sub">
          {isEn
            ? 'We will review your information and contact you by email.'
            : '입력해주신 내용을 검토한 뒤 이메일로 안내드리겠습니다.'}
        </p>
        <Link href={locale === 'en' ? '/?lang=en' : '/'} className="btn-primary">
          {isEn ? 'Back to Home' : '홈으로 이동'}
        </Link>
      </div>
    </section>
  )
}
