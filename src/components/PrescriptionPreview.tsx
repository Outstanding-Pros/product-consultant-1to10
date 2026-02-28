"use client";

import { useReveal } from "@/hooks/useReveal";

export default function PrescriptionPreview() {
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
          SAMPLE
        </span>
        <h2 className="reveal text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.4]">
          진단서 미리보기
        </h2>
        <p className="reveal mt-2 text-base text-text-secondary">
          실제로 이런 형태의 맞춤형 진단서를 받게 됩니다.
        </p>

        <div
          className="reveal rx-blur relative mt-12 max-w-[720px] overflow-hidden rounded-2xl border border-border-accent bg-bg-primary p-10 text-[13px] leading-8 max-md:p-7 max-md:px-5"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {/* Top gradient bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent-warm" />

          {/* Header */}
          <div className="mb-6 flex items-center gap-3 border-b border-dashed border-border pb-4">
            <span className="text-2xl">💊</span>
            <span
              className="text-base font-bold text-accent"
              style={{ fontFamily: "var(--font-body)" }}
            >
              앱 수익 처방전 — 진단 결과
            </span>
          </div>

          {/* Meta */}
          <div className="mb-7 grid grid-cols-2 gap-x-8 gap-y-2 border-b border-dashed border-border pb-5 max-md:grid-cols-1">
            {[
              ["앱:", "실검위젯"],
              ["카테고리:", "유틸리티 / 위젯"],
              ["MAU:", "12,000"],
              ["월 수익:", "40만원 (AdMob)"],
            ].map(([key, val]) => (
              <div key={key} className="flex gap-2">
                <span className="text-text-muted">{key}</span>
                <span className="font-medium text-text-primary">{val}</span>
              </div>
            ))}
          </div>

          {/* Diagnosis badge */}
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 rounded-lg border border-border-accent bg-[var(--accent-glow)] px-4 py-2">
              💊 수익화 단계:{" "}
              <span className="font-bold text-accent">
                Level 2 / 5 — 광고 단일 의존기
              </span>
            </div>
          </div>

          {/* Prescription items */}
          <div className="mb-3 rounded-xl border border-border bg-bg-card p-5 px-6">
            <div
              className="mb-2 text-sm font-bold text-accent"
              style={{ fontFamily: "var(--font-body)" }}
            >
              처방 1 — 프리미엄 번들 실험
            </div>
            <p className="text-xs text-text-secondary">
              &quot;광고 제거 + 실시간 키워드 알림&quot; 번들을 월 2,900원
              구독으로 테스트
            </p>
            <p className="text-xs font-medium text-accent-warm">
              예상 추가 수익: 월 +70~139만원
            </p>
            <div className="mt-2.5 rounded-lg border border-dashed border-[rgba(251,191,36,0.3)] bg-[rgba(251,191,36,0.05)] p-3.5 px-[18px] text-[11px] leading-[1.8] text-text-muted">
              <span className="text-text-secondary">
                MAU 12,000 × 전환율 2~4% = 유료 구독자{" "}
                <strong className="font-semibold text-accent-warm">
                  240~480명
                </strong>
              </span>
              <br />
              <span className="text-text-secondary">
                240~480명 × 월 2,900원 ={" "}
                <strong className="font-semibold text-accent-warm">
                  월 69.6~139.2만원
                </strong>
              </span>
              <br />* 유틸리티 앱 평균 구독 전환율 1.5~5% 기준 보수적 추정
            </div>
          </div>

          <div className="mb-3 rounded-xl border border-border bg-bg-card p-5 px-6">
            <div
              className="mb-2 text-sm font-bold text-accent"
              style={{ fontFamily: "var(--font-body)" }}
            >
              처방 2 — 광고 믹스 최적화
            </div>
            <p className="text-xs text-text-secondary">
              현재 배너+전면 구조에 보상형 광고 추가 → eCPM 1.5배
            </p>
            <p className="text-xs font-medium text-accent-warm">
              월 +15~20만원 (실행 난이도: 낮음, 이번 주 바로 가능)
            </p>
          </div>

          <div className="rounded-xl border border-border bg-bg-card p-5 px-6">
            <div
              className="mb-2 text-sm font-bold text-accent"
              style={{ fontFamily: "var(--font-body)" }}
            >
              처방 3 — 90일 실행 로드맵
            </div>
            <p className="text-xs text-text-secondary">
              Week 1~4: 프리미엄 프리토타입 → Week 5~8: 가격 최적화 → Week
              9~12: 리텐션 루프
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
