import { CoinMarketChart } from '@/types/Coins'

interface ChartPoint {
  date: number
  price: number
  marketCap: number
  volume: number
}

export function chartData(data: CoinMarketChart): ChartPoint[] {
  const { prices, market_caps, total_volumes } = data

  const result = prices.map((point: [number, number], index: number) => ({
    date: point[0],
    price: point[1],
    marketCap: market_caps[index][1],
    volume: total_volumes[index][1],
  }))

  return result
}