'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import CoinBalance from './CoinBalance'

export default function Navbar() {
  const { data: session } = useSession()
  const [demoUser, setDemoUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // 데모 유저 체크
    if (typeof window !== 'undefined') {
      const demo = localStorage.getItem('demo-user')
      if (demo) {
        setDemoUser(JSON.parse(demo))
      }
    }
  }, [])

  const handleLogout = async () => {
    if (session) {
      await signOut({ callbackUrl: '/' })
    } else {
      // 데모 로그인 로그아웃
      localStorage.removeItem('demo-user')
      setDemoUser(null)
      router.push('/')
    }
  }

  const user = session?.user || demoUser

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800">
            AI 프로필
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">기능</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">가격</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">사용법</Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <CoinBalance />
                <Link 
                  href="/upload"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  사진 생성하기
                </Link>
                <div className="flex items-center space-x-2">
                  <img 
                    src={user.image || `https://ui-avatars.com/api/?name=${user.name}&background=6366f1&color=fff`}
                    alt={user.name || ''}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700 hidden xl:block">{user.name || user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    로그아웃
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                로그인
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            {user ? (
              <>
                <CoinBalance />
                <div className="flex items-center space-x-2">
                  <img 
                    src={user.image || `https://ui-avatars.com/api/?name=${user.name}&background=6366f1&color=fff`}
                    alt={user.name || ''}
                    className="w-8 h-8 rounded-full"
                  />
                  <button
                    onClick={handleLogout}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    로그아웃
                  </button>
                </div>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-indigo-600 text-white px-3 py-2 text-sm rounded-lg hover:bg-indigo-700 transition-colors"
              >
                로그인
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {user && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-center space-x-6">
              <Link 
                href="/upload"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
              >
                사진 생성하기
              </Link>
              <Link href="#features" className="text-gray-600 hover:text-gray-900 text-sm">기능</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm">가격</Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm">사용법</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}