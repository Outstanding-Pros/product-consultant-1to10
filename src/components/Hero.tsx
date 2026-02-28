export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-15">
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -top-[200px] -right-[200px] h-[600px] w-[600px] animate-[float_8s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-1 mx-auto max-w-[1080px] px-6">
        <span
          className="mb-8 flex items-center gap-3 text-[13px] tracking-[2px] text-accent opacity-0 animate-[fadeUp_0.6s_ease_forwards_0.2s]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="block h-px w-8 bg-accent" />
          FOR INDIE APP MAKERS
        </span>

        <h1 className="mb-7 text-[clamp(32px,5.5vw,56px)] font-black leading-[1.3] tracking-tight opacity-0 animate-[fadeUp_0.6s_ease_forwards_0.4s]">
          유저는 오는데,
          <br />
          수익이 안 따라오시죠?
          <span className="mt-1 block bg-gradient-to-br from-accent to-[#86efac] bg-clip-text text-transparent">
            맞춤형 수익화 처방전
          </span>
        </h1>

        <p className="mb-12 max-w-[580px] text-lg font-light text-text-secondary opacity-0 animate-[fadeUp_0.6s_ease_forwards_0.6s]">
          강의 듣고, 커뮤니티 물어봐도 안 풀리던 이유 —
          <br />
          &quot;일반론&quot;이 아니라{" "}
          <strong className="font-medium text-text-primary">
            당신의 앱 데이터에 기반한 전략
          </strong>
          이 없었기 때문입니다.
        </p>

        <div className="flex flex-wrap items-center gap-5 opacity-0 animate-[fadeUp_0.6s_ease_forwards_0.8s]">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-9 py-[18px] text-base font-bold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(74,222,128,0.3)]"
          >
            내 앱 진단받기
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <span className="text-[13px] text-text-muted">
            4,900원 · 24시간 이내 전달 · 환불 보장
          </span>
        </div>

        <div className="mt-16 flex flex-wrap gap-10 border-t border-border pt-8 opacity-0 animate-[fadeUp_0.6s_ease_forwards_1s] max-md:gap-6">
          <div className="flex flex-col">
            <span
              className="text-[28px] font-bold text-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              4,900원
            </span>
            <span className="mt-0.5 text-[13px] text-text-muted">
              첫 진단 비용
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-[28px] font-bold text-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              24h
            </span>
            <span className="mt-0.5 text-[13px] text-text-muted">
              진단서 전달
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-[28px] font-bold text-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              100%
            </span>
            <span className="mt-0.5 text-[13px] text-text-muted">
              불만족 시 환불
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
