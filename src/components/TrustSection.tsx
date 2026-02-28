import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type TrustSectionProps = {
  locale: Locale
}

export default function TrustSection({ locale }: TrustSectionProps) {
  const isEn = locale === 'en'

  return (
    <section className="section trust-section">
      <div className="container">
        <Reveal><span className="section-label">WHO&apos;S BEHIND THIS</span></Reveal>
        <Reveal><h2 className="comparison-heading">{isEn ? 'Who is behind the diagnosis?' : '누가 진단하나요?'}</h2></Reveal>
        <Reveal>
          <div className="trust-content">
            <div className="trust-photo">👨‍💻</div>
            <div className="trust-bio">
              <h3>{isEn ? '[Operator Name]' : '[운영자 이름]'}</h3>
              <span className="trust-role">
                {isEn ? 'Former Product Owner (PO) · Indie app monetization strategist · CoPO operator' : '前 프로덕트 오너 (PO) · 인디 앱 수익화 전략가 · CoPO 운영'}
              </span>
              <p>
                {isEn
                  ? 'I combine two tracks of experience: repeated A/B testing, metric analysis, and hypothesis validation as a PO, plus first-hand trial-and-error from building and failing to monetize my own apps. CoPO builds your monetization strategy as a product team would, with data over intuition. Through a 100+ indie developer network, I continuously study transitions from ad-only models to subscription and in-app purchase systems.'
                  : 'PO로 일하며 A/B 테스트, 지표 분석, 가설 검증을 반복하던 경험과, 직접 앱을 만들고 수익화에 실패했던 경험을 결합했습니다. "감이 아닌 데이터로" — PO가 제품을 만들 듯, 당신의 앱 수익화를 설계합니다. 100명 이상의 1인 개발자 네트워크를 운영하며 AdMob 단일 의존에서 구독/인앱결제 전환까지의 과정을 반복적으로 연구하고 있습니다.'}
              </p>
              <div className="trust-credentials">
                <span className="credential-tag" style={{ borderColor: 'var(--border-accent)', color: 'var(--accent)' }}>
                  {isEn ? '✦ Former Product Owner (PO)' : '✦ 前 프로덕트 오너 (PO)'}
                </span>
                <span className="credential-tag">{isEn ? 'Indie app community operator (100+ members)' : '인디 앱 개발자 커뮤니티 운영 (100+명)'}</span>
                <span className="credential-tag">{isEn ? 'Conducted many monetization diagnoses' : '앱 수익화 진단 다수 수행'}</span>
                <span className="credential-tag">{isEn ? 'Built AI-powered strategic analysis framework' : 'AI 기반 전략 분석 프레임워크 개발'}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="framework-peek">
            <h4>{isEn ? '📐 Framework Snapshot' : '📐 진단 프레임워크 일부 공개'}</h4>
            <div className="framework-steps">
              <div className="fw-step">
                <div className="fw-step-num">01</div>
                <div className="fw-step-title">{isEn ? 'Revenue structure diagnosis' : '수익 구조 진단'}</div>
                <div className="fw-step-desc">
                  {isEn ? (
                    <>Current ARPU, eCPM,<br />and model potential analysis</>
                  ) : (
                    <>현재 ARPU, eCPM,<br />수익 모델별 잠재력 분석</>
                  )}
                </div>
              </div>
              <div className="fw-step">
                <div className="fw-step-num">02</div>
                <div className="fw-step-title">{isEn ? 'Conversion potential' : '전환 가능성 평가'}</div>
                <div className="fw-step-desc">
                  {isEn ? (
                    <>Estimate subscription/IAP conversion<br />against category benchmarks</>
                  ) : (
                    <>카테고리별 벤치마크 대비<br />구독/인앱 전환율 추정</>
                  )}
                </div>
              </div>
              <div className="fw-step">
                <div className="fw-step-num">03</div>
                <div className="fw-step-title">{isEn ? 'Price simulation' : '가격 시뮬레이션'}</div>
                <div className="fw-step-desc">
                  {isEn ? (
                    <>WTP-based optimal price band<br />and revenue-maximizing points</>
                  ) : (
                    <>WTP 기반 최적 가격대<br />수익 극대화 포인트 산출</>
                  )}
                </div>
              </div>
              <div className="fw-step">
                <div className="fw-step-num">04</div>
                <div className="fw-step-title">{isEn ? 'Execution roadmap' : '실행 로드맵'}</div>
                <div className="fw-step-desc">
                  {isEn ? (
                    <>30/60/90-day plan<br />with concrete actions</>
                  ) : (
                    <>30/60/90일 단위<br />구체적 액션 아이템 설계</>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
