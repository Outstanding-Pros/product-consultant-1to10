"use client";

import { useEffect, useCallback } from "react";

interface DiagnosisModalProps {
  isOpen: boolean;
  plan: "single" | "monthly";
  onClose: () => void;
}

export default function DiagnosisModal({
  isOpen,
  plan,
  onClose,
}: DiagnosisModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "감사합니다! 결제 페이지로 이동합니다.\n\n(프리토타입: 실제로는 토스페이먼츠 결제 페이지로 연결됩니다)"
    );
  };

  const isSingle = plan === "single";

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-[20px] border border-border bg-bg-card p-11 px-10 max-md:p-8 max-md:px-6">
        <button
          onClick={onClose}
          className="absolute right-5 top-4 border-none bg-transparent text-2xl text-text-muted transition-colors duration-300 hover:text-text-primary"
        >
          ×
        </button>

        <h2 className="mb-2 text-[22px] font-bold">📱 앱 프로필 입력</h2>
        <p className="mb-7 text-sm text-text-secondary">
          3분이면 충분합니다. 정확할수록 더 좋은 진단서를 받습니다.
        </p>

        <form onSubmit={handleSubmit}>
          {/* App name */}
          <div className="mb-5">
            <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
              앱 이름 <span className="ml-0.5 text-danger">*</span>
            </label>
            <input
              type="text"
              placeholder="예: 실검위젯"
              required
              className="form-input w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
            />
          </div>

          {/* Platform + Category */}
          <div className="mb-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
                플랫폼 <span className="ml-0.5 text-danger">*</span>
              </label>
              <select
                required
                className="form-select w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
              >
                <option value="">선택</option>
                <option>Android</option>
                <option>iOS</option>
                <option>Android + iOS</option>
                <option>웹</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
                카테고리 <span className="ml-0.5 text-danger">*</span>
              </label>
              <select
                required
                className="form-select w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
              >
                <option value="">선택</option>
                <option>유틸리티</option>
                <option>라이프스타일</option>
                <option>생산성</option>
                <option>게임</option>
                <option>교육</option>
                <option>건강/피트니스</option>
                <option>소셜</option>
                <option>기타</option>
              </select>
            </div>
          </div>

          {/* DAU + MAU */}
          <div className="mb-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
                DAU (일 평균) <span className="ml-0.5 text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="예: 2500"
                required
                className="w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
                MAU (월 평균)
              </label>
              <input
                type="text"
                placeholder="예: 12000"
                className="w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
              />
            </div>
          </div>

          {/* Revenue model + Monthly revenue */}
          <div className="mb-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
                현재 수익 모델 <span className="ml-0.5 text-danger">*</span>
              </label>
              <select
                required
                className="form-select w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
              >
                <option value="">선택</option>
                <option>AdMob (배너/전면)</option>
                <option>AdMob + 보상형</option>
                <option>인앱결제</option>
                <option>구독</option>
                <option>광고 + 인앱결제 혼합</option>
                <option>수익 모델 없음</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
                월 수익 <span className="ml-0.5 text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="예: 40만원"
                required
                className="w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
              />
            </div>
          </div>

          {/* Number of apps */}
          <div className="mb-5">
            <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
              운영 중인 앱 개수
            </label>
            <select className="form-select w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent">
              <option value="">선택</option>
              <option>1개</option>
              <option>2~3개</option>
              <option>4~5개</option>
              <option>6개 이상</option>
            </select>
          </div>

          {/* Target revenue */}
          <div className="mb-5">
            <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
              목표 월 수익
            </label>
            <input
              type="text"
              placeholder="예: 150만원"
              className="w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
            />
          </div>

          {/* Main concern */}
          <div className="mb-5">
            <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
              가장 고민되는 것 <span className="ml-0.5 text-danger">*</span>
            </label>
            <textarea
              placeholder="예: 인앱결제를 달고 싶은데 뭘 유료로 만들어야 할지 모르겠어요 / 앱이 3개인데 어디에 집중해야 할지 모르겠어요"
              required
              className="min-h-[80px] w-full resize-y rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="mb-1.5 block text-[13px] font-semibold text-text-secondary">
              이메일 (진단서 수신용){" "}
              <span className="ml-0.5 text-danger">*</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              className="w-full rounded-[10px] border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-300 focus:border-accent"
            />
          </div>

          <div className="mt-2">
            <button
              type="submit"
              className="block w-full rounded-xl border-none bg-accent px-4 py-4 text-center text-base font-bold text-bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(74,222,128,0.3)]"
            >
              {isSingle ? "결제하고 진단받기" : "결제하고 월간 처방 시작"}
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-text-muted">
            {isSingle
              ? "첫 진단 · 4,900원 · 불만족 시 100% 환불"
              : "월간 처방 · 49,000원/월 · 첫 진단 포함 · 언제든 해지"}
          </p>
        </form>
      </div>
    </div>
  );
}
