// export interface MarketCoins {
//   id: string
//   symbol: string
//   name: string
//   image: string
//   current_price: number
//   market_cap: number
//   market_cap_rank: number
//   total_volume: number
//   price_change_percentage_24h: number
//   market_cap_change_percentage_24h: number
// }

// interface Description {
//   es: string
//   [key: string]: string
// }

// interface ImgaeValue {
//   [key:string]: string
// }

// interface MarketValue {
//   [key: string]: number
// }

// interface  MarketData{
//   current_price: MarketValue
//   market_cap: MarketValue
//   price_change_percentage_24h: number
//   price_change_24h: number
//   total_volume: Record<string, number>
//   high_24h: { [key: string]: number }
//   low_24h: { [key: string]: number }
// }


// export interface CoinDetails {
//   id: string
//   market_cap_rank: number
//   symbol: string
//   name: string
//   description: Description
//   image: ImgaeValue
//   market_data: MarketData
// }

// export interface CoinDetailProps {
//   market_cap_rank: number
//   market_data: {
//     market_cap: Record<string, number>
//     total_volume: Record<string, number>
//     high_24h: Record<string, number>
//     low_24h: Record<string, number>
//   }
// }

// export interface CoinMarketChart {
//   prices : [number, number] []
//   market_caps: [number, number][]
//   total_volumes: [number, number][]
// }


// export interface ChartPoint {
//   date: number   // timestamp (ms)
//   price: number
// }


export type CurrencyMap = Record<string, number>

export interface MarketCoins {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  total_volume: number
  price_change_percentage_24h: number | null
  market_cap_change_percentage_24h: number
}

interface Description {
  [key: string]: string
}

interface ImageValue {
  thumb: string
  small: string
  large: string
}

export interface MarketData {
  current_price: CurrencyMap
  market_cap: CurrencyMap
  total_volume: CurrencyMap
  high_24h: CurrencyMap
  low_24h: CurrencyMap
  price_change_percentage_24h: number | null
  price_change_24h: number | null
}

export interface CoinDetails {
  id: string
  market_cap_rank: number
  symbol: string
  name: string
  description: Description
  image: ImageValue
  market_data: MarketData
}

export interface CoinMarketChart {
  prices: [number, number][]
  market_caps: [number, number][]
  total_volumes: [number, number][]
}

export interface ChartPoint {
  date: number
  price: number
}