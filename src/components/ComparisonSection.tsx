import Reveal from './Reveal'

export default function ComparisonSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal><span className="section-label">WHY THIS IS DIFFERENT</span></Reveal>
        <Reveal><h2 className="comparison-heading">이건 강의가 아닙니다.</h2></Reveal>
        <Reveal>
          <p className="comparison-sub">
            당신의 앱 데이터를 분석해서, 다음 90일간 <strong>정확히 무엇을 해야 하는지</strong> 알려드립니다.
          </p>
        </Reveal>
        <Reveal>
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>강의 / 유튜브</th>
                <th>커뮤니티</th>
                <th>CoPO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>맞춤도</td>
                <td className="dim">범용 프레임워크</td>
                <td className="dim">일회성 질답</td>
                <td>내 앱 데이터 기반 분석</td>
              </tr>
              <tr>
                <td>연속성</td>
                <td className="dim">보고 끝</td>
                <td className="dim">맥락 없음</td>
                <td>이전 실험 결과를 기억</td>
              </tr>
              <tr>
                <td>실행력</td>
                <td className="dim">&quot;이론은 알겠는데...&quot;</td>
                <td className="dim">&quot;분야마다 달라요&quot;</td>
                <td>&quot;이번 주에 이걸 하세요&quot;</td>
              </tr>
              <tr>
                <td>가격</td>
                <td className="dim">20~30만원</td>
                <td className="dim">무료</td>
                <td>4,900원부터</td>
              </tr>
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
