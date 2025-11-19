'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navbar />

      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base font-semibold">
            ⚠️ 데모 어플리케이션 - 포트폴리오용 프로젝트입니다. 실제 AI 생성 기능은 작동하지 않습니다.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block sm:inline">전문가급 프로필 사진을</span><br className="hidden sm:block" />
            <span className="text-indigo-600">AI로 만들어보세요</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            셀카 10장만 업로드하면 30장의 전문가급 프로필 사진을 몇 분 안에 받아보세요. 
            링크드인, 이력서, SNS에 완벽한 사진입니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/upload"
                className="block w-full sm:w-auto bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-700 transition duration-300 text-center shadow-lg hover:shadow-xl"
              >
                지금 시작하기 - 10코인 무료
              </Link>
            </motion.div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-gray-500">신용카드 등록 불필요</p>
        </div>

        {/* Sample Results Grid */}
        <div className="mt-12 sm:mt-20 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                  샘플 {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-4">왜 저희 서비스인가요?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-indigo-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">빠른 생성</h3>
            <p className="text-sm sm:text-base text-gray-600">20-30분 내에 사진 완성</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-indigo-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">1:3 생성비율</h3>
            <p className="text-sm sm:text-base text-gray-600">다양한 스타일과 배경 선택 가능</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-indigo-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">개인정보 보호</h3>
            <p className="text-sm sm:text-base text-gray-600">처리 후 사진 자동 삭제</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">사용 방법</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">사진 업로드</h3>
              <p className="text-gray-600 text-xs sm:text-sm">다양한 각도의 셀카 5-15장 업로드</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">AI 학습</h3>
              <p className="text-gray-600 text-xs sm:text-sm">당신의 얼굴 특징을 AI가 학습</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">사진 생성</h3>
              <p className="text-gray-600 text-xs sm:text-sm">AI가 3배수의 전문가급 사진 생성</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">다운로드</h3>
              <p className="text-gray-600 text-xs sm:text-sm">모든 사진을 고화질로 다운로드</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">코인 시스템</h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-6 sm:p-8 border border-yellow-200">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🪙</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-800 mb-4">코인으로 결제</h3>
              <p className="text-sm sm:text-base text-yellow-700 mb-6">
                필요한 만큼만 코인을 충전하고 AI 프로필 사진을 생성하세요. 
                더 경제적이고 유연한 결제 방식입니다.
              </p>
              <div className="space-y-3 text-sm text-yellow-800 mb-6">
                <div className="text-center text-xs text-yellow-600 mb-2">✨ 1:3 생성 비율 ✨</div>
                <div className="flex justify-between">
                  <span>기본 생성 (사진 1장→3장)</span>
                  <span className="font-semibold">10 코인</span>
                </div>
                <div className="flex justify-between">
                  <span>프리미엄 생성 (고품질)</span>
                  <span className="font-semibold">15 코인</span>
                </div>
                <div className="flex justify-between">
                  <span>배경/스타일 변경</span>
                  <span className="font-semibold">2 코인</span>
                </div>
                <div className="text-xs text-yellow-600 text-center mt-2">
                  예: 10장 업로드 → 30장 생성
                </div>
              </div>
              <Link 
                href="/coins" 
                className="block bg-yellow-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-yellow-700 font-semibold text-sm sm:text-base"
              >
                코인 충전하기
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🎁</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">신규 가입 혜택</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                지금 가입하면 무료로 10 코인을 드립니다!
                바로 AI 프로필 사진 생성을 체험해보세요.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-indigo-600">10 코인 무료</div>
                <div className="text-sm text-indigo-500">사진 1장 → 3장 생성 가능!</div>
              </div>
              <Link 
                href="/login" 
                className="block bg-indigo-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-indigo-700 font-semibold text-sm sm:text-base"
              >
                무료로 시작하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 border-t">
        <div className="text-center text-gray-600">
          <p className="text-sm sm:text-base">© 2025 AI 프로필. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-gray-900 text-sm sm:text-base">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-gray-900 text-sm sm:text-base">이용약관</Link>
            <Link href="/contact" className="hover:text-gray-900 text-sm sm:text-base">문의하기</Link>
          </div>
        </div>
      </footer>
      </div>
    </PageWrapper>
  )
}