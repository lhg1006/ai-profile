'use client'

import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800">
              AI 프로필
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                개인정보처리방침
              </h1>

              <div className="space-y-8 text-gray-700">
                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    1. 개인정보의 수집 및 이용 목적
                  </h2>
                  <p className="leading-relaxed">
                    AI 프로필 서비스(이하 "서비스")는 다음과 같은 목적으로 개인정보를 수집하고 이용합니다:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li>AI 프로필 사진 생성 서비스 제공</li>
                    <li>회원 관리 및 본인 확인</li>
                    <li>서비스 이용 기록 관리</li>
                    <li>결제 및 환불 처리</li>
                    <li>고객 문의 대응 및 공지사항 전달</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    2. 수집하는 개인정보 항목
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold mb-2">필수 항목:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>이메일 주소</li>
                        <li>닉네임</li>
                        <li>프로필 사진 (AI 학습용)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">선택 항목:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>성별, 연령대</li>
                        <li>소셜 로그인 정보 (구글, 카카오)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">자동 수집 항목:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>IP 주소, 쿠키, 방문 일시</li>
                        <li>서비스 이용 기록</li>
                        <li>기기 정보 (OS, 브라우저 종류)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    3. 개인정보의 보유 및 이용 기간
                  </h2>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>회원정보:</strong> 회원 탈퇴 시까지 (단, 관련 법령에 따라 보존 필요 시 해당 기간 동안 보관)
                    </li>
                    <li>
                      <strong>업로드된 사진:</strong> AI 생성 완료 후 24시간 이내 자동 삭제
                    </li>
                    <li>
                      <strong>생성된 AI 사진:</strong> 생성 후 30일간 보관 (다운로드 기간)
                    </li>
                    <li>
                      <strong>결제 정보:</strong> 전자상거래법에 따라 5년간 보관
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    4. 개인정보의 제3자 제공
                  </h2>
                  <p className="leading-relaxed">
                    당사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li>이용자가 사전에 동의한 경우</li>
                    <li>법령의 규정에 의하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                    <li>결제 처리를 위해 PG사에 필요 최소한의 정보를 제공하는 경우</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    5. 개인정보의 안전성 확보 조치
                  </h2>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>개인정보의 암호화: 비밀번호는 일방향 암호화되어 저장 및 관리</li>
                    <li>해킹 등에 대비한 기술적 대책: 방화벽 및 보안 프로그램 설치</li>
                    <li>개인정보 접근 제한: 개인정보 처리 담당자 최소화</li>
                    <li>접속기록의 보관: 개인정보 처리시스템 접속 기록 6개월 이상 보관</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    6. 이용자의 권리와 행사 방법
                  </h2>
                  <p className="leading-relaxed mb-3">
                    이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>개인정보 열람 요구</li>
                    <li>오류 등이 있을 경우 정정 요구</li>
                    <li>삭제 요구</li>
                    <li>처리 정지 요구</li>
                  </ul>
                  <p className="mt-4">
                    위 권리 행사는 고객센터(support@aiprofile.kr)를 통해 요청하실 수 있습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    7. 쿠키(Cookie)의 운영
                  </h2>
                  <p className="leading-relaxed">
                    서비스는 이용자 맞춤형 서비스 제공을 위해 쿠키를 사용합니다. 
                    이용자는 브라우저 설정을 통해 쿠키 사용을 거부할 수 있으나, 
                    이 경우 서비스 이용에 제한이 있을 수 있습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    8. 개인정보 보호책임자
                  </h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">개인정보 보호책임자</p>
                    <ul className="space-y-1">
                      <li>성명: 홍길동</li>
                      <li>직책: 개인정보보호 담당자</li>
                      <li>이메일: privacy@aiprofile.kr</li>
                      <li>전화: 1588-1234</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    9. 개인정보처리방침의 변경
                  </h2>
                  <p className="leading-relaxed">
                    이 개인정보처리방침은 2025년 1월 1일부터 적용되며, 
                    법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있을 경우 
                    변경사항의 시행 7일 전부터 공지사항을 통해 고지할 것입니다.
                  </p>
                </section>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    시행일: 2025년 1월 1일<br />
                    최종 수정일: 2025년 1월 1일
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Back Button */}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-gray-800"
              >
                ← 홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}