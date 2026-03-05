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
            {isEn ? 'Revenue Dashboards crafted by POs and Growth experts.' : '현직 PO / 그로스 전문 팀이 만든 수익 실현 대시보드'}
          </span>
          <h1>
            {isEn ? 'Launched,' : '출시는 했는데,'} 
            <br />
            {isEn ? 'but not profiting?' : '수익이 안 따라오나요?'}
            <span className="line-accent">
              {isEn ? (
                <>
                  <span className="hero-brand-underline">Propel</span> fixes that
                </>
              ) : (
                'Propel이 해결합니다'
              )}
            </span>
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
                방법을 몰라서가 아니라 <strong>내 제품 데이터에 딱 맞는 전략</strong>이 없었기 때문입니다.
              </>
            )}
          </p>
          <div className="cta-group">
            <a href="#pricing" className="btn-primary">{isEn ? 'Get early access' : '사전 신청하기'}</a>
          </div>
          <div className="hero-proof">
            <div className="proof-item">
              <span className="proof-number">
                {isEn ? (
                  <>
                    <span className="price-strike">$14/mo</span>
                    <br />
                    <span className="price-sale">$7/mo</span>
                  </>
                ) : (
                  <>
                    <span className="price-strike">19,000원</span>
                    <br />
                    <span className="price-sale">9,500원/월</span>
                  </>
                )}
              </span>
              <span className="proof-label">{isEn ? 'Basic plan' : 'Basic 플랜'}</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">
                {isEn ? (
                  <>
                    <span className="price-strike">$40/mo</span>
                    <br />
                    <span className="price-sale">$20/mo</span>
                  </>
                ) : (
                  <>
                    <span className="price-strike">59,000원</span>
                    <br />
                    <span className="price-sale">29,500원/월</span>
                  </>
                )}
              </span>
              <span className="proof-label">{isEn ? 'Pro plan' : 'Pro 플랜'}</span>
            </div>
            <div className="proof-item">
              
              <span className="proof-number">
                <span className="price-strike"> </span>
                <br />
                <span className="price-sale">50%</span>
              </span>
              <span className="proof-label">{isEn ? 'Monthly pass pre-launch' : '사전신청 시 모든 플랜 적용'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
