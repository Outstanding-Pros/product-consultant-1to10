import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type HowItWorksProps = {
  locale: Locale
}

export default function HowItWorks({ locale }: HowItWorksProps) {
  const isEn = locale === 'en'

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal><span className="section-label">HOW IT WORKS</span></Reveal>
        <Reveal><h2 className="comparison-heading">{isEn ? 'How it works' : '진행 방식'}</h2></Reveal>
        <div className="steps">
          <Reveal>
            <div className="step">
              <span className="step-number">01</span>
              <span className="step-time">{isEn ? '3 min' : '3분'}</span>
              <h3>{isEn ? 'Submit your app profile' : '앱 프로필 입력'}</h3>
              <p>
                {isEn
                  ? 'App name, category, DAU/MAU, current model, monthly revenue, and your biggest concern. A short form is enough.'
                  : '앱 이름, 카테고리, DAU/MAU, 현재 수익 모델, 월 수익, 가장 고민되는 것. 간단한 폼 하나면 됩니다.'}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="step">
              <span className="step-number">02</span>
              <span className="step-time">{isEn ? 'Within 24h' : '24시간 이내'}</span>
              <h3>{isEn ? 'Receive your custom report' : '맞춤형 진단서 수령'}</h3>
              <p>
                {isEn
                  ? 'You get monetization stage diagnosis (5 levels), best-fit model, revenue simulation, and a 30-day action plan by email.'
                  : '수익화 단계 진단(5단계), 당신의 앱에 맞는 수익 모델, 예상 수익 시뮬레이션, 다음 30일 실행 플랜을 이메일로 전달합니다.'}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="step">
              <span className="step-number">03</span>
              <span className="step-time">{isEn ? 'Optional' : '선택'}</span>
              <h3>{isEn ? 'Execute and ask again' : '실행하고 다시 물어보기'}</h3>
              <p>
                {isEn
                  ? 'With the monthly plan, share results and get your next step coaching. Keep momentum without losing context.'
                  : '월 구독 시, 실행 결과를 공유하면 다음 스텝을 이어서 코칭. 맥락이 끊기지 않는 전략 파트너가 됩니다.'}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
