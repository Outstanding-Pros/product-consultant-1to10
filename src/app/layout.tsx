import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CoPO — DAU는 있는데 수익이 안 나오는 앱 개발자를 위한 맞춤형 수익화 전략',
  description: '前 PO 출신 기획자가 설계한 인디 앱 맞춤형 수익화 컨설팅. 강의나 커뮤니티가 아닌, 당신의 앱 데이터에 기반한 구체적인 전략을 드립니다.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
