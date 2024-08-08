import axios from 'axios'
import { MarketCoins, CoinMarketChart, CoinDetailsById  }  from '../types/Coins'
import { API_KEY } from '../_key'

const BASE_URL = 'https://api.coingecko.com/api/v3'


const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-type': 'application/json',
      'x-cg-demo-api-key': API_KEY 
    }   
})


export const getCoinMarket = async (perPage = 50): Promise<MarketCoins[]> => {
  const response = await api.get<MarketCoins[]>('/coins/markets', {
    params: {
      vs_currency: 'usd', // Moneda contra la que se comparan los precios
      per_page: perPage,
      page: 1
    },
  })
  return response.data
}

export const getCoinById = async (coinId: string): Promise<CoinDetailsById> => {
  const response = await api.get(`/coins/${coinId}`)
  return response.data
}


export const getCoinChartMarket = async ({coinId, currency}: { coinId: string; currency: string }): Promise<CoinMarketChart> => {
  const response = await api.get<CoinMarketChart>(`/coins/${coinId}/market_chart`, {
    params: {
      vs_currency: currency,
      days: 30
    }
  })
  return response.data
}