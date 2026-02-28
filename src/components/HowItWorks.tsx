import Reveal from './Reveal'

export default function HowItWorks() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal><span className="section-label">HOW IT WORKS</span></Reveal>
        <Reveal><h2 className="comparison-heading">진행 방식</h2></Reveal>
        <div className="steps">
          <Reveal>
            <div className="step">
              <span className="step-number">01</span>
              <span className="step-time">3분</span>
              <h3>앱 프로필 입력</h3>
              <p>앱 이름, 카테고리, DAU/MAU, 현재 수익 모델, 월 수익, 가장 고민되는 것. 간단한 폼 하나면 됩니다.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="step">
              <span className="step-number">02</span>
              <span className="step-time">24시간 이내</span>
              <h3>맞춤형 진단서 수령</h3>
              <p>수익화 단계 진단(5단계), 당신의 앱에 맞는 수익 모델, 예상 수익 시뮬레이션, 다음 30일 실행 플랜을 이메일로 전달합니다.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="step">
              <span className="step-number">03</span>
              <span className="step-time">선택</span>
              <h3>실행하고 다시 물어보기</h3>
              <p>월 구독 시, 실행 결과를 공유하면 다음 스텝을 이어서 코칭. 맥락이 끊기지 않는 전략 파트너가 됩니다.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
