import { type Locale } from '@/i18n/locale'

type HeroProps = {
  locale: Locale
}

export default function Hero({ locale }: HeroProps) {
  const isEn = locale === 'en'

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            {isEn ? 'Monetization dashboard built by former PO and growth operators' : '前 PO + 그로스 팀이 만든 수익화 대시보드'}
          </span>
          <h1>
            {isEn ? 'Users are coming in,' : '유저는 오는데,'}
            <br />
            {isEn ? 'but revenue is not catching up?' : '수익이 안 따라오시죠?'}
            <span className="line-accent">{isEn ? 'Propel fixes that' : 'Propel이 해결합니다'}</span>
          </h1>
          <p className="hero-sub">
            {isEn ? 'Why courses and communities did not solve it:' : '강의 듣고, 커뮤니티 물어봐도 안 풀리던 이유 —'}
            <br />
            {isEn ? (
              <>
                You did not need more generic advice. You needed <strong>a strategy built on your app data</strong>.
              </>
            ) : (
              <>
                &quot;일반론&quot;이 아니라 <strong>당신의 앱 데이터에 기반한 전략</strong>이 없었기 때문입니다.
              </>
            )}
          </p>
          <div className="cta-group">
            <a href="#pricing" className="btn-primary">{isEn ? 'Start with Basic / Pro' : 'Basic / Pro 시작하기'}</a>
            <span className="btn-sub-text">
              {isEn ? 'Basic KRW 19,000 ($14) · Pro KRW 59,000 ($44) · 1+1 pre-launch offer' : 'Basic 19,000원 ($14) · Pro 59,000원 ($44) · 사전신청 1+1'}
            </span>
          </div>
          <div className="hero-proof">
            <div className="proof-item">
              <span className="proof-number">19,000원</span>
              <span className="proof-label">{isEn ? 'Basic plan' : 'Basic 플랜'}</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">59,000원</span>
              <span className="proof-label">{isEn ? 'Pro plan' : 'Pro 플랜'}</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">1+1</span>
              <span className="proof-label">{isEn ? 'Monthly pass pre-launch' : '월 구독권 사전신청'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
