import { type Locale } from '@/i18n/locale'

type FooterProps = {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const isEn = locale === 'en'

  return (
    <footer className="footer">
      <p>
        © 2026 CoPO &nbsp;·&nbsp;{' '}
        <a href="mailto:tmddnjs1411@gmail.com">{isEn ? 'Contact' : '문의하기'}</a>
        &nbsp;·&nbsp;{' '}
        <a href="#">{isEn ? 'Privacy Policy' : '개인정보처리방침'}</a>
      </p>
    </footer>
  )
}
