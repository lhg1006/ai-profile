import { getSession } from 'next-auth/react'

export const getUser = async () => {
  // NextAuth 세션 체크
  const session = await getSession()
  if (session?.user) {
    return session.user
  }

  // 데모 로그인 체크 (클라이언트 사이드에서만)
  if (typeof window !== 'undefined') {
    const demoUser = localStorage.getItem('demo-user')
    if (demoUser) {
      return JSON.parse(demoUser)
    }
  }

  return null
}

export const requireAuth = () => {
  // 클라이언트 컴포넌트에서 사용하는 인증 체크
  if (typeof window !== 'undefined') {
    const demoUser = localStorage.getItem('demo-user')
    return !!demoUser
  }
  return false
}