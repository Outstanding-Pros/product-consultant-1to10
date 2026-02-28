const quotes = [
  {
    text: "진단서 보고 처음으로 '아 이걸 팔면 되겠다'가 보였습니다. 강의 10개 듣는 것보다 나았어요.",
    author: "K**",
    detail: "유틸리티 앱 · DAU 1,800",
    avatar: "K",
  },
  {
    text: "앱 3개 중 어디에 집중할지 6개월째 고민했는데, 데이터 기반으로 정리해주니까 바로 결정할 수 있었어요.",
    author: "P**",
    detail: "다작형 개발자 · 앱 4개 운영",
    avatar: "P",
  },
  {
    text: "MAU 8천인데 월 30만원이었거든요. 처방대로 구독 모델 붙이고 2달 만에 월 95만원 됐습니다.",
    author: "J**",
    detail: "라이프스타일 앱 · MAU 8,000",
    avatar: "J",
  },
  {
    text: "내 앱 숫자를 넣으면 '이 가격에 이 기능을 팔아라'까지 나오는 게 충격이었어요.",
    author: "L**",
    detail: "정보성 앱 · DAU 3,200",
    avatar: "L",
  },
];

function QuoteCard({
  text,
  author,
  detail,
  avatar,
}: {
  text: string;
  author: string;
  detail: string;
  avatar: string;
}) {
  return (
    <div className="min-w-[340px] max-w-[400px] shrink-0 rounded-xl border border-border bg-bg-card p-6 px-7">
      <p className="mb-3 text-sm italic leading-[1.8] text-text-secondary">
        &quot;{text}&quot;
      </p>
      <div className="flex items-center gap-2 text-xs text-text-muted">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border-accent bg-[var(--accent-glow)] text-xs">
          {avatar}
        </span>
        {author} · {detail}
      </div>
    </div>
  );
}

export default function QuoteBar() {
  const allQuotes = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden border-y border-border bg-bg-secondary py-12">
      <div className="flex animate-[scrollQuotes_30s_linear_infinite] items-center gap-12">
        {allQuotes.map((q, i) => (
          <QuoteCard key={i} {...q} />
        ))}
      </div>
    </div>
  );
}
