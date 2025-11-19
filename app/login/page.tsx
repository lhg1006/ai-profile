'use client'

import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [accessCode, setAccessCode] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)

  // 접근 코드 (환경변수로 설정 가능)
  const VALID_ACCESS_CODE = process.env.NEXT_PUBLIC_ACCESS_CODE || 'DEMO2024'

  useEffect(() => {
    // 이미 로그인된 경우 홈으로 리다이렉트
    const checkSession = async () => {
      const session = await getSession()
      if (session) {
        router.push('/')
      }
    }
    checkSession()
  }, [router])

  const handleAccessCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (accessCode === VALID_ACCESS_CODE) {
      setIsAuthorized(true)
    } else {
      alert('잘못된 접근 코드입니다.')
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl: '/upload' })
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailLogin = () => {
    // 임시로 이메일 입력받아서 세션 생성 (데모용)
    const email = prompt('이메일을 입력하세요 (데모용)')
    if (email) {
      // 기존 유저 체크
      const existingUser = localStorage.getItem('demo-user')

      if (!existingUser) {
        // 신규 유저인 경우
        localStorage.setItem('demo-user', JSON.stringify({
          email,
          name: email.split('@')[0]
        }))

        // 신규 유저 10 코인 지급
        localStorage.setItem('ai_profile_coins', '10')
        alert('🎉 환영합니다! 신규 가입 보너스 10코인이 지급되었습니다!')
      } else {
        // 기존 유저인 경우 - 코인 그대로 유지
        localStorage.setItem('demo-user', JSON.stringify({
          email,
          name: email.split('@')[0]
        }))
      }

      router.push('/upload')
    }
  }

  // 접근 코드 입력 화면
  if (!isAuthorized) {
    return (
      <PageWrapper>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <Link href="/" className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 block">
                AI 프로필
              </Link>
              <p className="text-sm sm:text-base text-gray-600">🔒 접근 제한</p>
            </div>

            {/* Access Code Form */}
            <form onSubmit={handleAccessCodeSubmit} className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-800 text-center">
                  ⚠️ 현재 테스트 단계입니다.<br />
                  접근 코드가 필요합니다.
                </p>
              </div>

              <div>
                <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700 mb-2">
                  접근 코드
                </label>
                <input
                  type="password"
                  id="accessCode"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="접근 코드를 입력하세요"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition-colors"
              >
                확인
              </button>
            </form>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                ← 홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 block">
            AI 프로필
          </Link>
          <p className="text-sm sm:text-base text-gray-600">로그인하여 AI 프로필 사진을 만들어보세요</p>
        </div>

        {/* Login Options */}
        <div className="space-y-3 sm:space-y-4">
          {/* Google Login (비활성화) */}
          <button
            disabled
            className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-gray-100 border-2 border-gray-200 rounded-lg px-4 sm:px-6 py-3 text-gray-500 font-medium opacity-50 cursor-not-allowed text-sm sm:text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#9CA3AF" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#9CA3AF" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#9CA3AF" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#9CA3AF" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google로 시작하기 (설정 필요)
          </button>

          {/* 간편 로그인 (데모용) */}
          <button
            onClick={handleEmailLogin}
            className="w-full bg-indigo-600 text-white rounded-lg px-4 sm:px-6 py-3 font-medium hover:bg-indigo-700 transition-colors text-sm sm:text-base"
          >
            📧 이메일로 간편 시작 (데모)
          </button>

          {/* 카카오 로그인 (비활성화) */}
          <button
            disabled
            className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-yellow-400 text-gray-800 rounded-lg px-4 sm:px-6 py-3 font-medium opacity-50 cursor-not-allowed text-sm sm:text-base"
          >
            <span className="text-lg">💬</span>
            카카오톡으로 시작하기 (준비중)
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 text-center leading-relaxed">
            로그인 시 <Link href="/privacy" className="text-indigo-600 underline">개인정보처리방침</Link> 및 
            <Link href="/terms" className="text-indigo-600 underline ml-1">이용약관</Link>에 동의하는 것으로 간주됩니다.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-4 sm:mt-6 text-center">
          <Link href="/" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
      </div>
    </PageWrapper>
  )
}