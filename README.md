# AI 프로필 - AI 프로필 사진 생성 서비스 🎨

AI 기술을 활용하여 전문가급 프로필 사진을 생성하는 웹 서비스입니다. 셀카 몇 장만으로 다양한 스타일의 고품질 프로필 사진을 만들어보세요.

## 🌟 주요 기능

### 핵심 서비스
- **AI 프로필 생성**: 1:3 비율로 AI 프로필 사진 생성 (1장 업로드 → 3장 생성)
- **드래그&드롭 업로드**: 직관적인 사진 업로드 인터페이스
- **코인 시스템**: 유연한 충전식 결제 시스템
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원

### 사용자 경험
- **애니메이션**: Framer Motion을 활용한 부드러운 인터랙션
- **챗봇 고객센터**: AI 기반 FAQ 자동 응답 시스템
- **한국어 현지화**: 100% 한국어 지원
- **간편 로그인**: 이메일 기반 데모 로그인

## 🛠 기술 스택

### Frontend
- **Next.js 14**: React 프레임워크
- **TypeScript**: 타입 안정성
- **Tailwind CSS 3**: 유틸리티 기반 스타일링
- **Framer Motion**: 애니메이션 라이브러리

### 인증 & 상태관리
- **NextAuth.js**: 인증 시스템
- **React Hooks**: 상태 관리
- **LocalStorage**: 데모 데이터 저장

### UI/UX
- **React Dropzone**: 파일 업로드
- **Responsive Design**: 모바일 우선 설계

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/lhg1006/ai-profile.git
cd ai-profile-project

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:3000 접속
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
ai-profile-project/
├── app/                    # Next.js 앱 라우터
│   ├── page.tsx           # 메인 랜딩 페이지
│   ├── login/             # 로그인 페이지
│   ├── upload/            # 사진 업로드 페이지
│   ├── coins/             # 코인 충전 페이지
│   ├── contact/           # 고객센터 (챗봇)
│   ├── privacy/           # 개인정보처리방침
│   └── terms/             # 이용약관
├── components/            # 재사용 컴포넌트
│   ├── Navbar.tsx         # 네비게이션 바
│   ├── CoinBalance.tsx    # 코인 잔액 표시
│   ├── PageWrapper.tsx    # 페이지 전환 애니메이션
│   └── SessionProvider.tsx # 인증 프로바이더
├── lib/                   # 유틸리티 함수
│   └── coins.ts           # 코인 관련 로직
└── public/               # 정적 파일

```

## 💰 코인 시스템

### 가격 정책
- **기본 생성**: 사진 1장당 10코인 (1:3 비율)
- **프리미엄 생성**: 사진 1장당 15코인 (고품질)
- **신규 가입 보너스**: 10코인 무료 제공

### 코인 패키지
- 100코인: ₩5,000
- 200코인: ₩9,000 (+10 보너스)
- 500코인: ₩20,000 (+50 보너스)
- 1000코인: ₩35,000 (+150 보너스)
- 2000코인: ₩60,000 (+400 보너스)

## 🎯 향후 계획

### Phase 1: MVP 완성 ✅
- [x] 기본 UI/UX 구현
- [x] 인증 시스템
- [x] 코인 시스템
- [x] 애니메이션
- [x] 법적 문서

### Phase 2: 실제 서비스
- [ ] AI API 연동 (Replicate/Stable Diffusion)
- [ ] 갤러리 & 다운로드 페이지
- [ ] 실제 결제 시스템 (토스페이먼츠)
- [ ] 백엔드 API 구축

### Phase 3: 고도화
- [ ] 소셜 로그인 (구글, 카카오)
- [ ] 사진 스타일 선택 기능
- [ ] 배경 제거/변경
- [ ] 추천 시스템

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 🤝 기여하기

기여는 언제나 환영합니다! PR을 보내주시거나 이슈를 등록해주세요.

## 📞 문의

- 이메일: support@aiprofile.kr
- 고객센터: 1588-1234

---

© 2025 AI 프로필. All rights reserved.

🤖 Built with [Claude Code](https://claude.ai/code)