import { formatMarketCap } from '@/utils/formatNum'
import type { CoinDetails } from '@/types/Coins'

type MarketDataProps = {
  coins: CoinDetails,
  currency: string
}

function MarketRow({title, value, highlight}: {title: string, value: string, highlight?: boolean}) {
  return (
    <div className='flex justify-between mb-3 border-b-2 border-lightGray pb-3'>
      <span className='text-lg text-button'>{title}</span>
      <span className={`text-xl font-medium uppercase ${highlight ? 'text-brightGreen' : ''}`}>
        {value}
      </span>
    </div>
  )
}


export function MarketData({coins, currency}: MarketDataProps) {
  const { market_cap_rank, market_data } = coins

  const marketItems = [
    { title: 'Ranking', value: `#${market_cap_rank}`, highlight: true },
    { title: 'Cap. del Mercado', value: `${formatMarketCap(market_data.market_cap[currency])} ${currency}` },
    { title: 'Volumen (24H)', value: `${formatMarketCap(market_data.total_volume[currency])} ${currency}` },
    { title: '24H Máximo', value: `$${market_data.high_24h[currency].toLocaleString()} ${currency}` },
    { title: '24H Mínimo', value: `$${market_data.low_24h[currency].toLocaleString()} ${currency}` }
  ]

  return (
    <>
      <section className='flex flex-col gap-3 w-[25rem] min-x-[20rem] p-5 mx-10 border-2 border-negativeNum'>
        <p className='text-2xl mb-5'>Datos del Mercado</p>
        {
          marketItems.map((item, index) => (
          <MarketRow key={index} {...item} />))
        }
      </section>
    </>
  )
}