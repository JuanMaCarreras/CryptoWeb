export interface MarketCoins {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  total_volume: number
  price_change_percentage_24h: number
  market_cap_change_percentage_24h: number
}

interface Description {
  es: string
  [key: string]: string
}

interface ImgaeValue {
  [key:string]: string
}

interface MarketValue {
  [key: string]: number
}

interface  MarketData{
  current_price: MarketValue
  market_cap: MarketValue
  price_change_percentage_24h: number
  price_change_24h: number
  high_24h: { [key: string]: number }
  low_24h: { [key: string]: number }
}


export interface CoinDetails {
  id: string
  symbol: string
  name: string
  description: Description
  image: ImgaeValue
  market_data: MarketData
}

export interface CoinMarketChart {
  prices : [number, number] []
  market_caps: [number, number][]
  total_volumes: [number, number][]
}