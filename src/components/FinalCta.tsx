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
            {isEn ? 'and start executing with your dashboard.' : '대시보드로 바로 실행해보세요.'}
          </h2>
        </Reveal>
        <Reveal><p>{isEn ? 'Basic gives core insights, Pro unlocks full workflow from analysis to roadmap.' : 'Basic은 핵심 인사이트, Pro는 분석부터 로드맵까지 전 기능을 제공합니다.'}</p></Reveal>
        <Reveal><a href="#pricing" className="btn-primary">{isEn ? 'Start Basic / Pro' : 'Basic / Pro 시작하기'}</a></Reveal>
      </div>
    </section>
  )
}
