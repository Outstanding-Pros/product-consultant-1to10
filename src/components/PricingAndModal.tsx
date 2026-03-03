'use client'
import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type Plan = 'basic' | 'pro'

type PricingAndModalProps = {
  locale: Locale
}

export default function PricingAndModal({ locale }: PricingAndModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [plan, setPlan] = useState<Plan>('basic')
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

  const isPro = plan === 'pro'

  return (
    <>
      <section className="section" id="pricing">
        <div className="container">
          <Reveal><span className="section-label">PRICING</span></Reveal>
          <Reveal><h2 className="comparison-heading">{isEn ? 'Choose your dashboard tier' : '대시보드 플랜 선택'}</h2></Reveal>
          <Reveal>
            <p className="comparison-sub">
              {isEn
                ? 'Basic gives core analysis. Pro unlocks every feature including roadmap. Pre-launch offer: monthly subscription 1+1.'
                : 'Basic은 핵심 분석, Pro는 전 기능(로드맵 포함) 제공합니다. 사전 신청 기간에는 월 구독 1+1 혜택이 적용됩니다.'}
            </p>
          </Reveal>
          <div className="pricing-cards">
            <Reveal>
              <div className="pricing-card">
                <div className="pricing-tier">Basic</div>
                <div className="pricing-price">
                  <span className="pricing-amount">{isEn ? '14' : '19,000'}</span>
                  <span className="pricing-unit">{isEn ? 'USD' : '원 / $14'}</span>
                </div>
                <p className="pricing-desc">
                  {isEn
                    ? 'Core dashboard for quick monetization direction.'
                    : '빠르게 수익화 방향을 잡는 핵심 대시보드 플랜'}
                </p>
                <ul className="pricing-features">
                  <li>{isEn ? 'Analytics summary report' : 'Analytics 요약 리포트'}</li>
                  <li>{isEn ? 'Market basic analysis' : 'Market 기본 분석'}</li>
                  <li>{isEn ? 'Benchmark core comparison' : 'Benchmark 핵심 비교 지표'}</li>
                  <li>{isEn ? 'Business Model top recommendations' : 'Business Model 상위 추천안'}</li>
                  <li>{isEn ? '1-month Sprint plan (template)' : 'Sprint 1개월 실행안 (기본 템플릿)'}</li>
                </ul>
                <button className="btn-secondary" onClick={() => openModal('basic')}>
                  {isEn ? 'Start Basic - $14' : 'Basic 시작 — 19,000원'}
                </button>
              </div>
            </Reveal>

            <Reveal>
              <div className="pricing-card featured">
                <div className="pricing-tier">Pro</div>
                <div className="pricing-price">
                  <span className="pricing-amount">{isEn ? '44' : '59,000'}</span>
                  <span className="pricing-unit">{isEn ? 'USD / month' : '원 / $44 / 월'}</span>
                </div>
                <p className="pricing-desc">
                  {isEn
                    ? 'Full dashboard with advanced scenario planning and roadmap.'
                    : '심화 시나리오 분석과 로드맵까지 포함한 전 기능 플랜'}
                </p>
                <ul className="pricing-features">
                  <li>{isEn ? 'Everything in Basic' : 'Basic의 모든 기능 포함'}</li>
                  <li>{isEn ? 'Deep Benchmark with category evidence' : '카테고리 근거 기반 Benchmark 심화 분석'}</li>
                  <li>{isEn ? 'Business Model multi-scenario simulation' : 'Business Model 다중 시나리오 시뮬레이션'}</li>
                  <li>{isEn ? 'Advanced Sprint (priority, experiment order, risk)' : 'Sprint 고도화 (우선순위/실험순서/리스크)'}</li>
                  <li>{isEn ? '1-year Roadmap with North Star metric' : '북극성 지표 기반 1년 Roadmap'}</li>
                  <li>{isEn ? 'Pre-launch monthly 1+1 offer' : '사전신청 월 구독 1+1 혜택'}</li>
                </ul>
                <button className="btn-primary-full" onClick={() => openModal('pro')}>
                  {isEn ? 'Start Pro - $44/mo' : 'Pro 시작 — 59,000원/월'}
                </button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="pricing-note">
              {isEn
                ? '* Pro is recommended if you want full workflow: analysis -> model -> sprint -> roadmap.'
                : '* 분석 -> 모델 -> 스프린트 -> 로드맵까지 한 번에 운영하려면 Pro를 추천합니다.'}
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
          <h2>{isEn ? '📊 Dashboard Setup Form' : '📊 대시보드 세팅 폼'}</h2>
          <p className="modal-sub">{isEn ? 'Takes about 3 minutes. Better inputs make better dashboard output.' : '약 3분 소요됩니다. 정확한 입력일수록 더 좋은 대시보드 결과를 제공합니다.'}</p>
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
                <input type="text" className="form-input" placeholder={isEn ? 'e.g. USD 300' : '예: 40만원'} required />
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
              <input type="text" className="form-input" placeholder={isEn ? 'e.g. USD 1,000' : '예: 150만원'} />
            </div>
            <div className="form-group">
              <label className="form-label">{isEn ? 'Biggest challenge right now' : '가장 고민되는 것'} <span className="required">*</span></label>
              <textarea
                className="form-textarea"
                placeholder={
                  isEn
                    ? 'e.g. Need a clear paid feature strategy / not sure which app to prioritize in my portfolio'
                    : '예: 어떤 기능을 유료화할지 모르겠어요 / 앱 포트폴리오에서 어떤 앱에 집중해야 할지 모르겠어요'
                }
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">{isEn ? 'Email (for dashboard access)' : '이메일 (대시보드 안내 수신용)'} <span className="required">*</span></label>
              <input type="email" className="form-input" placeholder="example@gmail.com" required />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn-primary-full" disabled={isSubmitting}>
                {isSubmitting
                  ? isEn
                    ? 'Processing...'
                    : '처리 중...'
                  : isPro
                    ? isEn
                      ? 'Pay and start Pro dashboard'
                      : '결제하고 Pro 대시보드 시작'
                    : isEn
                      ? 'Pay and start Basic dashboard'
                      : '결제하고 Basic 대시보드 시작'}
              </button>
            </div>
            <p className="form-price-note">
              {isPro
                ? isEn
                  ? 'Pro · $44 / month · All features unlocked · Pre-launch 1+1'
                  : 'Pro · 59,000원 ($44) / 월 · 전 기능 제공 · 사전신청 1+1'
                : isEn
                  ? 'Basic · $14 · Core dashboard modules'
                  : 'Basic · 19,000원 ($14) · 핵심 대시보드 모듈'}
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
