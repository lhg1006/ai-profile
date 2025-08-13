'use client'

import { useState, useEffect } from 'react'
import { getUserCoins, formatCoins } from '@/lib/coins'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
    <div className="flex items-center space-x-2">
      <div className="flex items-center bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
        <span className="text-yellow-600 text-sm mr-1">🪙</span>
        <span className="text-yellow-800 font-semibold text-sm">{formatCoins(coins)}</span>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/coins"
          className="block bg-indigo-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          충전
        </Link>
      </motion.div>
    </div>
  )
}