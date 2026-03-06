'use client'
import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { type Locale } from '@/i18n/locale'

type Plan = 'basic' | 'pro'
type BillingCountry = 'KR' | 'INTL'

type PricingAndModalProps = {
  locale: Locale
}

type CheckoutResponse = {
  checkoutUrl: string
  provider: 'payapp' | 'polar'
}

export default function PricingAndModal({ locale }: PricingAndModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [plan, setPlan] = useState<Plan>('basic')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [billingCountry, setBillingCountry] = useState<BillingCountry>(locale === 'ko' ? 'KR' : 'INTL')
  const [payerEmail, setPayerEmail] = useState('')
  const [payerPhone, setPayerPhone] = useState('')
  const isEn = locale === 'en'

  function openModal(p: Plan) {
    setPlan(p)
    setBillingCountry(locale === 'ko' ? 'KR' : 'INTL')
    setPayerPhone('')
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
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  async function handleCheckoutSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locale,
          plan,
          billingCountry,
          payerEmail,
          payerPhone,
        }),
      })

      if (!response.ok) {
        const message = isEn ? 'Failed to create checkout session.' : '결제 세션 생성에 실패했습니다.'
        throw new Error(message)
      }

      const data = (await response.json()) as CheckoutResponse
      window.location.href = data.checkoutUrl
    } catch {
      alert(isEn ? 'Payment connection failed. Please try again.' : '결제 연결에 실패했습니다. 다시 시도해주세요.')
      setIsSubmitting(false)
    }
  }

  const isPro = plan === 'pro'

  return (
    <>
      <section className="section" id="pricing">
        <div className="container">
          <Reveal><span className="section-label">PRICING</span></Reveal>
          <Reveal>
            <h2 className="comparison-heading">
              {isEn
                ? <>Prepay now,<br />and get your plan <span className="highlight">50%</span> cheaper</>
                : <>지금 사전 결제하면,<br /> 원하는 플랜이 <span className="highlight">50%</span> 저렴해요</>}
            </h2>
          </Reveal>

          <Reveal>
            <p className="comparison-sub">
              {isEn
                ? <>Choose based on your target revenue scale.<br />Basic covers the essentials for sprint execution, while Pro adds deeper competitor and macro-trend analysis for concrete strategy.</>
                : <>목표 수익 규모에 따라 나누어 선택할 수 있어요. <br />Basic은 스프린트 실행에 필요한 핵심만, Pro는 업계 경쟁 서비스 분석부터 거시적 트렌드까지 분석하여 구체적인 전략을 제공해요.</>}
            </p>
          </Reveal>
          <div className="pricing-cards">
            <Reveal>
              <div className="pricing-card">
                <div className="pricing-tier">Basic</div>
                <div className="pricing-price">
                  <span className="pricing-amount">{isEn ? '14' : '19,000'}</span>
                  <span className="pricing-unit">{isEn ? 'USD / month' : '원 / 월'}</span>
                </div>
                <p className="pricing-desc">
                  {isEn
                    ? 'Core analysis automation plan for improving revenue quickly.'
                    : '빠르게 수익을 개선하는 핵심 분석 자동화 플랜'}
                </p>
                <ul className="pricing-features">
                  <li>{isEn ? 'Analytics summary report' : 'Analytics 요약 리포트'}</li>
                  <li>{isEn ? 'Market basic analysis' : 'Market 기본 분석'}</li>
                  <li>{isEn ? 'Benchmark core comparison' : 'Benchmark 핵심 비교 지표'}</li>
                  <li>{isEn ? 'Business Model top recommendations' : 'Business Model 상위 추천안'}</li>
                  <li>{isEn ? '1-month Sprint plan (template)' : 'Sprint 1개월 실행안 (기본 템플릿)'}</li>
                </ul>
                <button className="btn-secondary" onClick={() => openModal('basic')}>
                  {isEn ? (
                    <>
                      <span className="price-strike">$14/mo</span> <span className="price-sale">$7/mo</span>
                    </>
                  ) : (
                    <>
                      <span className="price-strike">19,000원/월</span> <span className="price-sale">9,500원/월</span>
                    </>
                  )}
                </button>
              </div>
            </Reveal>

            <Reveal>
              <div className="pricing-card featured">
                <div className="pricing-tier">Pro</div>
                <div className="pricing-price">
                  <span className="pricing-amount">{isEn ? '40' : '59,000'}</span>
                  <span className="pricing-unit">{isEn ? 'USD / month' : '원 / 월'}</span>
                </div>
                <p className="pricing-desc">
                  {isEn
                    ? 'Business plan with in-depth market and macro-economic analysis.'
                    : '심층 시장/경제 분석을 담은 비즈니스 플랜'}
                </p>
                <ul className="pricing-features">
                  <li>{isEn ? 'Everything in Basic' : 'Basic의 모든 기능 포함'}</li>
                  <li>{isEn ? 'Up to 3 services' : '최대 3개 서비스 제공'}</li>
                  <li>{isEn ? 'Deep Benchmark with category evidence' : '카테고리 근거 기반 Benchmark 심화 분석'}</li>
                  <li>{isEn ? 'Business Model multi-scenario simulation' : 'Business Model 다중 시나리오 시뮬레이션'}</li>
                  <li>{isEn ? 'Advanced Sprint (priority, experiment order, risk)' : 'Sprint 고도화 (우선순위/실험순서/리스크)'}</li>
                  <li>{isEn ? '1-year Roadmap with North Star metric' : '북극성 지표 기반 1년 Roadmap'}</li>
                </ul>
                <button className="btn-primary-full" onClick={() => openModal('pro')}>
                  {isEn ? (
                    <>
                      <span className="price-strike">$40/mo</span> <span className="price-sale">$20/mo</span>
                    </>
                  ) : (
                    <>
                      <span className="price-strike">59,000원/월</span> <span className="price-sale">29,500원/월</span>
                    </>
                  )}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div
        className={`modal-overlay${isOpen ? ' active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>×</button>
          <h2>{isEn ? 'Payment First' : '결제를 먼저 진행하세요'}</h2>
          <p className="modal-sub">
            {isEn
              ? 'Step 1) Complete payment. Step 2) Fill intake form on the success page.'
              : '1) 결제 완료 후 2) 성공 페이지에서 양식 폼을 작성합니다.'}
          </p>
          <form onSubmit={handleCheckoutSubmit}>
            <div className="form-group">
              <label className="form-label">{isEn ? 'Billing region' : '결제 지역'} <span className="required">*</span></label>
              <select
                className="form-select"
                value={billingCountry}
                onChange={(e) => setBillingCountry(e.target.value as BillingCountry)}
                required
              >
                <option value="KR">{isEn ? 'Korea (PayApp)' : '국내 (PayApp)'}</option>
                <option value="INTL">{isEn ? 'International / US (Polar.sh)' : '해외 / 미국 (Polar.sh)'}</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">{isEn ? 'Email for receipt' : '영수증 수신 이메일'} <span className="required">*</span></label>
              <input
                type="email"
                className="form-input"
                placeholder="example@gmail.com"
                value={payerEmail}
                onChange={(e) => setPayerEmail(e.target.value)}
                required
              />
            </div>

            {billingCountry === 'KR' ? (
              <div className="form-group">
                <label className="form-label">{isEn ? 'Phone number for PayApp' : '페이앱 결제용 휴대폰 번호'} <span className="required">*</span></label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder={isEn ? 'e.g. 01012345678' : '예: 01012345678'}
                  value={payerPhone}
                  onChange={(e) => setPayerPhone(e.target.value)}
                  required
                />
              </div>
            ) : null}

            <div className="form-submit">
              <button type="submit" className="btn-primary-full" disabled={isSubmitting}>
                {isSubmitting
                  ? isEn
                    ? 'Redirecting...'
                    : '이동 중...'
                  : isPro
                    ? isEn
                      ? 'Pay Pro and Continue'
                      : 'Pro 결제하고 계속하기'
                    : isEn
                      ? 'Pay Basic and Continue'
                      : 'Basic 결제하고 계속하기'}
              </button>
            </div>
            <p className="form-price-note">
              {isPro
                ? isEn
                  ? 'Pro · $40 / month · prepay sale 50%'
                  : 'Pro · 59,000원 / 월 · 사전결제 50% 할인'
                : isEn
                  ? 'Basic · $14 / month · prepay sale 50%'
                  : 'Basic · 19,000원 / 월 · 사전결제 50% 할인'}
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
