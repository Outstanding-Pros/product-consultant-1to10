import type { Metadata } from "next";
import { Noto_Sans_KR, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "앱 수익 처방전 — DAU는 있는데 수익이 안 나오는 앱 개발자를 위한 맞춤형 전략",
  description:
    "강의 듣고 커뮤니티 물어봐도 안 풀리던 앱 수익화. 당신의 앱 데이터를 분석해서 정확히 무엇을 해야 하는지 알려드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </body>
    </html>
  );
}
