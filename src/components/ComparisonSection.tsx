import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type ComparisonSectionProps = {
  locale: Locale
}

export default function ComparisonSection({ locale }: ComparisonSectionProps) {
  const isEn = locale === 'en'

  return (
    <section className="section">
      <div className="container">
        <Reveal><span className="section-label">WHY THIS IS DIFFERENT</span></Reveal>
        <Reveal><h2 className="comparison-heading">{isEn ? 'This is not another course.' : '이건 강의가 아닙니다.'}</h2></Reveal>
        <Reveal>
          <p className="comparison-sub">
            {isEn ? (
              <>
                We analyze your app data and tell you <strong>exactly what to do</strong> for the next 90 days.
              </>
            ) : (
              <>
                당신의 앱 데이터를 분석해서, 다음 90일간 <strong>정확히 무엇을 해야 하는지</strong> 알려드립니다.
              </>
            )}
          </p>
        </Reveal>
        <Reveal>
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>{isEn ? 'Courses / YouTube' : '강의 / 유튜브'}</th>
                <th>{isEn ? 'Community' : '커뮤니티'}</th>
                <th>CoPO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isEn ? 'Personalization' : '맞춤도'}</td>
                <td className="dim">{isEn ? 'Generic framework' : '범용 프레임워크'}</td>
                <td className="dim">{isEn ? 'One-off Q&A' : '일회성 질답'}</td>
                <td>{isEn ? 'Analysis based on your app data' : '내 앱 데이터 기반 분석'}</td>
              </tr>
              <tr>
                <td>{isEn ? 'Continuity' : '연속성'}</td>
                <td className="dim">{isEn ? 'Watch and end' : '보고 끝'}</td>
                <td className="dim">{isEn ? 'No context' : '맥락 없음'}</td>
                <td>{isEn ? 'Remembers previous experiment results' : '이전 실험 결과를 기억'}</td>
              </tr>
              <tr>
                <td>{isEn ? 'Execution' : '실행력'}</td>
                <td className="dim">{isEn ? '“I get the theory, but...”' : '"이론은 알겠는데..."'}</td>
                <td className="dim">{isEn ? '“It depends on the field.”' : '"분야마다 달라요"'}</td>
                <td>{isEn ? '“Do this this week.”' : '"이번 주에 이걸 하세요"'}</td>
              </tr>
              <tr>
                <td>{isEn ? 'Price' : '가격'}</td>
                <td className="dim">{isEn ? 'KRW 200K-300K' : '20~30만원'}</td>
                <td className="dim">{isEn ? 'Free' : '무료'}</td>
                <td>{isEn ? 'From KRW 4,900' : '4,900원부터'}</td>
              </tr>
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
