'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  {
    question: 'ChatGPT에 물어보면 되는 거 아닌가요?',
    answer: 'ChatGPT는 매번 처음부터 설명해야 하고, 앱 수익화에 특화된 분석 프레임워크가 없습니다. 처방전은 카테고리별 벤치마크 데이터와 수익화 전문 프레임워크를 적용해 맞춤 전략을 제공합니다. 그리고 월간 구독 시, 다음 달에 물어볼 때 지난달 실험 결과를 기억하고 이어서 코칭합니다.',
  },
  {
    question: '진단서의 수익 예측은 어떤 근거로 나오나요?',
    answer: '모든 수익 시뮬레이션에는 계산 근거가 포함됩니다. "MAU × 전환율 × 구독 가격 = 예상 수익" 형태로, 어떤 전환율을 가정했는지, 왜 그 수치가 현실적인지, 카테고리별 벤치마크 대비 어느 위치인지를 투명하게 보여드립니다. 근거 없는 장밋빛 전망은 하지 않습니다.',
  },
  {
    question: '앱이 여러 개인데, 전부 진단해주나요?',
    answer: '첫 진단(4,900원)은 앱 1개 기준입니다. 앱 여러 개를 운영 중이시라면 월간 처방(49,000원/월)에서 포트폴리오 전체 전략을 다룹니다 — 어떤 앱에 집중하고, 어떤 앱을 접거나 유지할지 데이터 기반으로 판단해드립니다.',
  },
  {
    question: '어떤 앱이든 가능한가요?',
    answer: '플레이스토어/앱스토어에 출시된 앱 중, DAU 500 이상인 앱을 대상으로 합니다. 유틸리티, 정보성, 게임, 라이프스타일 등 카테고리는 무관합니다. DAU 500 미만이시라면 아래 \'수익화 체크리스트\'를 먼저 받아보세요.',
  },
  {
    question: '환불 가능한가요?',
    answer: '첫 진단(4,900원)은 수령 후 만족하지 않으시면 이유 불문 100% 환불해드립니다. 월간 구독(49,000원)은 결제일로부터 7일 이내 환불 가능하며, 언제든 다음 달 해지할 수 있습니다.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [email, setEmail] = useState('')

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  function handleEarlySignup() {
    if (!email || !email.includes('@')) {
      alert('이메일 주소를 입력해주세요.')
      return
    }
    alert(`감사합니다! 체크리스트를 ${email}로 보내드리겠습니다.`)
    setEmail('')
  }

  return (
    <section className="section faq-section">
      <div className="container">
        <Reveal><span className="section-label">FAQ</span></Reveal>
        <Reveal><h2 className="comparison-heading">자주 묻는 질문</h2></Reveal>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <Reveal key={i}>
              <div className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  {faq.question}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="early-stage">
            <h3>🌱 아직 DAU 500 미만이신가요?</h3>
            <p>
              괜찮습니다. 먼저 <strong>&quot;인디 앱 수익화 체크리스트 (무료)&quot;</strong>를 받아보세요.<br />
              출시 이후 수익화까지 놓치기 쉬운 7가지 포인트를 정리했습니다.
            </p>
            <div className="email-row">
              <input
                type="email"
                placeholder="이메일 주소"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleEarlySignup}>무료로 받기</button>
            </div>
            <p className="note">스팸 없음 · 언제든 구독 해지 가능</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
