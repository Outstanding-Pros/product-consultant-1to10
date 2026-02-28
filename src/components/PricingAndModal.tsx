'use client'
import { useState, useEffect } from 'react'
import Reveal from './Reveal'

type Plan = 'single' | 'monthly'

export default function PricingAndModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [plan, setPlan] = useState<Plan>('single')
  const [isSubmitting, setIsSubmitting] = useState(false)

  function openModal(p: Plan) {
    setPlan(p)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      alert('감사합니다! 결제 페이지로 이동합니다.\n\n(실제로는 토스페이먼츠 결제 페이지로 연결됩니다)')
      setIsSubmitting(false)
    }, 1000)
  }

  const isMonthly = plan === 'monthly'

  return (
    <>
      <section className="section" id="pricing">
        <div className="container">
          <Reveal><span className="section-label">PRICING</span></Reveal>
          <Reveal><h2 className="comparison-heading">시작하기</h2></Reveal>
          <Reveal>
            <p className="comparison-sub">첫 진단을 먼저 받고, 만족하시면 월간 구독을 시작하세요.</p>
          </Reveal>
          <div className="pricing-cards">
            <Reveal>
              <div className="pricing-card">
                <div className="pricing-tier">첫 진단</div>
                <div className="pricing-price">
                  <span className="pricing-amount">4,900</span>
                  <span className="pricing-unit">원 / 1회</span>
                </div>
                <p className="pricing-desc">내 앱의 현재 상태를 진단하고, 다음 30일 실행 플랜을 받으세요.</p>
                <ul className="pricing-features">
                  <li>앱 프로필 기반 수익화 단계 진단 (5단계)</li>
                  <li>최적 수익 모델 추천 + 예상 수익 시뮬레이션</li>
                  <li>계산 근거가 포함된 구체적 숫자</li>
                  <li>다음 30일 실행 플랜</li>
                  <li>24시간 이내 이메일 전달</li>
                  <li>불만족 시 100% 환불</li>
                </ul>
                <button className="btn-secondary" onClick={() => openModal('single')}>
                  진단받기 — 4,900원
                </button>
              </div>
            </Reveal>
            <Reveal>
              <div className="pricing-card featured">
                <div className="pricing-tier">월간 처방</div>
                <div className="pricing-price">
                  <span className="pricing-amount">49,000</span>
                  <span className="pricing-unit">원 / 월</span>
                </div>
                <p className="pricing-desc">맥락이 끊기지 않는 전략 파트너. 실행 → 피드백 → 다음 스텝.</p>
                <ul className="pricing-features">
                  <li>첫 진단 포함 (단독 구매보다 즉시 절약)</li>
                  <li>매주 실행 결과 기반 다음 스텝 코칭</li>
                  <li>이전 실험 결과를 기억하는 연속 전략</li>
                  <li>&quot;이번 주에 정확히 뭘 하라&quot;는 액션 아이템</li>
                  <li>앱 여러 개 운영 시 포트폴리오 전략 포함</li>
                  <li>카카오톡 / 이메일로 수시 질문 가능</li>
                  <li>언제든 해지 가능</li>
                </ul>
                <button className="btn-primary-full" onClick={() => openModal('monthly')}>
                  월간 처방 시작 — 49,000원/월
                </button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="pricing-note">* 첫 진단 후 만족하시면 월간으로 전환하시는 걸 추천드립니다.</p>
          </Reveal>
        </div>
      </section>

      {/* Modal */}
      <div
        className={`modal-overlay${isOpen ? ' active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
      >
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>×</button>
          <h2>📱 앱 프로필 입력</h2>
          <p className="modal-sub">3분이면 충분합니다. 정확할수록 더 좋은 진단서를 받습니다.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">앱 이름 <span className="required">*</span></label>
              <input type="text" className="form-input" placeholder="예: 실검위젯" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">플랫폼 <span className="required">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>선택</option>
                  <option>Android</option>
                  <option>iOS</option>
                  <option>Android + iOS</option>
                  <option>웹</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">카테고리 <span className="required">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>선택</option>
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
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">DAU (일 평균) <span className="required">*</span></label>
                <input type="text" className="form-input" placeholder="예: 2500" required />
              </div>
              <div className="form-group">
                <label className="form-label">MAU (월 평균)</label>
                <input type="text" className="form-input" placeholder="예: 12000" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">현재 수익 모델 <span className="required">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>선택</option>
                  <option>AdMob (배너/전면)</option>
                  <option>AdMob + 보상형</option>
                  <option>인앱결제</option>
                  <option>구독</option>
                  <option>광고 + 인앱결제 혼합</option>
                  <option>수익 모델 없음</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">월 수익 <span className="required">*</span></label>
                <input type="text" className="form-input" placeholder="예: 40만원" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">운영 중인 앱 개수</label>
              <select className="form-select" defaultValue="">
                <option value="" disabled>선택</option>
                <option>1개</option>
                <option>2~3개</option>
                <option>4~5개</option>
                <option>6개 이상</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">목표 월 수익</label>
              <input type="text" className="form-input" placeholder="예: 150만원" />
            </div>
            <div className="form-group">
              <label className="form-label">가장 고민되는 것 <span className="required">*</span></label>
              <textarea
                className="form-textarea"
                placeholder="예: 인앱결제를 달고 싶은데 뭘 유료로 만들어야 할지 모르겠어요 / 앱이 3개인데 어디에 집중해야 할지 모르겠어요"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">이메일 (진단서 수신용) <span className="required">*</span></label>
              <input type="email" className="form-input" placeholder="example@gmail.com" required />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn-primary-full" disabled={isSubmitting}>
                {isSubmitting ? '처리 중...' : isMonthly ? '결제하고 월간 처방 시작' : '결제하고 진단받기'}
              </button>
            </div>
            <p className="form-price-note">
              {isMonthly
                ? '월간 처방 · 49,000원/월 · 첫 진단 포함 · 언제든 해지'
                : '첫 진단 · 4,900원 · 불만족 시 100% 환불'}
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
