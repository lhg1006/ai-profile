'use client'

import { useState, useEffect } from 'react'
import { getUserCoins, formatCoins } from '@/lib/coins'
import Link from 'next/link'

export default function CoinBalance() {
  const [coins, setCoins] = useState(0)

  useEffect(() => {
    setCoins(getUserCoins())
    
    // 코인 변경 감지를 위한 이벤트 리스너
    const handleCoinsUpdate = () => {
      setCoins(getUserCoins())
    }

    window.addEventListener('coinsUpdated', handleCoinsUpdate)
    return () => window.removeEventListener('coinsUpdated', handleCoinsUpdate)
  }, [])

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-1">
        <span className="text-yellow-600 text-lg mr-1">🪙</span>
        <span className="text-yellow-800 font-semibold">{formatCoins(coins)}</span>
      </div>
      <Link
        href="/coins"
        className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors"
      >
        충전
      </Link>
    </div>
  )
}