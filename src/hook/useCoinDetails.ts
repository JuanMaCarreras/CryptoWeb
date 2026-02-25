import type { CoinDetails } from '@/types/Coins'
import { getCoinById } from '@/service/api'
import { useState, useEffect } from 'react'

export function useCoinDetails(coinId: string) {
  const [coins, setCoins] = useState<CoinDetails | null>(null) 
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState<Error | null>(null) 

  useEffect(() => {
    if (!coinId) return

    const fetchDetailById = async () => {
      try {
        setLoading(true)
        const res = await getCoinById(coinId)
        setCoins(res) 
      } catch (err) {
        setError(err as Error)
        console.error('fetch details data', err)
      } finally {
        setLoading(false)
      }
    } 

    fetchDetailById() 
  }, [coinId])

  return { coins, loading, error }
}