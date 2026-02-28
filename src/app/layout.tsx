import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '앱 수익 처방전 — DAU는 있는데 수익이 안 나오는 앱 개발자를 위한 맞춤형 전략',
  description: '강의 듣고 커뮤니티 물어봐도 안 풀리던 앱 수익화. 당신의 앱 데이터를 분석해서 정확히 무엇을 해야 하는지 알려드립니다.',
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
