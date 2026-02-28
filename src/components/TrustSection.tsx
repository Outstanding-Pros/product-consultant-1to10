"use client";

import { useReveal } from "@/hooks/useReveal";

const credentials = [
  "인디 앱 개발자 커뮤니티 운영 (100+명)",
  "앱 수익화 진단 다수 수행",
  "AI 기반 전략 분석 프레임워크 개발",
];

const frameworkSteps = [
  {
    num: "01",
    title: "수익 구조 진단",
    desc: "현재 ARPU, eCPM,\n수익 모델별 잠재력 분석",
  },
  {
    num: "02",
    title: "전환 가능성 평가",
    desc: "카테고리별 벤치마크 대비\n구독/인앱 전환율 추정",
  },
  {
    num: "03",
    title: "가격 시뮬레이션",
    desc: "WTP 기반 최적 가격대\n수익 극대화 포인트 산출",
  },
  {
    num: "04",
    title: "실행 로드맵",
    desc: "30/60/90일 단위\n구체적 액션 아이템 설계",
  },
];

export default function TrustSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="border-b border-border py-25 max-md:py-18">
      <div className="mx-auto max-w-[1080px] px-6">
        <span
          className="reveal mb-4 block text-[11px] uppercase tracking-[3px] text-accent"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          WHO&apos;S BEHIND THIS
        </span>
        <h2 className="reveal text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.4]">
          누가 진단하나요?
        </h2>

        <div className="reveal mt-12 grid grid-cols-[auto_1fr] items-start gap-10 max-md:grid-cols-1 max-md:text-center">
          <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full border-2 border-border-accent bg-gradient-to-br from-[var(--accent-glow)] to-bg-card text-[40px] max-md:mx-auto">
            👨‍💻
          </div>
          <div>
            <h3 className="mb-1 text-xl font-bold">[운영자 이름]</h3>
            <span
              className="mb-4 block text-xs text-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              인디 앱 수익화 전략가 · 앱 수익 처방전 운영
            </span>
            <p className="mb-5 text-sm leading-[1.9] text-text-secondary">
              직접 앱을 만들고 수익화에 실패한 경험에서 출발했습니다. 100명
              이상의 1인 개발자 네트워크를 운영하며, AdMob 단일 의존에서
              구독/인앱결제 전환까지의 과정을 반복적으로 연구하고 있습니다. AI
              기반 분석 도구를 활용해 앱별 맞춤 전략을 설계하며, 모든 진단서는
              직접 검수하고 커스터마이징합니다.
            </p>
            <div className="flex flex-wrap gap-2.5 max-md:justify-center">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-border bg-bg-card px-3.5 py-1.5 text-[11px] text-text-secondary"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Framework peek */}
        <div className="reveal mt-12 rounded-2xl border border-border bg-bg-card p-8">
          <h4 className="mb-5 text-[15px] font-bold text-accent">
            📐 진단 프레임워크 일부 공개
          </h4>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 max-md:grid-cols-2">
            {frameworkSteps.map((s) => (
              <div
                key={s.num}
                className="rounded-xl border border-border bg-bg-primary p-5 px-4 text-center"
              >
                <div
                  className="mb-2 text-xl font-bold text-accent opacity-40"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {s.num}
                </div>
                <div className="mb-1 text-[13px] font-bold text-text-primary">
                  {s.title}
                </div>
                <div className="whitespace-pre-line text-[11px] leading-[1.6] text-text-muted">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
