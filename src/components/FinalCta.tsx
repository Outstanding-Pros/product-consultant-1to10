import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type FinalCtaProps = {
  locale: Locale
}

export default function FinalCta({ locale }: FinalCtaProps) {
  const isEn = locale === 'en'

  return (
    <section className="final-cta">
      <div className="container">
        <Reveal>
          <h2>
            {isEn ? 'Stop overthinking' : '"뭘 해야 하는지"를'}
            <br />
            {isEn ? 'what to do next.' : '더 이상 혼자 고민하지 마세요.'}
          </h2>
        </Reveal>
        <Reveal><p>{isEn ? 'For the price of a coffee, find the right monetization direction for your app.' : '커피 한 잔 값으로, 당신의 앱에 맞는 수익화 방향을 찾아보세요.'}</p></Reveal>
        <Reveal><a href="#pricing" className="btn-primary">{isEn ? 'Get My App Diagnosis' : '내 앱 진단받기'}</a></Reveal>
      </div>
    </section>
  )
}
