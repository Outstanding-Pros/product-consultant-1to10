'use client'
import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type Plan = 'single' | 'monthly'

type PricingAndModalProps = {
  locale: Locale
}

export default function PricingAndModal({ locale }: PricingAndModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [plan, setPlan] = useState<Plan>('single')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isEn = locale === 'en'

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
      alert(
        isEn
          ? 'Thank you! Redirecting to payment page.\n\n(You will be redirected to Polar.sh checkout.)'
          : '감사합니다! 결제 페이지로 이동합니다.\n\n(Polar.sh 결제 페이지로 연결됩니다)'
      )
      setIsSubmitting(false)
    }, 1000)
  }

  const isMonthly = plan === 'monthly'

  return (
    <>
      <section className="section" id="pricing">
        <div className="container">
          <Reveal><span className="section-label">PRICING</span></Reveal>
          <Reveal><h2 className="comparison-heading">{isEn ? 'Get started' : '시작하기'}</h2></Reveal>
          <Reveal>
            <p className="comparison-sub">
              {isEn ? 'Start with your first diagnosis. If satisfied, continue with the monthly plan.' : '첫 진단을 먼저 받고, 만족하시면 월간 구독을 시작하세요.'}
            </p>
          </Reveal>
          <div className="pricing-cards">
            <Reveal>
              <div className="pricing-card">
                <div className="pricing-tier">{isEn ? 'First Diagnosis' : '첫 진단'}</div>
                <div className="pricing-price">
                  <span className="pricing-amount">4,900</span>
                  <span className="pricing-unit">{isEn ? 'KRW / one-time' : '원 / 1회'}</span>
                </div>
                <p className="pricing-desc">
                  {isEn ? 'Diagnose your app status and get a 30-day action plan.' : '내 앱의 현재 상태를 진단하고, 다음 30일 실행 플랜을 받으세요.'}
                </p>
                <ul className="pricing-features">
                  <li>{isEn ? 'App profile based monetization stage diagnosis (5 levels)' : '앱 프로필 기반 수익화 단계 진단 (5단계)'}</li>
                  <li>{isEn ? 'Best-fit model recommendation + revenue simulation' : '최적 수익 모델 추천 + 예상 수익 시뮬레이션'}</li>
                  <li>{isEn ? 'Concrete numbers with calculation rationale' : '계산 근거가 포함된 구체적 숫자'}</li>
                  <li>{isEn ? 'Next 30-day execution plan' : '다음 30일 실행 플랜'}</li>
                  <li>{isEn ? 'Delivered by email within 24h' : '24시간 이내 이메일 전달'}</li>
                  <li>{isEn ? '100% refund if unsatisfied' : '불만족 시 100% 환불'}</li>
                </ul>
                <button className="btn-secondary" onClick={() => openModal('single')}>
                  {isEn ? 'Get diagnosis - KRW 4,900' : '진단받기 — 4,900원'}
                </button>
              </div>
            </Reveal>
            <Reveal>
              <div className="pricing-card featured">
                <div className="pricing-tier">{isEn ? 'Monthly Prescription' : '월간 처방'}</div>
                <div className="pricing-price">
                  <span className="pricing-amount">49,000</span>
                  <span className="pricing-unit">{isEn ? 'KRW / month' : '원 / 월'}</span>
                </div>
                <p className="pricing-desc">
                  {isEn ? 'A strategy partner with continuity: execute -> feedback -> next step.' : '맥락이 끊기지 않는 전략 파트너. 실행 → 피드백 → 다음 스텝.'}
                </p>
                <ul className="pricing-features">
                  <li>{isEn ? 'Includes first diagnosis (save vs separate purchase)' : '첫 진단 포함 (단독 구매보다 즉시 절약)'}</li>
                  <li>{isEn ? 'Weekly coaching based on your execution results' : '매주 실행 결과 기반 다음 스텝 코칭'}</li>
                  <li>{isEn ? 'Continuous strategy that remembers prior experiments' : '이전 실험 결과를 기억하는 연속 전략'}</li>
                  <li>{isEn ? 'Clear weekly action items: exactly what to do' : '"이번 주에 정확히 뭘 하라"는 액션 아이템'}</li>
                  <li>{isEn ? 'Portfolio strategy when running multiple apps' : '앱 여러 개 운영 시 포트폴리오 전략 포함'}</li>
                  <li>{isEn ? 'Ask anytime via KakaoTalk / email' : '카카오톡 / 이메일로 수시 질문 가능'}</li>
                  <li>{isEn ? 'Cancel anytime' : '언제든 해지 가능'}</li>
                </ul>
                <button className="btn-primary-full" onClick={() => openModal('monthly')}>
                  {isEn ? 'Start monthly - KRW 49,000/mo' : '월간 처방 시작 — 49,000원/월'}
                </button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="pricing-note">
              {isEn ? '* Recommended: start with the first diagnosis, then upgrade to monthly.' : '* 첫 진단 후 만족하시면 월간으로 전환하시는 걸 추천드립니다.'}
            </p>
          </Reveal>
        </div>
      </section>

      <div
        className={`modal-overlay${isOpen ? ' active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
      >
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>×</button>
          <h2>{isEn ? '📱 App Profile Form' : '📱 앱 프로필 입력'}</h2>
          <p className="modal-sub">{isEn ? 'Takes 3 minutes. The more accurate your inputs, the better your report.' : '3분이면 충분합니다. 정확할수록 더 좋은 진단서를 받습니다.'}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">{isEn ? 'App name' : '앱 이름'} <span className="required">*</span></label>
              <input type="text" className="form-input" placeholder={isEn ? 'e.g. Realtime Widget' : '예: 실검위젯'} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{isEn ? 'Platform' : '플랫폼'} <span className="required">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>{isEn ? 'Select' : '선택'}</option>
                  <option>Android</option>
                  <option>iOS</option>
                  <option>Android + iOS</option>
                  <option>{isEn ? 'Web' : '웹'}</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">{isEn ? 'Category' : '카테고리'} <span className="required">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>{isEn ? 'Select' : '선택'}</option>
                  <option>{isEn ? 'Utility' : '유틸리티'}</option>
                  <option>{isEn ? 'Lifestyle' : '라이프스타일'}</option>
                  <option>{isEn ? 'Productivity' : '생산성'}</option>
                  <option>{isEn ? 'Game' : '게임'}</option>
                  <option>{isEn ? 'Education' : '교육'}</option>
                  <option>{isEn ? 'Health / Fitness' : '건강/피트니스'}</option>
                  <option>{isEn ? 'Social' : '소셜'}</option>
                  <option>{isEn ? 'Others' : '기타'}</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">DAU ({isEn ? 'daily avg' : '일 평균'}) <span className="required">*</span></label>
                <input type="text" className="form-input" placeholder={isEn ? 'e.g. 2500' : '예: 2500'} required />
              </div>
              <div className="form-group">
                <label className="form-label">MAU ({isEn ? 'monthly avg' : '월 평균'})</label>
                <input type="text" className="form-input" placeholder={isEn ? 'e.g. 12000' : '예: 12000'} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{isEn ? 'Current monetization model' : '현재 수익 모델'} <span className="required">*</span></label>
                <select className="form-select" required defaultValue="">
                  <option value="" disabled>{isEn ? 'Select' : '선택'}</option>
                  <option>{isEn ? 'AdMob (Banner/Interstitial)' : 'AdMob (배너/전면)'}</option>
                  <option>{isEn ? 'AdMob + Rewarded Ads' : 'AdMob + 보상형'}</option>
                  <option>{isEn ? 'In-app purchase' : '인앱결제'}</option>
                  <option>{isEn ? 'Subscription' : '구독'}</option>
                  <option>{isEn ? 'Ads + In-app purchase mix' : '광고 + 인앱결제 혼합'}</option>
                  <option>{isEn ? 'No monetization model yet' : '수익 모델 없음'}</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">{isEn ? 'Monthly revenue' : '월 수익'} <span className="required">*</span></label>
                <input type="text" className="form-input" placeholder={isEn ? 'e.g. KRW 400,000' : '예: 40만원'} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">{isEn ? 'Number of apps you operate' : '운영 중인 앱 개수'}</label>
              <select className="form-select" defaultValue="">
                <option value="" disabled>{isEn ? 'Select' : '선택'}</option>
                <option>{isEn ? '1 app' : '1개'}</option>
                <option>{isEn ? '2-3 apps' : '2~3개'}</option>
                <option>{isEn ? '4-5 apps' : '4~5개'}</option>
                <option>{isEn ? '6+ apps' : '6개 이상'}</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">{isEn ? 'Target monthly revenue' : '목표 월 수익'}</label>
              <input type="text" className="form-input" placeholder={isEn ? 'e.g. KRW 1,500,000' : '예: 150만원'} />
            </div>
            <div className="form-group">
              <label className="form-label">{isEn ? 'Biggest challenge right now' : '가장 고민되는 것'} <span className="required">*</span></label>
              <textarea
                className="form-textarea"
                placeholder={
                  isEn
                    ? 'e.g. I want to add IAP but do not know what feature should be paid / I run 3 apps and do not know which one to focus on'
                    : '예: 인앱결제를 달고 싶은데 뭘 유료로 만들어야 할지 모르겠어요 / 앱이 3개인데 어디에 집중해야 할지 모르겠어요'
                }
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">{isEn ? 'Email (for report delivery)' : '이메일 (진단서 수신용)'} <span className="required">*</span></label>
              <input type="email" className="form-input" placeholder="example@gmail.com" required />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn-primary-full" disabled={isSubmitting}>
                {isSubmitting
                  ? isEn
                    ? 'Processing...'
                    : '처리 중...'
                  : isMonthly
                    ? isEn
                      ? 'Pay and start monthly plan'
                      : '결제하고 월간 처방 시작'
                    : isEn
                      ? 'Pay and get diagnosis'
                      : '결제하고 진단받기'}
              </button>
            </div>
            <p className="form-price-note">
              {isMonthly
                ? isEn
                  ? 'Monthly plan · KRW 49,000/mo · Includes first diagnosis · Cancel anytime'
                  : '월간 처방 · 49,000원/월 · 첫 진단 포함 · 언제든 해지'
                : isEn
                  ? 'First diagnosis · KRW 4,900 · 100% refund if unsatisfied'
                  : '첫 진단 · 4,900원 · 불만족 시 100% 환불'}
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
