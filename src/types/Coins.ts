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

export interface CoinMarketChart {
    prices : [number, number] []
    market_caps: [number, number][]
    total_volumes: [number, number][]
}

