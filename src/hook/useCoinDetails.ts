// src/hook/useCoinDetails.ts
import { useState, useEffect } from 'react'
import { getCoinById } from '@/service/api'
import { CoinDetails } from '@/types/Coins'

export function useCoinDetails(coinId: string | undefined) {
  const [coins, setCoins] = useState<CoinDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    setCoins(null)

    if (!coinId) {
      setLoading(false)
      setError(new Error('No coin ID provided'))
      return
    }

    let cancelled = false

    const fetchDetailById = async () => {
      try {
        const res = await getCoinById(coinId)
        
        if (!cancelled) {
          setCoins(res)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Error fetching coin details:', err)
          setError(err as Error)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchDetailById()

    return () => {
      cancelled = true
    }
  }, [coinId])

  return { coins, loading, error }
}