import { formatMarketCap } from '@/utils/formatNum'
import type { CoinDetailProps } from '@/types/Coins'

type MarketDataProps = {
  coins: CoinDetailProps,
  currency: string
}

export function MarketData({coins, currency}: MarketDataProps) {
  return (
    <>
      <section className='flex flex-col gap-3 max-w-[23rem] px-5 py-2'>
        <p className='text-2xl'>Datos del Mercado</p>
        <div className='flex justify-between mb-3 border-b-2 border-lightGray pb-3 mt-5'>
          <span className='text-lg text-button'>Ranking</span>
          <span className='text-xl font-medium uppercase text-brightGreen'>#{coins?.market_cap_rank}</span>
        </div>
        <div className='flex justify-between mb-3 border-b-2 border-lightGray pb-3'>
          <span className='text-lg text-button'>Cap. del Mercado</span>
          <span className='text-xl font-medium uppercase'>{formatMarketCap(coins?.market_data.market_cap[currency])} {currency}</span>
        </div>

        <div className='flex justify-between mb-3 border-b-2 border-lightGray pb-3'>
          <span className='text-lg text-button'>Volumen (24H)</span>
          <span className='text-xl font-medium uppercase'> {formatMarketCap(coins?.market_data.total_volume[currency])} {currency}</span>
        </div>

        <div className='flex justify-between mb-3 border-b-2 border-lightGray pb-3'>
          <span className='text-lg text-button'>24H Máximo</span>
          <span className='text-xl font-medium uppercase'>${coins?.market_data.high_24h[currency].toLocaleString()} {currency}</span>
        </div>
        
        <div className='flex justify-between mb-3 border-b-2 border-lightGray pb-3'>
          <span className='text-lg text-button'>24H Minimo</span>
          <span className='text-xl font-medium uppercase'>${coins?.market_data.low_24h[currency].toLocaleString()} {currency}</span>
        </div>
      </section>
    </>
  )
}