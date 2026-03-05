'use client'

import { useEffect, useState } from 'react'
import { type Locale } from '@/i18n/locale'

type FooterProps = {
  locale: Locale
}

type PolicySection = {
  title: string
  lines: string[]
}

const policySections: PolicySection[] = [
  {
    title: '공고일자: 2026년 3월 6일 | 시행일자: 2026년 3월 6일',
    lines: [
      'Outstanding Pros(이하 "회사")는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.',
    ],
  },
  {
    title: '제1조 (개인정보 수집에 대한 동의)',
    lines: [
      '회사는 이용자가 회사의 개인정보처리방침 또는 이용약관의 내용에 대해 「동의」 버튼을 클릭하거나, 설문 참여·이메일 제출 등의 행위를 통해 개인정보 수집에 대해 동의한 것으로 봅니다.',
    ],
  },
  {
    title: '제2조 (개인정보의 수집·이용·제공에 대한 동의철회)',
    lines: [
      '이용자는 개인정보의 수집·이용·제공에 대한 동의를 언제든지 철회할 수 있습니다. 동의철회는 아래 개인정보 보호책임자에게 이메일로 연락하여 요청할 수 있으며, 회사는 지체 없이 개인정보의 파기 등 필요한 조치를 하겠습니다.',
    ],
  },
  {
    title: '제3조 (개인정보의 처리 목적)',
    lines: [
      '회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.',
      '서비스 제공 및 운영: 설문조사 서비스 제공, 설문 결과 분석, 맞춤형 콘텐츠 제공, 서비스 개선',
      '회원 관리: 회원제 서비스 이용에 따른 본인확인, 서비스 부정이용 방지, 각종 고지·통지 사항 전달',
      '마케팅 및 광고 활용: 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트·광고성 정보 제공 및 참여 기회 제공, 서비스 이용 통계 수집',
    ],
  },
  {
    title: '제4조 (개인정보의 처리 및 보유 기간)',
    lines: [
      '회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.',
      '서비스 이용 기록: 서비스 제공 목적 달성 시까지 (단, 관련 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보존)',
      '전자상거래 등에서의 소비자 보호에 관한 법률: 계약 또는 청약철회 등에 관한 기록 5년, 대금결제 및 재화 등의 공급에 관한 기록 5년, 소비자의 불만 또는 분쟁처리에 관한 기록 3년',
      '통신비밀보호법: 웹사이트 방문기록 3개월',
    ],
  },
  {
    title: '제5조 (처리하는 개인정보의 항목)',
    lines: [
      '회사는 다음의 개인정보 항목을 처리하고 있습니다.',
      '설문 참여 시: 이름, 이메일 주소, 설문 응답 내용',
      '이메일 등록 시: 이메일 주소, 관심 솔루션 선택 정보',
      '인터뷰 참여 희망 시: 이름, 이메일 주소, 연락처',
      '서비스 이용 과정에서 자동 수집: IP 주소, 쿠키, 서비스 이용 기록, 방문 기록',
    ],
  },
  {
    title: '제6조 (개인정보의 제3자 제공)',
    lines: [
      '회사는 정보주체의 개인정보를 제3조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다. 현재 회사는 이용자의 개인정보를 제3자에게 제공하고 있지 않습니다.',
    ],
  },
  {
    title: '제7조 (개인정보처리의 위탁)',
    lines: [
      '회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.',
      'Google LLC: 설문 데이터 저장 및 관리 (Google Sheets), 웹사이트 분석 (Google Analytics)',
      '회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.',
    ],
  },
  {
    title: '제8조 (개인정보의 파기절차 및 방법)',
    lines: [
      '회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.',
      '파기절차: 불필요한 개인정보 및 개인정보파일은 개인정보 보호책임자의 책임 하에 내부 방침 절차에 따라 파기합니다.',
      '파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.',
    ],
  },
  {
    title: '제9조 (정보주체의 권리·의무 및 행사방법)',
    lines: [
      '정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.',
      '개인정보 열람, 정정·삭제, 처리정지 요청은 아래 개인정보 보호책임자에게 이메일로 연락하시면 지체 없이 조치하겠습니다.',
      '권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여서도 할 수 있습니다. 이 경우 「개인정보 처리 방법에 관한 고시」 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.',
      '개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.',
    ],
  },
  {
    title: '제10조 (개인정보의 안전성 확보조치)',
    lines: [
      '회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.',
      '관리적 조치: 내부관리계획 수립·시행, 개인정보 취급 직원의 최소화 및 교육',
      '기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치',
      '물리적 조치: 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관',
    ],
  },
  {
    title: '제11조 (쿠키의 설치·운영 및 거부)',
    lines: [
      '회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 쿠키(cookie)를 사용합니다.',
      '쿠키의 사용 목적: 이용자의 방문 및 이용형태, 관심 분야 등을 파악하여 이용자에게 최적화된 정보 제공',
      '쿠키의 설치·운영 및 거부: 웹브라우저 상단의 설정 > 개인정보 보호 메뉴에서 쿠키 허용 여부를 설정할 수 있습니다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.',
    ],
  },
  {
    title: '제12조 (행태정보의 수집·이용)',
    lines: [
      '회사는 서비스 이용 과정에서 정보주체에게 최적화된 맞춤형 서비스 및 혜택, 온라인 광고 등을 제공하기 위하여 행태정보를 수집·이용하고 있습니다.',
      '수집하는 행태정보: 웹사이트 방문 기록, 페이지 체류 시간, 클릭 이벤트 등',
      '수집 방법: Google Analytics, Google Tag Manager를 통한 자동 수집',
      '거부 방법: 웹브라우저의 쿠키 설정 변경 또는 Google Analytics Opt-out 브라우저 플러그인 설치',
    ],
  },
  {
    title: '제13조 (개인정보 보호책임자)',
    lines: [
      '회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.',
      '회사명: Outstanding Pros',
      '이메일: contact@outstanding-pros.xyz',
    ],
  },
  {
    title: '제14조 (개인정보 열람청구 접수·처리 부서)',
    lines: [
      '정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.',
      '개인정보 열람청구 접수·처리 부서 이메일: contact@outstanding-pros.xyz',
    ],
  },
  {
    title: '제15조 (정보주체의 권익 침해에 대한 구제방법)',
    lines: [
      '정보주체는 개인정보 침해로 인한 구제를 받기 위하여 개인정보 분쟁조정위원회, 한국인터넷진흥원 개인정보 침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.',
      '개인정보 분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)',
      '개인정보 침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)',
      '대검찰청: (국번없이) 1301 (www.spo.go.kr)',
      '경찰청: (국번없이) 182 (ecrm.cyber.go.kr)',
    ],
  },
  {
    title: '제16조 (개인정보 처리방침 변경)',
    lines: [
      '이 개인정보처리방침은 2026년 3월 6일부터 적용됩니다. 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다. 개인정보처리방침이 변경되는 경우 변경 사항을 웹사이트를 통해 공지할 것입니다.',
      '공고일자: 2026년 3월 6일',
      '시행일자: 2026년 3월 6일',
    ],
  },
]

export default function Footer({ locale }: FooterProps) {
  const isEn = locale === 'en'
  const [isPolicyOpen, setIsPolicyOpen] = useState(false)
  const [isEmailCopied, setIsEmailCopied] = useState(false)

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText('contact@outstanding-pros.xyz')
      setIsEmailCopied(true)
      setTimeout(() => setIsEmailCopied(false), 1400)
    } catch {
      setIsEmailCopied(false)
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsPolicyOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isPolicyOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isPolicyOpen])

  return (
    <>
      <footer className="footer">
        <p>
          © 2026 Propel &nbsp;·&nbsp;{' '}
          <button className="footer-link-btn" onClick={handleCopyEmail}>
            {isEn ? 'Contact' : '문의하기'}
          </button>
          {isEmailCopied ? <span className="footer-copy-hint">{isEn ? 'Copied' : '복사됨'}</span> : null}
          &nbsp;·&nbsp;{' '}
          <button className="footer-link-btn" onClick={() => setIsPolicyOpen(true)}>
            {isEn ? 'Privacy Policy' : '개인정보처리방침'}
          </button>
        </p>
      </footer>

      <div
        className={`privacy-modal-overlay${isPolicyOpen ? ' active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setIsPolicyOpen(false) }}
      >
        <div className="privacy-modal">
          <button className="privacy-modal-close" onClick={() => setIsPolicyOpen(false)}>×</button>
          <h2>{isEn ? 'Privacy Policy' : '개인정보처리방침'}</h2>
          <div className="privacy-content">
            {policySections.map((section, idx) => (
              <section key={idx} className="privacy-section">
                <h3>{section.title}</h3>
                {section.lines.map((line, lineIdx) => (
                  <p key={lineIdx}>{line}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
