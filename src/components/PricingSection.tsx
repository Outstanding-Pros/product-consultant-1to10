"use client";

import { useReveal } from "@/hooks/useReveal";

interface PricingSectionProps {
  onOpenModal: (plan: "single" | "monthly") => void;
}

export default function PricingSection({ onOpenModal }: PricingSectionProps) {
  const ref = useReveal();

  return (
    <section ref={ref} id="pricing" className="py-25 max-md:py-18">
      <div className="mx-auto max-w-[1080px] px-6">
        <span
          className="reveal mb-4 block text-[11px] uppercase tracking-[3px] text-accent"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          PRICING
        </span>
        <h2 className="reveal text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.4]">
          시작하기
        </h2>
        <p className="reveal mt-2 text-base text-text-secondary">
          첫 진단을 먼저 받고, 만족하시면 월간 구독을 시작하세요.
        </p>

        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {/* Single diagnosis */}
          <div className="reveal relative rounded-[20px] border border-border bg-bg-card p-11 px-9 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-wider text-text-muted">
              첫 진단
            </div>
            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-[40px] font-black tracking-tight">
                4,900
              </span>
              <span className="text-sm text-text-muted">원 / 1회</span>
            </div>
            <p className="mb-7 text-sm leading-[1.7] text-text-secondary">
              내 앱의 현재 상태를 진단하고, 다음 30일 실행 플랜을 받으세요.
            </p>
            <ul className="mb-8 space-y-2">
              {[
                "앱 프로필 기반 수익화 단계 진단 (5단계)",
                "최적 수익 모델 추천 + 예상 수익 시뮬레이션",
                "계산 근거가 포함된 구체적 숫자",
                "다음 30일 실행 플랜",
                "24시간 이내 이메일 전달",
                "불만족 시 100% 환불",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 py-2 text-sm text-text-secondary"
                >
                  <span className="mt-px shrink-0 font-bold text-accent">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onOpenModal("single")}
              className="block w-full rounded-xl border border-border bg-transparent px-4 py-4 text-center text-[15px] font-semibold text-text-primary transition-all duration-300 hover:border-accent hover:text-accent"
            >
              진단받기 — 4,900원
            </button>
          </div>

          {/* Monthly */}
          <div className="reveal relative rounded-[20px] border border-accent bg-gradient-to-b from-[rgba(74,222,128,0.05)] to-bg-card p-11 px-9 transition-all duration-300 hover:-translate-y-1">
            <span className="absolute -top-3 left-9 rounded-md bg-accent px-3.5 py-1 text-xs font-bold text-bg-primary">
              추천
            </span>
            <div className="mb-3 text-[13px] font-bold uppercase tracking-wider text-text-muted">
              월간 처방
            </div>
            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-[40px] font-black tracking-tight">
                49,000
              </span>
              <span className="text-sm text-text-muted">원 / 월</span>
            </div>
            <p className="mb-7 text-sm leading-[1.7] text-text-secondary">
              맥락이 끊기지 않는 전략 파트너. 실행 → 피드백 → 다음 스텝.
            </p>
            <ul className="mb-8 space-y-2">
              {[
                "첫 진단 포함 (단독 구매보다 즉시 절약)",
                "매주 실행 결과 기반 다음 스텝 코칭",
                "이전 실험 결과를 기억하는 연속 전략",
                '"이번 주에 정확히 뭘 하라"는 액션 아이템',
                "앱 여러 개 운영 시 포트폴리오 전략 포함",
                "카카오톡 / 이메일로 수시 질문 가능",
                "언제든 해지 가능",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 py-2 text-sm text-text-secondary"
                >
                  <span className="mt-px shrink-0 font-bold text-accent">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onOpenModal("monthly")}
              className="block w-full rounded-xl border-none bg-accent px-4 py-4 text-center text-[15px] font-bold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(74,222,128,0.3)]"
            >
              월간 처방 시작 — 49,000원/월
            </button>
          </div>
        </div>

        <p className="reveal mt-6 text-center text-[13px] text-text-muted">
          * 첫 진단 후 만족하시면 월간으로 전환하시는 걸 추천드립니다.
        </p>
      </div>
    </section>
  );
}
