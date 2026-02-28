import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type PrescriptionPreviewProps = {
  locale: Locale
}

export default function PrescriptionPreview({ locale }: PrescriptionPreviewProps) {
  const isEn = locale === 'en'

  return (
    <section className="section preview-section">
      <div className="container">
        <Reveal><span className="section-label">SAMPLE</span></Reveal>
        <Reveal><h2 className="comparison-heading">{isEn ? 'Sample report preview' : '진단서 미리보기'}</h2></Reveal>
        <Reveal><p className="comparison-sub">{isEn ? 'You will receive a personalized report in this format.' : '실제로 이런 형태의 맞춤형 진단서를 받게 됩니다.'}</p></Reveal>
        <Reveal>
          <div className="prescription-mock rx-blur">
            <div className="rx-header">
              <span className="rx-logo">💊</span>
              <span className="rx-title">{isEn ? 'CoPO - Diagnosis Result' : 'CoPO — 진단 결과'}</span>
            </div>
            <div className="rx-meta">
              <div className="rx-meta-item">
                <span className="rx-meta-key">{isEn ? 'App:' : '앱:'}</span>
                <span className="rx-meta-val">{isEn ? 'Realtime Widget' : '실검위젯'}</span>
              </div>
              <div className="rx-meta-item">
                <span className="rx-meta-key">{isEn ? 'Category:' : '카테고리:'}</span>
                <span className="rx-meta-val">{isEn ? 'Utility / Widget' : '유틸리티 / 위젯'}</span>
              </div>
              <div className="rx-meta-item">
                <span className="rx-meta-key">MAU:</span>
                <span className="rx-meta-val">12,000</span>
              </div>
              <div className="rx-meta-item">
                <span className="rx-meta-key">{isEn ? 'Monthly revenue:' : '월 수익:'}</span>
                <span className="rx-meta-val">{isEn ? 'KRW 400,000 (AdMob)' : '40만원 (AdMob)'}</span>
              </div>
            </div>
            <div className="rx-diagnosis">
              <div className="rx-diagnosis-badge">
                {isEn ? (
                  <>
                    💊 Monetization Stage: <span>Level 2 / 5 - Ad-only dependence</span>
                  </>
                ) : (
                  <>
                    💊 수익화 단계: <span>Level 2 / 5 — 광고 단일 의존기</span>
                  </>
                )}
              </div>
            </div>
            <div className="rx-item">
              <div className="rx-item-title">{isEn ? 'Prescription 1 - Premium bundle test' : '처방 1 — 프리미엄 번들 실험'}</div>
              <p>{isEn ? 'Test a KRW 2,900 monthly plan for "Ad-free + Realtime keyword alerts".' : '"광고 제거 + 실시간 키워드 알림" 번들을 월 2,900원 구독으로 테스트'}</p>
              <p className="rx-result">{isEn ? 'Estimated upside: +KRW 700K to 1.39M/month' : '예상 추가 수익: 월 +70~139만원'}</p>
              <div className="rx-calc">
                {isEn ? (
                  <>
                    <span className="calc-formula">MAU 12,000 x conversion 2-4% = paid subscribers <strong>240-480</strong></span><br />
                    <span className="calc-formula">240-480 x KRW 2,900 / month = <strong>KRW 696K to 1.392M / month</strong></span><br />
                    * Conservative estimate based on utility app benchmarks (1.5-5% subscription conversion)
                  </>
                ) : (
                  <>
                    <span className="calc-formula">MAU 12,000 × 전환율 2~4% = 유료 구독자 <strong>240~480명</strong></span><br />
                    <span className="calc-formula">240~480명 × 월 2,900원 = <strong>월 69.6~139.2만원</strong></span><br />
                    * 유틸리티 앱 평균 구독 전환율 1.5~5% 기준 보수적 추정
                  </>
                )}
              </div>
            </div>
            <div className="rx-item">
              <div className="rx-item-title">{isEn ? 'Prescription 2 - Ad mix optimization' : '처방 2 — 광고 믹스 최적화'}</div>
              <p>{isEn ? 'Add rewarded ads to current banner + interstitial setup -> 1.5x eCPM.' : '현재 배너+전면 구조에 보상형 광고 추가 → eCPM 1.5배'}</p>
              <p className="rx-result">{isEn ? '+KRW 150K to 200K/month (low effort, can start this week)' : '월 +15~20만원 (실행 난이도: 낮음, 이번 주 바로 가능)'}</p>
            </div>
            <div className="rx-item">
              <div className="rx-item-title">{isEn ? 'Prescription 3 - 90-day roadmap' : '처방 3 — 90일 실행 로드맵'}</div>
              <p>{isEn ? 'Week 1-4: Premium prototype -> Week 5-8: Pricing optimization -> Week 9-12: Retention loop' : 'Week 1~4: 프리미엄 프리토타입 → Week 5~8: 가격 최적화 → Week 9~12: 리텐션 루프'}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
