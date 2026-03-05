'use client'
import { useState } from 'react'
import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type FaqSectionProps = {
  locale: Locale
}

const faqsByLocale = {
  ko: [
    {
      question: 'ChatGPT에 물어보면 되는 거 아닌가요?',
      answer: 'LLM 챗봇은 대화형 답변에 강하지만, 분석 결과가 실행 플랜으로 구조화되지는 않습니다. Propel은 Analytics -> Market -> Benchmark -> Business Model -> Sprint -> Roadmap 흐름이 연결된 대시보드를 제공합니다.',
    },
    {
      question: '수익 예측은 어떤 근거로 나오나요?',
      answer: '모든 수익 시뮬레이션에는 계산 근거가 포함됩니다. "MAU × 전환율 × 구독 가격 = 예상 수익" 형태로, 어떤 전환율을 가정했는지, 왜 그 수치가 현실적인지, 카테고리별 벤치마크 대비 어느 위치인지를 투명하게 보여드립니다. 일관성 없이 무조건 긍정 응답하는 LLM과 다릅니다.',
    },
    {
      question: '서비스가 여러 개인데, 전부 연결할 수 있나요?',
      answer: 'Basic 플랜은 1개 서비스 연결이 가능하며, Pro 플랜은 3개 서비스 연결이 가능합니다. 단, MAU가 500 이하인 서비스의 경우 데이터 분석의 정확도가 낮을 수 있으니, 문의를 통해 상담을 먼저 받아보세요.',
    },
    {
      question: '어떤 서비스든 가능한가요?',
      answer: "유틸리티, 정보성, 게임, 라이프스타일 등 모든 카테고리가 가능합니다. 단, 출시 직후에는 '웹' 서비스만 지원하며, 앱 서비스는 26년 6월 이후로 지원 예정입니다.",
    },
    {
      question: '환불 가능한가요?',
      answer: '사전 신청은 언제든 환불 가능하며, 월 구독은 다음 결제 주기 전 해지할 수 있습니다. 환불 및 해지 정책은 결제 단계에서 자세히 안내됩니다.',
    },
  ],
  en: [
    {
      question: "Why not just ask ChatGPT?",
      answer: 'LLM chatbots are great at conversational answers, but they usually do not enforce an execution workflow. Propel connects Analytics -> Market -> Benchmark -> Business Model -> Sprint -> Roadmap in one dashboard.',
    },
    {
      question: 'What is the basis for the revenue forecast?',
      answer: 'Every simulation includes explicit calculation logic. We show assumptions transparently in the form of "MAU x conversion rate x subscription price = expected revenue", explain why each assumption is realistic, and position it against category benchmarks.',
    },
    {
      question: 'I run multiple apps. Can all be covered?',
      answer: 'Yes. Basic ($14) is best for one-app core analysis, while Pro ($40/mo) is designed for portfolio-level prioritization and roadmap planning.',
    },
    {
      question: 'Do you support any app category?',
      answer: 'Yes, for apps already released on Play Store/App Store with DAU 500 or higher. Utility, content, game, and lifestyle categories are all supported. If your DAU is below 500, start with the free checklist below.',
    },
    {
      question: 'Can I get a refund?',
      answer: 'Refund and cancellation policy is shown at checkout. Monthly subscription can be canceled anytime before the next billing cycle.',
    },
  ],
} as const

export default function FaqSection({ locale }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const isEn = locale === 'en'
  const faqs = faqsByLocale[locale]

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  function handleEarlySignup() {
    if (!email || !email.includes('@')) {
      alert(isEn ? 'Please enter a valid email address.' : '이메일 주소를 입력해주세요.')
      return
    }
    alert(isEn ? `Thank you! We will send the checklist to ${email}.` : `감사합니다! 체크리스트를 ${email}로 보내드리겠습니다.`)
    setEmail('')
  }

  return (
    <section className="section faq-section">
      <div className="container">
        <Reveal><span className="section-label">FAQ</span></Reveal>
        <Reveal><h2 className="comparison-heading">{isEn ? 'Frequently asked questions' : '자주 묻는 질문'}</h2></Reveal>
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
      </div>
    </section>
  )
}
