'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            전문가급 프로필 사진을<br />
            <span className="text-indigo-600">AI로 만들어보세요</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            셀카 10장만 업로드하면 100장 이상의 전문가급 프로필 사진을 몇 분 안에 받아보세요. 
            링크드인, 이력서, SNS에 완벽한 사진입니다.
          </p>
          <Link
            href="/upload"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            지금 시작하기 - 첫 5장 무료
          </Link>
          <p className="mt-4 text-sm text-gray-500">신용카드 등록 불필요</p>
        </div>

        {/* Sample Results Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                샘플 {i}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">왜 저희 서비스인가요?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">빠른 생성</h3>
            <p className="text-gray-600">20-30분 내에 사진 완성</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">100장 이상</h3>
            <p className="text-gray-600">다양한 스타일과 배경 선택 가능</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">개인정보 보호</h3>
            <p className="text-gray-600">처리 후 사진 자동 삭제</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-6 py-20 bg-white rounded-3xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">사용 방법</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">사진 업로드</h3>
            <p className="text-gray-600 text-sm">다양한 각도의 셀카 10-15장 업로드</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">AI 학습</h3>
            <p className="text-gray-600 text-sm">당신의 얼굴 특징을 AI가 학습</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">사진 생성</h3>
            <p className="text-gray-600 text-sm">AI가 100장 이상의 전문가급 사진 생성</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="font-semibold mb-2">다운로드</h3>
            <p className="text-gray-600 text-sm">모든 사진을 고화질로 다운로드</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">코인 시스템</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-8 border border-yellow-200">
            <div className="text-center">
              <div className="text-6xl mb-4">🪙</div>
              <h3 className="text-2xl font-semibold text-yellow-800 mb-4">코인으로 결제</h3>
              <p className="text-yellow-700 mb-6">
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
                className="block bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 font-semibold"
              >
                코인 충전하기
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">신규 가입 혜택</h3>
              <p className="text-gray-600 mb-6">
                지금 가입하면 무료로 100 코인을 드립니다!
                바로 AI 프로필 사진 생성을 체험해보세요.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-indigo-600">100 코인 무료</div>
                <div className="text-sm text-indigo-500">사진 10장 → 30장 생성 가능!</div>
              </div>
              <Link 
                href="/login" 
                className="block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 font-semibold"
              >
                무료로 시작하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t">
        <div className="text-center text-gray-600">
          <p>© 2024 AI 프로필. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="hover:text-gray-900">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-gray-900">이용약관</Link>
            <Link href="/contact" className="hover:text-gray-900">문의하기</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}