'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { type Locale } from '@/i18n/locale'

type Plan = 'basic' | 'pro'
type Provider = 'payapp' | 'polar' | 'unknown'

type PostPaymentIntakeFormProps = {
  locale: Locale
  plan: Plan
  provider: Provider
  orderId: string
}

export default function PostPaymentIntakeForm({ locale, plan, provider, orderId }: PostPaymentIntakeFormProps) {
  const router = useRouter()
  const isEn = locale === 'en'
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)

    const payload = {
      locale,
      plan,
      provider,
      orderId,
      serviceName: String(formData.get('serviceName') ?? ''),
      platform: String(formData.get('platform') ?? ''),
      category: String(formData.get('category') ?? ''),
      dau: String(formData.get('dau') ?? ''),
      monthlyRevenue: String(formData.get('monthlyRevenue') ?? ''),
      challenge: String(formData.get('challenge') ?? ''),
      email: String(formData.get('email') ?? ''),
    }

    const response = await fetch('/api/intake', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    setIsSubmitting(false)

    if (!response.ok) {
      alert(isEn ? 'Submission failed. Please try again.' : '제출에 실패했습니다. 다시 시도해주세요.')
      return
    }

    router.push(locale === 'en' ? '/intake/success?lang=en' : '/intake/success?lang=ko')
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="comparison-heading">{isEn ? 'Payment complete. Now fill your setup form.' : '결제가 완료되었습니다. 이제 세팅 폼을 작성해주세요.'}</h1>
        {!orderId ? (
          <p className="comparison-sub" style={{ color: 'var(--danger)' }}>
            {isEn ? 'Order ID is missing. Please contact support before submitting.' : 'order_id가 없습니다. 제출 전 고객지원으로 문의해주세요.'}
          </p>
        ) : null}
        <p className="comparison-sub">
          {isEn
            ? `Plan: ${plan.toUpperCase()} · Provider: ${provider}`
            : `플랜: ${plan.toUpperCase()} · 결제수단: ${provider}`}
        </p>

        <div className="modal" style={{ margin: '0 auto' }}>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="form-label">{isEn ? 'Service name' : '서비스 이름'} <span className="required">*</span></label>
              <input name="serviceName" type="text" className="form-input" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{isEn ? 'Platform' : '플랫폼'} <span className="required">*</span></label>
                <select name="platform" className="form-select" required defaultValue="">
                  <option value="" disabled>{isEn ? 'Select' : '선택'}</option>
                  <option>Android</option>
                  <option>iOS</option>
                  <option>Android + iOS</option>
                  <option>{isEn ? 'Web' : '웹'}</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">{isEn ? 'Category' : '카테고리'} <span className="required">*</span></label>
                <select name="category" className="form-select" required defaultValue="">
                  <option value="" disabled>{isEn ? 'Select' : '선택'}</option>
                  <option>{isEn ? 'Utility' : '유틸리티'}</option>
                  <option>{isEn ? 'Lifestyle' : '라이프스타일'}</option>
                  <option>{isEn ? 'Productivity' : '생산성'}</option>
                  <option>{isEn ? 'Game' : '게임'}</option>
                  <option>{isEn ? 'Others' : '기타'}</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">DAU <span className="required">*</span></label>
                <input name="dau" type="text" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">{isEn ? 'Monthly revenue' : '월 수익'} <span className="required">*</span></label>
                <input name="monthlyRevenue" type="text" className="form-input" required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{isEn ? 'Biggest challenge right now' : '가장 고민되는 것'} <span className="required">*</span></label>
              <textarea name="challenge" className="form-textarea" required />
            </div>

            <div className="form-group">
              <label className="form-label">{isEn ? 'Email' : '이메일'} <span className="required">*</span></label>
              <input name="email" type="email" className="form-input" required />
            </div>

            <div className="form-submit">
              <button type="submit" className="btn-primary-full" disabled={isSubmitting || !orderId}>
                {isSubmitting
                  ? isEn
                    ? 'Submitting...'
                    : '제출 중...'
                  : isEn
                    ? 'Submit Setup Form'
                    : '세팅 폼 제출'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
