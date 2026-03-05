import { type Locale } from '@/i18n/locale'

type QuoteBarProps = {
  locale: Locale
}

const quotesByLocale = {
  ko: [
    {
      text: 'DAU 3,000명인데 정작 제 지갑은 비어있네요. 유료 기능 전환 시점을 잡고 싶어 신청했습니다.',
      author: '유틸리티 도구 개발자',
      initial: 'U',
    },
    {
      text: '비슷한 규모의 다른 커뮤니티들은 수익 모델을 어떻게 가져가고 있나요? 서버비 감당이 슬슬 무서워져요.',
      author: '커뮤니티 앱 운영자',
      initial: 'C',
    },
    {
      text: '유저들이 매일 들어오긴 하는데, 이게 돈으로 연결이 안 돼요. 지속 가능한 지표인지 판단이 안 섭니다.',
      author: '1인 캐주얼 게임 개발자',
      initial: 'G',
    },
    {
      text: '무작정 광고를 넣기보단, 저희 카테고리에 맞는 영리한 수익 실현 지표를 공부하고 싶어요.',
      author: '라이프스타일 기록 앱',
      initial: 'L',
    },
    {
      text: '성장 지표는 좋은데 수익 지표는 멈춰있습니다. 제가 놓치고 있는 병목 지표가 무엇인지 궁금해요.',
      author: '뉴스레터 기반 웹 서비스',
      initial: 'N',
    },
  ],
  en: [
    {
      text: 'We have 3,000 DAU, but my own wallet is still empty. I applied because I need the right timing to convert paid features.',
      author: 'Utility tool developer',
      initial: 'U',
    },
    {
      text: 'How are communities at a similar scale monetizing? Server costs are starting to scare me.',
      author: 'Community app operator',
      initial: 'C',
    },
    {
      text: 'Users come back every day, but it does not connect to revenue. I cannot tell if these metrics are sustainable.',
      author: 'Solo casual game developer',
      initial: 'G',
    },
    {
      text: 'Instead of blindly adding ads, we want smarter monetization indicators that fit our category.',
      author: 'Lifestyle tracking app',
      initial: 'L',
    },
    {
      text: 'Growth metrics look strong, but revenue metrics are frozen. I want to find the bottleneck metrics we are missing.',
      author: 'Newsletter-based web service',
      initial: 'N',
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
