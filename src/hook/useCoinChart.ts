import { useEffect, useState } from 'react'
import { getCoinChartMarket } from '@/service/api'
import { CoinMarketChart } from '@/types/Coins'


interface DataChart {
  date: string
  price: number
}

export function useCoinChart(coinId: string | undefined, currency: string) {
  const [dataChart, setDataChart] = useState<DataChart[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!coinId) return

    const fetchDataChart = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const data: CoinMarketChart = await getCoinChartMarket({coinId, currency})
        
        const dataFormat = data.prices.map(price => ({
          date: new Date(price[0]).toLocaleDateString(),
          price: price[1]
        }))
        
        setDataChart(dataFormat)
      } catch (err) {
        setError(err as Error)
        console.error('Error fetching chart data', err)
      } finally {
        setLoading(false)
      }
    }

    fetchDataChart()
  }, [coinId, currency])

  const minPrice = dataChart.length > 0 ? Math.min(...dataChart.map(d => d.price)) : 0
    
  const maxPrice = dataChart.length > 0 ? Math.max(...dataChart.map(d => d.price)) : 0

  return { dataChart, loading, error, minPrice, maxPrice }
}