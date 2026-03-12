import { useState, useEffect } from 'react'
import { getCoinMarket } from '@/service/api'
import { MarketCoins } from '@/types/Coins'

interface UsePaginatedCoinsProps {
  currency: string
  searchQuery: string
  itemsPerPage?: number
}


export function usePaginatedCoins({ currency, searchQuery, itemsPerPage = 50 }: UsePaginatedCoinsProps) {

  const [coins, setCoins] = useState<MarketCoins[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (searchQuery) {
      setCurrentPage(1)
    }
  }, [searchQuery])

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const data = await getCoinMarket({
          currency,
          page: currentPage,
          perPage: itemsPerPage
        })
        setCoins(data)
      } catch (err) {
        setError(err as Error)
        console.error('Error fetching coins:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCoins()
  }, [currency, currentPage, itemsPerPage])


  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextPage = () => goToPage(currentPage + 1)
  const prevPage = () => goToPage(Math.max(1, currentPage - 1))

  return {
    coins: filteredCoins,
    loading,
    error,
    currentPage,
    goToPage,
    nextPage,
    prevPage,
    hasSearch: searchQuery.length > 0
  }
}