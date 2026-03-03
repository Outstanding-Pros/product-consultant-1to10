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
        <Reveal><h2 className="comparison-heading">{isEn ? 'Who built this product?' : '누가 만든 제품인가요?'}</h2></Reveal>
        <Reveal>
          <div className="trust-content">
            <div className="trust-photo">👨‍💻</div>
            <div className="trust-bio">
              <h3>{isEn ? '[Operator Name]' : '[운영자 이름]'}</h3>
              <span className="trust-role">
                {isEn ? 'Former Product Owner (PO) · Product Builder · PO/GTM Network Operator (250 members)' : '前 프로덕트 오너 (PO) · 제품 빌더 · PO/GTM 네트워크 운영 (250명)'}
              </span>
              <p>
                {isEn
                  ? 'Propel is a product built from real PO execution patterns. It systemizes A/B testing, metric analysis, and hypothesis validation into a repeatable monetization workflow. Instead of person-dependent consulting, the product applies a structured framework consistently. The framework is continuously refined through a PO/GTM network of 250 members and real field cases.'
                  : 'Propel은 PO가 실무에서 쓰던 실행 방식을 제품으로 만든 서비스입니다. A/B 테스트, 지표 분석, 가설 검증 과정을 수익화 워크플로우로 구조화했습니다. 사람 컨디션에 따라 달라지는 컨설팅이 아니라, 프레임워크가 일관되게 적용되는 제품으로 설계했습니다. 그리고 PO/GTM 네트워크 250명 운영에서 축적되는 현장 케이스로 프레임워크를 계속 고도화합니다.'}
              </p>
              <div className="trust-credentials">
                <span className="credential-tag" style={{ borderColor: 'var(--border-accent)', color: 'var(--accent)' }}>
                  {isEn ? '✦ Former Product Owner (PO)' : '✦ 前 프로덕트 오너 (PO)'}
                </span>
                <span className="credential-tag">{isEn ? 'PO/GTM network operator (250 members)' : 'PO/GTM 네트워크 운영 (250명)'}</span>
                <span className="credential-tag">{isEn ? 'Productized monetization framework builder' : '제품화된 수익화 프레임워크 설계'}</span>
                <span className="credential-tag">{isEn ? 'AI-powered strategic analysis framework' : 'AI 기반 전략 분석 프레임워크'}</span>
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
