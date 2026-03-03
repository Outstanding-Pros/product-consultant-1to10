import { type Locale } from '@/i18n/locale'

type QuoteBarProps = {
  locale: Locale
}

const quotesByLocale = {
  ko: [
    {
      text: '이 제품은 前 PO 출신과 소규모 창업팀 그로스 경험이 있는 팀이 함께 만들었습니다.',
      author: 'Propel Team',
      initial: 'T',
    },
    {
      text: '소규모 팀이 바로 실행할 수 있도록 Analytics, Market, Benchmark를 한 흐름으로 제공합니다.',
      author: 'Product Ops',
      initial: 'P',
    },
    {
      text: 'LLM 답변에서 끝나지 않게 Sprint와 Roadmap까지 연결해 주는 대시보드입니다.',
      author: 'Growth Team',
      initial: 'G',
    },
    {
      text: '개인 컨설턴트 의존이 아니라, 팀의 누적 케이스를 제품 기능으로 구조화했습니다.',
      author: 'Builder Team',
      initial: 'B',
    },
  ],
  en: [
    {
      text: 'Built by a team with former PO and small-startup growth experience.',
      author: 'Propel Team',
      initial: 'T',
    },
    {
      text: 'Analytics, Market, and Benchmark are connected in one execution flow for small teams.',
      author: 'Product Ops',
      initial: 'P',
    },
    {
      text: 'Not just chatbot answers: it continues into Sprint and Roadmap inside the dashboard.',
      author: 'Growth Team',
      initial: 'G',
    },
    {
      text: 'Execution know-how is productized from accumulated real cases, not tied to one consultant.',
      author: 'Builder Team',
      initial: 'B',
    },
  ],
} as const

export default function QuoteBar({ locale }: QuoteBarProps) {
  const quotes = quotesByLocale[locale]
  const allQuotes = [...quotes, ...quotes]

  return (
    <div className="quote-bar">
      <div className="quote-track">
        {allQuotes.map((quote, i) => (
          <div key={i} className="quote-card">
            <p className="quote-text">&quot;{quote.text}&quot;</p>
            <div className="quote-author">
              <span className="quote-avatar">{quote.initial}</span>
              {quote.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
