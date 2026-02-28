import Hero from '@/components/Hero'
import QuoteBar from '@/components/QuoteBar'
import ProblemSection from '@/components/ProblemSection'
import ComparisonSection from '@/components/ComparisonSection'
import HowItWorks from '@/components/HowItWorks'
import PrescriptionPreview from '@/components/PrescriptionPreview'
import TrustSection from '@/components/TrustSection'
import PricingAndModal from '@/components/PricingAndModal'
import FaqSection from '@/components/FaqSection'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import { resolveLocale } from '@/i18n/locale'
import Link from 'next/link'

type PageProps = {
  searchParams: Promise<{ lang?: string }>
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams
  const locale = resolveLocale(params.lang)

  return (
    <div data-locale={locale}>
      <div className="lang-switcher">
        <Link href="/?lang=ko" className={locale === 'ko' ? 'active' : ''}>KOR</Link>
        <Link href="/?lang=en" className={locale === 'en' ? 'active' : ''}>ENG</Link>
      </div>
      <Hero locale={locale} />
      <QuoteBar locale={locale} />
      <ProblemSection locale={locale} />
      <ComparisonSection locale={locale} />
      <HowItWorks locale={locale} />
      <PrescriptionPreview locale={locale} />
      <TrustSection locale={locale} />
      <PricingAndModal locale={locale} />
      <FaqSection locale={locale} />
      <FinalCta locale={locale} />
      <Footer locale={locale} />
    </div>
  )
}
