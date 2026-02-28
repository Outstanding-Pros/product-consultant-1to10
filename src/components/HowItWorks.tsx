"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    num: "01",
    time: "3분",
    title: "앱 프로필 입력",
    desc: "앱 이름, 카테고리, DAU/MAU, 현재 수익 모델, 월 수익, 가장 고민되는 것. 간단한 폼 하나면 됩니다.",
  },
  {
    num: "02",
    time: "24시간 이내",
    title: "맞춤형 진단서 수령",
    desc: "수익화 단계 진단(5단계), 당신의 앱에 맞는 수익 모델, 예상 수익 시뮬레이션, 다음 30일 실행 플랜을 이메일로 전달합니다.",
  },
  {
    num: "03",
    time: "선택",
    title: "실행하고 다시 물어보기",
    desc: "월 구독 시, 실행 결과를 공유하면 다음 스텝을 이어서 코칭. 맥락이 끊기지 않는 전략 파트너가 됩니다.",
  },
];

export default function HowItWorks() {
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
          HOW IT WORKS
        </span>
        <h2 className="reveal text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.4]">
          진행 방식
        </h2>
        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal relative rounded-2xl border border-border bg-bg-card p-10 px-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-accent"
            >
              <span
                className="absolute right-6 top-5 text-5xl font-black text-accent opacity-20"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.num}
              </span>
              <span
                className="mb-4 inline-block rounded bg-[var(--accent-glow)] px-2.5 py-1 text-[11px] tracking-wider text-accent"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.time}
              </span>
              <h3 className="mb-3 text-lg font-bold">{s.title}</h3>
              <p className="text-sm leading-[1.8] text-text-secondary">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
