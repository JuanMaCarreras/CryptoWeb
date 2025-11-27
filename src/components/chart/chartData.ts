interface CoinPoint {
  time: string
  price: number
  marketCap: number
  volume: number
}

interface ChartApiResponse {
  prices: [number, number][]
  market_caps: [number, number][]
  total_volumes: [number, number][]
}

export function chartData(data: ChartApiResponse): CoinPoint[] {

  const { prices, market_caps, total_volumes } = data

  const result = prices.map((point: [number, number], index: number) => ({
    time: new Date(point[0]).toLocaleDateString(),
    price: point[1],
    marketCap: market_caps[index][1],
    volume: total_volumes[index][1],
  }))


  return result

}