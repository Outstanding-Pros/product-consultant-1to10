import { type Locale } from '@/i18n/locale'

type QuoteBarProps = {
  locale: Locale
}

const quotesByLocale = {
  ko: [
    {
      text: 'Sprint 항목이 구체적이라 팀 주간 회의에서 바로 실행으로 넘어갔습니다.',
      author: 'A팀 · SaaS',
      initial: 'A',
    },
    {
      text: 'Market + Benchmark 조합으로 포지셔닝을 다시 잡으면서 전환율이 올라갔어요.',
      author: 'B팀 · 커머스 앱',
      initial: 'B',
    },
    {
      text: '여러 앱을 운영하는데 어떤 앱에 집중할지 대시보드에서 바로 판단했습니다.',
      author: 'C팀 · 포트폴리오 운영',
      initial: 'C',
    },
    {
      text: 'Roadmap이 북극성 지표와 연결돼 있어서 장기 계획 수립이 쉬웠습니다.',
      author: 'D팀 · 콘텐츠 앱',
      initial: 'D',
    },
  ],
  en: [
    {
      text: 'Sprint tasks were specific enough to execute immediately in our weekly meeting.',
      author: 'Team A · SaaS',
      initial: 'A',
    },
    {
      text: 'Market and Benchmark together helped us reposition and improve conversion.',
      author: 'Team B · Commerce app',
      initial: 'B',
    },
    {
      text: 'We run multiple apps, and the dashboard made prioritization decisions much clearer.',
      author: 'Team C · Portfolio operator',
      initial: 'C',
    },
    {
      text: 'Roadmap connected to our North Star metric made long-term planning practical.',
      author: 'Team D · Content app',
      initial: 'D',
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
