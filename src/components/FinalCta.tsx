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
            {isEn ? 'Your own revenue strategy engine,' : '연쇄 창업가와 현직 PO의 역량이 담긴'}
            <br />
            {isEn ? 'built from serial founders and active POs.' : '나만의 수익 전략 엔진, Propel'}
          </h2>
        </Reveal>
        <Reveal><p>{isEn 
        ? <>We deliver this service with insights accumulated<br />
        from running a private product builder network of 250 members over 2 years.</> 
        : <>2년간 250명 규모의 프라이빗 프로덕트 빌더 네트워크를 <br />
        운영하며 얻은 인사이트를 서비스로 제공합니다.</>}</p></Reveal>
        <Reveal><a href="#pricing" className="btn-primary">{isEn ? 'Prepay now' : '사전 결제하기'}</a></Reveal>
      </div>
    </section>
  )
}
