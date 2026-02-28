# 앱 수익 처방전 - 랜딩 페이지

DAU는 있는데 수익이 안 나오는 앱 개발자를 위한 맞춤형 전략 서비스 랜딩 페이지

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payment**: Polar.sh & Toss Payments (듀얼 결제 시스템)
- **Fonts**: Google Fonts (Noto Sans KR, JetBrains Mono, Playfair Display)

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
# Polar.sh Keys (https://polar.sh/settings 에서 발급)
POLAR_ACCESS_TOKEN=polar_at_your_token_here
POLAR_ORGANIZATION_ID=your_org_id_here
POLAR_SINGLE_PRICE_ID=your_single_price_id_here
POLAR_MONTHLY_PRICE_ID=your_monthly_price_id_here

# Toss Payments Keys (https://developers.tosspayments.com/ 에서 발급)
NEXT_PUBLIC_TOSS_CLIENT_KEY=test_ck_your_client_key_here
TOSS_SECRET_KEY=test_sk_your_secret_key_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Polar.sh 설정 방법:

1. [Polar.sh](https://polar.sh/)에 가입 및 로그인
2. Organization 생성
3. Products → "New Product" 클릭
   - 첫 진단: 4,900원 (일회성)
   - 월간 처방: 49,000원/월 (구독)
4. 각 제품의 Price ID 복사
5. Settings → API Keys에서 Access Token 생성
6. `.env.local` 파일에 붙여넣기

#### Toss Payments 설정 방법:

1. [Toss Payments 개발자센터](https://developers.tosspayments.com/)에 가입
2. "내 개발 정보" → "API 키" 메뉴로 이동
3. 테스트 모드에서 "클라이언트 키"와 "시크릿 키" 복사
4. `.env.local` 파일에 붙여넣기

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 주요 기능

### 듀얼 결제 시스템

사용자가 선호하는 결제 방법을 선택할 수 있습니다:

#### 1. **Toss Payments** (기본 추천)
- 한국 사용자 최적화
- 지원 수단: 카드, 카카오페이, 네이버페이, 토스페이 등
- 빠르고 편리한 결제 경험

#### 2. **Polar.sh**
- 글로벌 카드 결제
- 구독 관리 및 자동화 기능
- 인디 개발자 친화적

### 플랜

- **첫 진단**: 4,900원 (일회성 결제)
- **월간 처방**: 49,000원/월 (구독 결제)

### 폼 데이터 수집

결제 시 다음 정보를 수집합니다:
- 앱 이름, 플랫폼, 카테고리
- DAU/MAU
- 현재 수익 모델 및 월 수익
- 운영 중인 앱 개수
- 목표 월 수익
- 고민 사항
- 이메일

모든 데이터는 결제 플랫폼의 metadata로 전달됩니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── api/
│   │   └── checkout/
│   │       ├── route.ts          # Polar.sh 결제 API
│   │       └── toss/
│   │           ├── route.ts      # Toss Payments 주문 생성
│   │           └── confirm/
│   │               └── route.ts  # Toss Payments 결제 승인
│   ├── success/
│   │   ├── page.tsx              # Polar.sh 결제 성공
│   │   └── toss/
│   │       └── page.tsx          # Toss Payments 결제 성공
│   ├── globals.css               # 전역 스타일
│   ├── layout.tsx                # 루트 레이아웃
│   └── page.tsx                  # 메인 페이지
├── components/
│   ├── Hero.tsx                  # 히어로 섹션
│   ├── QuoteBar.tsx              # 소셜 프루프 슬라이더
│   ├── ProblemSection.tsx        # 문제 제기 섹션
│   ├── ComparisonSection.tsx     # 비교 테이블
│   ├── HowItWorks.tsx            # 프로세스 설명
│   ├── PrescriptionPreview.tsx   # 진단서 미리보기
│   ├── TrustSection.tsx          # 신뢰성/운영자 소개
│   ├── PricingSection.tsx        # 가격 플랜
│   ├── FaqSection.tsx            # FAQ
│   ├── FinalCta.tsx              # 최종 CTA
│   ├── Footer.tsx                # 푸터
│   └── DiagnosisModal.tsx        # 진단 신청 모달 (결제 방법 선택 포함)
└── hooks/
    └── useReveal.ts              # 스크롤 애니메이션 훅
```

## 결제 흐름

### Toss Payments
1. 사용자가 폼 작성 및 "간편결제" 선택
2. `/api/checkout/toss`로 주문 정보 생성
3. Toss Payments 위젯으로 결제 진행
4. 결제 성공 시 `/success/toss`로 리다이렉트
5. `/api/checkout/toss/confirm`으로 결제 승인

### Polar.sh
1. 사용자가 폼 작성 및 "신용/체크카드" 선택
2. `/api/checkout`으로 Checkout Session 생성
3. Polar.sh Checkout 페이지로 리다이렉트
4. 결제 성공 시 `/success`로 리다이렉트

## 테스트

### Toss Payments 테스트 카드
- 카드번호: `4242 4242 4242 4242`
- 만료일: 미래 날짜 (예: 12/28)
- CVC: 아무 3자리 (예: 123)

### Polar.sh
- Polar.sh 대시보드에서 테스트 모드 활성화
- 테스트 카드로 결제 진행

## 문의

이메일: tmddnjs1411@gmail.com

## 배포

Vercel에 배포할 경우:

1. Vercel 프로젝트에 환경 변수 추가
2. `NEXT_PUBLIC_APP_URL`을 프로덕션 URL로 변경
3. Polar.sh와 Toss Payments 키를 프로덕션 키로 변경

```bash
# Polar.sh
vercel env add POLAR_ACCESS_TOKEN
vercel env add POLAR_ORGANIZATION_ID
vercel env add POLAR_SINGLE_PRICE_ID
vercel env add POLAR_MONTHLY_PRICE_ID

# Toss Payments
vercel env add NEXT_PUBLIC_TOSS_CLIENT_KEY
vercel env add TOSS_SECRET_KEY

# App URL
vercel env add NEXT_PUBLIC_APP_URL
```
