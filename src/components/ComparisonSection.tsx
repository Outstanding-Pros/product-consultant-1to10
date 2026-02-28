"use client";

import { useReveal } from "@/hooks/useReveal";

const rows = [
  {
    label: "맞춤도",
    lecture: "범용 프레임워크",
    community: "일회성 질답",
    us: "내 앱 데이터 기반 분석",
  },
  {
    label: "연속성",
    lecture: "보고 끝",
    community: "맥락 없음",
    us: "이전 실험 결과를 기억",
  },
  {
    label: "실행력",
    lecture: '"이론은 알겠는데..."',
    community: '"분야마다 달라요"',
    us: '"이번 주에 이걸 하세요"',
  },
  {
    label: "가격",
    lecture: "20~30만원",
    community: "무료",
    us: "4,900원부터",
  },
];

export default function ComparisonSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-25 max-md:py-18">
      <div className="mx-auto max-w-[1080px] px-6">
        <span
          className="reveal mb-4 block text-[11px] uppercase tracking-[3px] text-accent"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          WHY THIS IS DIFFERENT
        </span>
        <h2 className="reveal mb-5 text-[clamp(24px,3.5vw,36px)] font-bold leading-[1.4]">
          이건 강의가 아닙니다.
        </h2>
        <p className="reveal mb-14 max-w-[600px] text-base text-text-secondary">
          당신의 앱 데이터를 분석해서, 다음 90일간{" "}
          <strong className="font-medium text-text-primary">
            정확히 무엇을 해야 하는지
          </strong>{" "}
          알려드립니다.
        </p>
        <div className="reveal">
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>강의 / 유튜브</th>
                <th>커뮤니티</th>
                <th>앱 수익 처방전</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.label}</td>
                  <td className="text-text-muted">{r.lecture}</td>
                  <td className="text-text-muted">{r.community}</td>
                  <td>{r.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
