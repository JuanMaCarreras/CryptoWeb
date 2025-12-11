import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'
import { CoinDetails } from '@/types/Coins'
import { useCryptoStore } from '@/store'

type FavoriteCardProps = {
  coin: CoinDetails
}

export function FavoriteCard({ coin }: FavoriteCardProps ) {
  const currency = useCryptoStore(state => state.currency)
  const priceColorClass =  coin.market_data.price_change_percentage_24h >= 0 ? 'text-positiveNum' : 'text-negativeNum'

  
  return (
    <>
      <Card
        key={coin.id}
        className='w-64 h-28 select-none border-button rounded-lg bg-darkGreen hover:bg-hoverGreen hover:border-brightGreen transition-colors duration-500'
      >
        <CardHeader className='p-3 flex flex-row items-center gap-2'>
          <img
            src={coin.image.small}
            alt={coin.name}
            className='w-7 h-7'
          />
          <CardDescription className='text-lg text-gray-400 font-medium pb-1'>
            {coin.name}
          </CardDescription>
          <CardDescription className='text-base font-semibold text-textGray pb-1'>
            {coin.symbol}
          </CardDescription>
        </CardHeader>

        <CardContent className='pb-42 flex flex-col gap-1'>
          <div className='flex items-center justify-between'>
            <p className='text-base text-white'>
              ${coin.market_data.current_price[currency]}
            </p>
            <p className={`text-sm font-semibold ${priceColorClass}`}>
              {coin.market_data.price_change_percentage_24h.toFixed(2)}% (24H)
            </p>
          </div>
        </CardContent>
      </Card>

    </>
  )
}
