import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type ProblemSectionProps = {
  locale: Locale
}

export default function ProblemSection({ locale }: ProblemSectionProps) {
  const isEn = locale === 'en'

  return (
    <section className="section problem-section">
      <div className="container">
        <Reveal><span className="section-label">PROBLEM</span></Reveal>
        <Reveal><h2 className="problem-heading">{isEn ? 'Are you in one of these situations?' : '혹시 이런 상태이신가요?'}</h2></Reveal>
        <div className="problem-cards">
          <Reveal>
            <div className="problem-card">
              <span className="problem-icon">📉</span>
              <h3>{isEn ? 'You hit the AdMob ceiling' : 'AdMob으로 천장에 부딪혔다'}</h3>
              <p>
                {isEn
                  ? 'Back-calculating shows it: reaching KRW 1M/month with ads alone often needs DAU around 6K-7K. Ad revenue has a hard ceiling.'
                  : '역산해보면 아시죠 — 광고만으로 월 100만원이면 DAU 6~7천이 필요합니다. 현실적으로 광고 수익에는 한계가 있습니다.'}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="problem-card">
              <span className="problem-icon">🔄</span>
              <h3>{isEn ? 'You are stuck at “what should be paid?”' : '"뭘 유료로 만들지"에서 멈췄다'}</h3>
              <p>
                {isEn ? (
                  <>
                    You know in-app purchases matter. The issue is not coding, but <strong>what to sell and at which price</strong>.
                  </>
                ) : (
                  <>
                    인앱결제를 달아야 하는 건 압니다. 기술이 문제가 아니라, <strong>무엇을 어떤 가격에 팔아야 하는지</strong>가 문제입니다. 결국 코딩이 더 편해서 돌아갑니다.
                  </>
                )}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="problem-card">
              <span className="problem-icon">🤹</span>
              <h3>{isEn ? 'You have multiple apps but no focus' : '앱이 여러 개인데 어디에 집중할지 모르겠다'}</h3>
              <p>
                {isEn
                  ? 'You run 2-5 apps, but none breaks out. You have data, but no decision framework for what to scale or sunset.'
                  : '앱 2~5개를 운영 중인데, 전부 중간만 갑니다. 어떤 앱을 키우고, 어떤 앱을 접어야 할지 — 데이터는 있는데 판단 프레임이 없습니다.'}
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="problem-card">
              <span className="problem-icon">😶</span>
              <h3>{isEn ? 'You have nowhere to ask with context' : '물어볼 곳이 없다'}</h3>
              <p>
                {isEn ? (
                  <>
                    YouTube gives success stories. Communities say &quot;it depends.&quot; You need someone who <strong>understands your app context</strong> and builds a plan with you.
                  </>
                ) : (
                  <>
                    유튜브는 &quot;나는 이렇게 성공했다&quot; 스토리. 커뮤니티는 &quot;분야마다 달라요.&quot; <strong>내 앱의 맥락을 이해하고</strong> 전략을 같이 짜주는 사람이 없습니다.
                  </>
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
