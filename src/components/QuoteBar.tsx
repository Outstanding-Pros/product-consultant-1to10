const quotes = [
  {
    text: '진단서 보고 처음으로 \'아 이걸 팔면 되겠다\'가 보였습니다. 강의 10개 듣는 것보다 나았어요.',
    author: 'K** · 유틸리티 앱 · DAU 1,800',
    initial: 'K',
  },
  {
    text: '앱 3개 중 어디에 집중할지 6개월째 고민했는데, 데이터 기반으로 정리해주니까 바로 결정할 수 있었어요.',
    author: 'P** · 다작형 개발자 · 앱 4개 운영',
    initial: 'P',
  },
  {
    text: 'MAU 8천인데 월 30만원이었거든요. 처방대로 구독 모델 붙이고 2달 만에 월 95만원 됐습니다.',
    author: 'J** · 라이프스타일 앱 · MAU 8,000',
    initial: 'J',
  },
  {
    text: '내 앱 숫자를 넣으면 \'이 가격에 이 기능을 팔아라\'까지 나오는 게 충격이었어요.',
    author: 'L** · 정보성 앱 · DAU 3,200',
    initial: 'L',
  },
]

export default function QuoteBar() {
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
