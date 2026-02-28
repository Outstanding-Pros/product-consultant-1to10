"use client";

import { useReveal } from "@/hooks/useReveal";

export default function FinalCta() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative px-6 py-30 text-center">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1080px]">
        <h2 className="reveal mb-5 text-[clamp(24px,4vw,40px)] font-black">
          &quot;뭘 해야 하는지&quot;를
          <br />더 이상 혼자 고민하지 마세요.
        </h2>
        <p className="reveal mb-10 text-base text-text-secondary">
          커피 한 잔 값으로, 당신의 앱에 맞는 수익화 방향을 찾아보세요.
        </p>
        <a
          href="#pricing"
          className="reveal relative inline-flex items-center gap-2.5 rounded-xl bg-accent px-12 py-5 text-lg font-bold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(74,222,128,0.3)]"
        >
          내 앱 진단받기
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
