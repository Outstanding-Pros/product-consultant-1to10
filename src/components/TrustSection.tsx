import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type TrustSectionProps = {
  locale: Locale
}

export default function TrustSection({ locale }: TrustSectionProps) {
  const isEn = locale === 'en'
  const signals = isEn
    ? [
        {
          id: '01',
          persona: 'Utility tool developer',
          quote: 'We have 3,000 DAU, but my own wallet is still empty. I applied because I need to find the right timing for paid feature conversion.',
          need: 'Need: payment conversion timing and category benchmark',
        },
        {
          id: '02',
          persona: 'Community app operator',
          quote: 'How are other communities at a similar scale building monetization? Server costs are starting to scare me.',
          need: 'Need: competitor monetization model comparison',
        },
        {
          id: '03',
          persona: 'Solo casual game developer',
          quote: 'Users come back daily, but it does not turn into revenue. I cannot tell if these metrics are truly sustainable.',
          need: 'Need: service sustainability metrics',
        },
        {
          id: '04',
          persona: 'Lifestyle tracking app team',
          quote: 'Instead of blindly adding ads, we want to study smarter monetization indicators specific to our category.',
          need: 'Need: category-optimized metric analysis',
        },
        {
          id: '05',
          persona: 'Newsletter-based web service',
          quote: 'Growth metrics look strong, but revenue metrics are frozen. I want to identify the bottleneck metrics we are missing.',
          need: 'Need: bottleneck metric discovery and prioritization',
        },
      ]
    : [
        {
          id: '01',
          persona: '유틸리티 도구 개발자',
          quote: 'DAU 3,000명인데 정작 제 지갑은 비어있네요. 유료 기능 전환 시점을 잡고 싶어 신청했습니다.',
          need: 'Need: 결제 유도 타이밍 및 카테고리 벤치마킹',
        },
        {
          id: '02',
          persona: '커뮤니티 앱 운영자',
          quote: '비슷한 규모의 다른 커뮤니티들은 수익 모델을 어떻게 가져가고 있나요? 서버비 감당이 슬슬 무서워져요.',
          need: 'Need: 경쟁 서비스 수익 모델 비교',
        },
        {
          id: '03',
          persona: '1인 캐주얼 게임 개발자',
          quote: '유저들이 매일 들어오긴 하는데, 이게 돈으로 연결이 안 돼요. 지속 가능한 지표인지 판단이 안 섭니다.',
          need: 'Need: 서비스 지속 가능성 판단 지표',
        },
        {
          id: '04',
          persona: '라이프스타일 기록 앱',
          quote: '무작정 광고를 넣기보단, 저희 카테고리에 맞는 영리한 수익 실현 지표를 공부하고 싶어요.',
          need: 'Need: 카테고리 최적화 지표 분석',
        },
        {
          id: '05',
          persona: '뉴스레터 기반 웹 서비스',
          quote: '성장 지표는 좋은데 수익 지표는 멈춰있습니다. 제가 놓치고 있는 병목 지표가 무엇인지 궁금해요.',
          need: 'Need: 병목 지표 파악 및 우선순위 설정',
        },
      ]

  return (
    <section className="section trust-section">
      <div className="container">
        <Reveal><span className="section-label">{isEn ? 'USER SIGNALS' : '유저 신호'}</span></Reveal>
        <Reveal>
          <h2 className="comparison-heading">
            {isEn ? 'Real user signals before purchase' : '구매 전 단계에서 관측된 실제 유저 신호'}
          </h2>
        </Reveal>
        <Reveal>
          <p className="comparison-sub">
            {isEn
              ? 'These are amplified but reality-based signals from teams facing monetization bottlenecks.'
              : '아래는 실제를 기반으로 증강한 고객 신호입니다. 공통점은 모두 “수익화 의사결정 병목”에 부딪혀 있다는 점입니다.'}
          </p>
        </Reveal>

        <div className="signal-grid">
          {signals.map((signal) => (
            <Reveal key={signal.id}>
              <article className="signal-card">
                <div className="signal-head">
                  <span className="signal-id">{signal.id}</span>
                  <h3>{signal.persona}</h3>
                </div>
                <p className="signal-quote">&quot;{signal.quote}&quot;</p>
                <div className="signal-need">
                  {signal.need}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
