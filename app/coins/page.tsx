'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { COIN_PACKAGES, CoinPackage, getUserCoins, addCoins, formatPrice, formatCoins } from '@/lib/coins'
import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'

export default function CoinsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [demoUser, setDemoUser] = useState<any>(null)
  const [currentCoins, setCurrentCoins] = useState(0)
  const [loading, setLoading] = useState('')

  // 로그인 체크 (한 번만 실행)
  useEffect(() => {
    if (status === 'loading') return

    // 데모 유저 체크
    if (typeof window !== 'undefined') {
      const demo = localStorage.getItem('demo-user')
      if (demo) {
        setDemoUser(JSON.parse(demo))
      }
    }

    // 코인 잔액 불러오기
    setCurrentCoins(getUserCoins())
  }, [status])

  // 인증 확인 및 리다이렉트
  useEffect(() => {
    if (status === 'loading') return

    // localStorage 직접 확인 (상태 업데이트 타이밍 문제 방지)
    const hasLocalUser = typeof window !== 'undefined' && localStorage.getItem('demo-user')

    if (!session && !demoUser && !hasLocalUser) {
      router.push('/login')
    }
  }, [session, demoUser, status, router])

  const handlePurchase = async (pkg: CoinPackage) => {
    setLoading(pkg.id)
    
    // 실제로는 결제 API 연동
    // 데모용으로 2초 대기 후 코인 추가
    setTimeout(() => {
      const totalCoins = pkg.coins + (pkg.bonus || 0)
      const newBalance = addCoins(totalCoins)
      setCurrentCoins(newBalance)
      
      // 코인 업데이트 이벤트 발생
      window.dispatchEvent(new Event('coinsUpdated'))
      
      setLoading('')
      alert(`🎉 ${formatCoins(totalCoins)} 코인이 충전되었습니다!`)
    }, 2000)
  }

  if (status === 'loading' || (!session && !demoUser)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">로그인 확인 중...</p>
        </div>
      </div>
    )
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            AI 프로필
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              코인 충전하기
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
              <span className="text-xl sm:text-2xl">🪙</span>
              <span className="text-lg sm:text-2xl font-bold text-indigo-600">현재 잔액: {formatCoins(currentCoins)} 코인</span>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              코인으로 AI 프로필 사진을 생성하세요. 더 많이 구매할수록 보너스 코인을 받을 수 있습니다.
            </p>
          </div>

          {/* Coin Usage Guide */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">💡 코인 사용 가이드 (1:3 생성 비율)</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-blue-800 text-xs sm:text-sm">
              <div>
                <div className="mb-3">
                  <strong>기본 생성:</strong> 사진 1장당 10 코인
                  <div className="text-xs text-blue-600 mt-1">
                    예: 10장 업로드 → 30장 생성 (100 코인)
                  </div>
                </div>
                <div>
                  <strong>프리미엄 생성:</strong> 사진 1장당 15 코인  
                  <div className="text-xs text-blue-600 mt-1">
                    예: 10장 업로드 → 30장 생성 + 고품질 (150 코인)
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-3">
                  <strong>배경 변경:</strong> 사진 1장당 2 코인
                </div>
                <div>
                  <strong>스타일 변경:</strong> 사진 1장당 2 코인
                </div>
              </div>
            </div>
          </div>

          {/* Coin Packages */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {COIN_PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 relative hover:shadow-2xl transition-shadow duration-300 ${
                  pkg.popular ? 'ring-2 ring-indigo-500 sm:transform sm:scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                      인기
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-600">
                      {formatCoins(pkg.coins)}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">코인</div>
                    {pkg.bonus && (
                      <div className="text-green-600 text-xs sm:text-sm font-semibold">
                        + {formatCoins(pkg.bonus)} 보너스!
                      </div>
                    )}
                  </div>

                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {formatPrice(pkg.price)}
                  </div>

                  <motion.button
                    onClick={() => handlePurchase(pkg)}
                    disabled={loading === pkg.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold transition-colors text-xs sm:text-sm ${
                      pkg.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-gray-800 text-white hover:bg-gray-900'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {loading === pkg.id ? '결제 중...' : '구매하기'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payment Notice */}
          <div className="mt-8 sm:mt-12 bg-gray-100 rounded-lg p-4 sm:p-6 text-center">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">💳 결제 안내</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              현재는 데모 모드로 실제 결제가 진행되지 않습니다. 
              실서비스에서는 토스페이먼츠, 카카오페이 등을 통해 안전하게 결제할 수 있습니다.
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-6 sm:mt-8 text-center">
            <Link
              href="/upload"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm sm:text-base"
            >
              ← 사진 생성하러 가기
            </Link>
          </div>
        </div>
      </div>
      </div>
    </PageWrapper>
  )
}