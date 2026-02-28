"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  {
    q: "ChatGPT에 물어보면 되는 거 아닌가요?",
    a: "ChatGPT는 매번 처음부터 설명해야 하고, 앱 수익화에 특화된 분석 프레임워크가 없습니다. 처방전은 카테고리별 벤치마크 데이터와 수익화 전문 프레임워크를 적용해 맞춤 전략을 제공합니다. 그리고 월간 구독 시, 다음 달에 물어볼 때 지난달 실험 결과를 기억하고 이어서 코칭합니다.",
  },
  {
    q: "진단서의 수익 예측은 어떤 근거로 나오나요?",
    a: '모든 수익 시뮬레이션에는 계산 근거가 포함됩니다. "MAU × 전환율 × 구독 가격 = 예상 수익" 형태로, 어떤 전환율을 가정했는지, 왜 그 수치가 현실적인지, 카테고리별 벤치마크 대비 어느 위치인지를 투명하게 보여드립니다. 근거 없는 장밋빛 전망은 하지 않습니다.',
  },
  {
    q: "앱이 여러 개인데, 전부 진단해주나요?",
    a: "첫 진단(4,900원)은 앱 1개 기준입니다. 앱 여러 개를 운영 중이시라면 월간 처방(49,000원/월)에서 포트폴리오 전체 전략을 다룹니다 — 어떤 앱에 집중하고, 어떤 앱을 접거나 유지할지 데이터 기반으로 판단해드립니다.",
  },
  {
    q: "어떤 앱이든 가능한가요?",
    a: "플레이스토어/앱스토어에 출시된 앱 중, DAU 500 이상인 앱을 대상으로 합니다. 유틸리티, 정보성, 게임, 라이프스타일 등 카테고리는 무관합니다. DAU 500 미만이시라면 아래 '수익화 체크리스트'를 먼저 받아보세요.",
  },
  {
    q: "환불 가능한가요?",
    a: "첫 진단(4,900원)은 수령 후 만족하지 않으시면 이유 불문 100% 환불해드립니다. 월간 구독(49,000원)은 결제일로부터 7일 이내 환불 가능하며, 언제든 다음 달 해지할 수 있습니다.",
  },
];

export default function FaqSection() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

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
          FAQ
        </span>
        <h2 className="reveal text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.4]">
          자주 묻는 질문
        </h2>

        <div className="mt-12 max-w-[720px]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item border-b border-border ${openIndex === i ? "open" : ""}`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 border-none bg-transparent px-0 py-6 text-left text-base font-semibold text-text-primary transition-colors duration-300 hover:text-accent"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {faq.q}
                <span className="faq-icon shrink-0 text-xl text-text-muted transition-transform duration-300">
                  +
                </span>
              </button>
              <div className="faq-answer">
                <p className="text-sm leading-[1.9] text-text-secondary">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Early stage email capture */}
        <div className="reveal mx-auto mt-14 max-w-[640px] rounded-2xl border border-border bg-bg-card p-11 px-10 text-center max-md:p-8 max-md:px-6">
          <h3 className="mb-2 text-lg font-bold">
            🌱 아직 DAU 500 미만이신가요?
          </h3>
          <p className="mb-6 text-sm leading-[1.7] text-text-secondary">
            괜찮습니다. 먼저{" "}
            <strong className="font-medium text-text-primary">
              &quot;인디 앱 수익화 체크리스트 (무료)&quot;
            </strong>
            를 받아보세요.
            <br />
            출시 이후 수익화까지 놓치기 쉬운 7가지 포인트를 정리했습니다.
          </p>
          <div className="mx-auto flex max-w-[420px] gap-2.5 max-md:flex-col">
            <input
              type="email"
              placeholder="이메일 주소"
              className="flex-1 rounded-[10px] border border-border bg-bg-primary px-4 py-3.5 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <button className="whitespace-nowrap rounded-[10px] border-none bg-accent px-6 py-3.5 text-sm font-bold text-bg-primary transition-all duration-300 hover:shadow-[0_4px_16px_rgba(74,222,128,0.3)]">
              무료로 받기
            </button>
          </div>
          <p className="mt-3 text-[11px] text-text-muted">
            스팸 없음 · 언제든 구독 해지 가능
          </p>
        </div>
      </div>
    </section>
  );
}
