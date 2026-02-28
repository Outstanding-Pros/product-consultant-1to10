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

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteBar />
      <ProblemSection />
      <ComparisonSection />
      <HowItWorks />
      <PrescriptionPreview />
      <TrustSection />
      <PricingAndModal />
      <FaqSection />
      <FinalCta />
      <Footer />
    </>
  )
}
