"use client";

import { useReveal } from "@/hooks/useReveal";

const problems = [
  {
    icon: "📉",
    title: "AdMob으로 천장에 부딪혔다",
    desc: "역산해보면 아시죠 — 광고만으로 월 100만원이면 DAU 6~7천이 필요합니다. 현실적으로 광고 수익에는 한계가 있습니다.",
  },
  {
    icon: "🔄",
    title: '"뭘 유료로 만들지"에서 멈췄다',
    desc: "인앱결제를 달아야 하는 건 압니다. 기술이 문제가 아니라, 무엇을 어떤 가격에 팔아야 하는지가 문제입니다. 결국 코딩이 더 편해서 돌아갑니다.",
  },
  {
    icon: "🤹",
    title: "앱이 여러 개인데 어디에 집중할지 모르겠다",
    desc: "앱 2~5개를 운영 중인데, 전부 중간만 갑니다. 어떤 앱을 키우고, 어떤 앱을 접어야 할지 — 데이터는 있는데 판단 프레임이 없습니다.",
  },
  {
    icon: "😶",
    title: "물어볼 곳이 없다",
    desc: '유튜브는 "나는 이렇게 성공했다" 스토리. 커뮤니티는 "분야마다 달라요." 내 앱의 맥락을 이해하고 전략을 같이 짜주는 사람이 없습니다.',
  },
];

export default function ProblemSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="border-y border-border bg-bg-secondary py-25 max-md:py-18"
    >
      <div className="mx-auto max-w-[1080px] px-6">
        <span
          className="reveal mb-4 block text-[11px] uppercase tracking-[3px] text-accent"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          PROBLEM
        </span>
        <h2 className="reveal mb-14 text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.4]">
          혹시 이런 상태이신가요?
        </h2>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {problems.map((p, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-9 px-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-accent hover:bg-bg-card-hover"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px] opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, var(--danger), transparent)",
                }}
              />
              <span className="mb-5 block text-[32px]">{p.icon}</span>
              <h3 className="mb-3 text-[17px] font-bold leading-[1.5]">
                {p.title}
              </h3>
              <p className="text-sm leading-[1.8] text-text-secondary">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
