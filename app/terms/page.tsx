'use client'

import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'

export default function TermsPage() {
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
                이용약관
              </h1>

              <div className="space-y-8 text-gray-700">
                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 1 조 (목적)
                  </h2>
                  <p className="leading-relaxed">
                    이 약관은 AI 프로필 서비스(이하 "회사")가 제공하는 AI 프로필 사진 생성 서비스(이하 "서비스")의 
                    이용조건 및 절차, 회사와 회원 간의 권리와 의무, 기타 필요한 사항을 규정함을 목적으로 합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 2 조 (정의)
                  </h2>
                  <ul className="space-y-3">
                    <li>
                      <strong>1. 서비스:</strong> 회사가 제공하는 AI 프로필 사진 생성 관련 제반 서비스를 의미합니다.
                    </li>
                    <li>
                      <strong>2. 회원:</strong> 본 약관에 동의하고 회사와 서비스 이용계약을 체결한 개인 또는 법인을 말합니다.
                    </li>
                    <li>
                      <strong>3. 계정(ID):</strong> 회원의 식별과 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 문자나 숫자의 조합을 의미합니다.
                    </li>
                    <li>
                      <strong>4. 코인:</strong> 서비스 내에서 사용되는 가상 화폐로, AI 사진 생성에 필요한 결제 수단입니다.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 3 조 (약관의 게시와 개정)
                  </h2>
                  <p className="leading-relaxed mb-3">
                    1. 회사는 이 약관을 회원이 알 수 있도록 서비스 화면에 게시합니다.
                  </p>
                  <p className="leading-relaxed mb-3">
                    2. 회사는 필요하다고 인정되는 경우 이 약관을 개정할 수 있으며, 개정된 약관은 
                    시행일 7일 전부터 서비스 화면에 공지합니다.
                  </p>
                  <p className="leading-relaxed">
                    3. 회원이 개정된 약관에 동의하지 않을 경우, 서비스 이용을 중단하고 회원탈퇴를 할 수 있습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 4 조 (서비스의 제공)
                  </h2>
                  <p className="leading-relaxed mb-3">
                    회사가 제공하는 서비스는 다음과 같습니다:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>AI 프로필 사진 생성 서비스</li>
                    <li>생성된 사진의 다운로드 서비스</li>
                    <li>코인 충전 및 결제 서비스</li>
                    <li>고객 지원 서비스</li>
                    <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 제공하는 일체의 서비스</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 5 조 (회원가입)
                  </h2>
                  <p className="leading-relaxed mb-3">
                    1. 회원가입은 이용자가 약관에 동의하고 회원가입을 신청하여 회사가 이를 승낙함으로써 체결됩니다.
                  </p>
                  <p className="leading-relaxed mb-3">
                    2. 회사는 다음 각 호에 해당하는 경우 회원가입을 거절할 수 있습니다:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                    <li>타인의 명의를 이용하여 신청한 경우</li>
                    <li>허위 정보를 제공한 경우</li>
                    <li>만 14세 미만인 경우</li>
                    <li>기타 회사가 정한 이용조건에 위배되는 경우</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 6 조 (코인 시스템)
                  </h2>
                  <p className="leading-relaxed mb-3">
                    1. 회원은 AI 사진 생성을 위해 코인을 구매해야 합니다.
                  </p>
                  <p className="leading-relaxed mb-3">
                    2. 코인의 유효기간은 구매일로부터 1년입니다.
                  </p>
                  <p className="leading-relaxed mb-3">
                    3. 코인은 다음과 같이 사용됩니다:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                    <li>기본 생성: 사진 1장당 10코인 (1:3 비율)</li>
                    <li>프리미엄 생성: 사진 1장당 15코인 (고품질)</li>
                    <li>추가 옵션: 배경/스타일 변경 시 추가 코인</li>
                  </ul>
                  <p className="leading-relaxed">
                    4. 사용되지 않은 코인의 환불은 구매일로부터 7일 이내에만 가능합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 7 조 (서비스 이용 시 주의사항)
                  </h2>
                  <p className="leading-relaxed mb-3">
                    회원은 다음 각 호의 행위를 하여서는 안됩니다:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>타인의 사진을 무단으로 업로드하는 행위</li>
                    <li>음란하거나 폭력적인 이미지를 업로드하는 행위</li>
                    <li>저작권, 초상권 등 타인의 권리를 침해하는 행위</li>
                    <li>서비스의 정상적인 운영을 방해하는 행위</li>
                    <li>타인을 사칭하거나 허위 정보를 제공하는 행위</li>
                    <li>회사의 동의 없이 상업적 목적으로 서비스를 이용하는 행위</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 8 조 (저작권 및 지적재산권)
                  </h2>
                  <p className="leading-relaxed mb-3">
                    1. 생성된 AI 프로필 사진의 저작권은 회원에게 있습니다.
                  </p>
                  <p className="leading-relaxed mb-3">
                    2. 회사는 서비스 향상 목적으로 업로드된 사진을 AI 학습에 사용할 수 있습니다.
                  </p>
                  <p className="leading-relaxed">
                    3. 회원은 업로드하는 사진에 대한 적법한 권리를 보유하고 있음을 보증합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 9 조 (서비스 이용의 제한)
                  </h2>
                  <p className="leading-relaxed mb-3">
                    회사는 다음 각 호에 해당하는 경우 사전 통지 없이 서비스 이용을 제한할 수 있습니다:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>본 약관을 위반한 경우</li>
                    <li>서비스의 정상적인 이용을 방해한 경우</li>
                    <li>타인의 권리를 침해한 경우</li>
                    <li>기타 관련 법령을 위반한 경우</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 10 조 (환불 정책)
                  </h2>
                  <ul className="space-y-3">
                    <li>
                      <strong>1. 코인 환불:</strong> 구매일로부터 7일 이내, 사용하지 않은 코인에 한하여 100% 환불 가능
                    </li>
                    <li>
                      <strong>2. 서비스 불만족:</strong> AI 생성 시작 전까지 100% 환불, 생성 중이거나 완료 후에는 개별 검토
                    </li>
                    <li>
                      <strong>3. 환불 처리:</strong> 환불 신청일로부터 영업일 기준 3-5일 내 처리
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 11 조 (손해배상)
                  </h2>
                  <p className="leading-relaxed">
                    1. 회사는 무료로 제공하는 서비스와 관련하여 회원에게 발생한 손해에 대해서는 
                    책임을 지지 않습니다. 다만, 회사의 고의 또는 중과실로 인해 발생한 손해는 예외로 합니다.
                  </p>
                  <p className="leading-relaxed mt-3">
                    2. 회원이 본 약관을 위반하여 회사에 손해를 끼친 경우, 회원은 그 손해를 배상할 책임이 있습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    제 12 조 (분쟁 해결)
                  </h2>
                  <p className="leading-relaxed mb-3">
                    1. 회사와 회원 간 발생한 분쟁에 대해서는 대한민국 법을 적용합니다.
                  </p>
                  <p className="leading-relaxed">
                    2. 서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우, 
                    회사의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.
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