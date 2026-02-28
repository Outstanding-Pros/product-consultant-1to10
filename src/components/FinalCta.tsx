import Reveal from './Reveal'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal><h2>&quot;뭘 해야 하는지&quot;를<br />더 이상 혼자 고민하지 마세요.</h2></Reveal>
        <Reveal><p>커피 한 잔 값으로, 당신의 앱에 맞는 수익화 방향을 찾아보세요.</p></Reveal>
        <Reveal><a href="#pricing" className="btn-primary">내 앱 진단받기</a></Reveal>
      </div>
    </section>
  )
}
