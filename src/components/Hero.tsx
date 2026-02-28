export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-eyebrow">前 PO 출신 기획자의 맞춤형 수익화 컨설팅</span>
          <h1>
            유저는 오는데,<br />수익이 안 따라오시죠?
            <span className="line-accent">CoPO가 해결합니다</span>
          </h1>
          <p className="hero-sub">
            강의 듣고, 커뮤니티 물어봐도 안 풀리던 이유 —<br />
            &quot;일반론&quot;이 아니라 <strong>당신의 앱 데이터에 기반한 전략</strong>이 없었기 때문입니다.
          </p>
          <div className="cta-group">
            <a href="#pricing" className="btn-primary">내 앱 진단받기</a>
            <span className="btn-sub-text">4,900원 · 24시간 이내 전달 · 환불 보장</span>
          </div>
          <div className="hero-proof">
            <div className="proof-item">
              <span className="proof-number">4,900원</span>
              <span className="proof-label">첫 진단 비용</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">24h</span>
              <span className="proof-label">진단서 전달</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">100%</span>
              <span className="proof-label">불만족 시 환불</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
