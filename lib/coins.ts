// 코인 관련 유틸리티 함수들

export interface CoinPackage {
  id: string
  coins: number
  price: number
  bonus?: number
  popular?: boolean
  title: string
}

export const COIN_PACKAGES: CoinPackage[] = [
  {
    id: 'starter',
    coins: 100,
    price: 9900,
    title: '스타터 팩'
  },
  {
    id: 'basic',
    coins: 300,
    price: 19900,
    bonus: 50,
    title: '베이직 팩'
  },
  {
    id: 'popular',
    coins: 500,
    price: 29900,
    bonus: 100,
    popular: true,
    title: '인기 팩'
  },
  {
    id: 'premium',
    coins: 1000,
    price: 49900,
    bonus: 300,
    title: '프리미엄 팩'
  },
  {
    id: 'mega',
    coins: 2000,
    price: 89900,
    bonus: 700,
    title: '메가 팩'
  }
]

// 코인 소모량 정의 (업로드한 사진 1장당 3장 생성)
export const COIN_COSTS = {
  PROFILE_GENERATION: 10,           // 사진 1장당 3장 생성 (10 코인 x 사진 수)
  PREMIUM_QUALITY: 5,               // 프리미엄 품질 추가 (사진당)
  BACKGROUND_CHANGE: 2,             // 배경 변경 (사진당)
  STYLE_CHANGE: 2,                  // 스타일 변경 (사진당)
  HIGH_RESOLUTION: 5,               // 고해상도 다운로드 (사진당)
  BULK_DOWNLOAD: 20,                // 일괄 다운로드 (전체)
}

// 생성 옵션
export const GENERATION_OPTIONS = {
  BASIC: {
    name: '기본 생성',
    description: '업로드한 사진 1장당 3장 생성',
    ratio: '1:3',
    costPerPhoto: COIN_COSTS.PROFILE_GENERATION
  },
  PREMIUM: {
    name: '프리미엄 생성', 
    description: '업로드한 사진 1장당 3장 생성 + 고품질',
    ratio: '1:3',
    costPerPhoto: COIN_COSTS.PROFILE_GENERATION + COIN_COSTS.PREMIUM_QUALITY
  }
}

// 로컬스토리지에서 코인 잔액 관리 (실제로는 DB 사용)
export const getUserCoins = (): number => {
  if (typeof window === 'undefined') return 0
  
  const demoUser = localStorage.getItem('demo-user')
  if (!demoUser) return 0
  
  const user = JSON.parse(demoUser)
  return user.coins || 0
}

export const setUserCoins = (coins: number): void => {
  if (typeof window === 'undefined') return
  
  const demoUser = localStorage.getItem('demo-user')
  if (!demoUser) return
  
  const user = JSON.parse(demoUser)
  user.coins = coins
  localStorage.setItem('demo-user', JSON.stringify(user))
}

export const addCoins = (amount: number): number => {
  const currentCoins = getUserCoins()
  const newBalance = currentCoins + amount
  setUserCoins(newBalance)
  return newBalance
}

export const spendCoins = (amount: number): boolean => {
  const currentCoins = getUserCoins()
  if (currentCoins < amount) {
    return false // 잔액 부족
  }
  
  setUserCoins(currentCoins - amount)
  return true
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(price)
}

export const formatCoins = (coins: number): string => {
  return new Intl.NumberFormat('ko-KR').format(coins)
}