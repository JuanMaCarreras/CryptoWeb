import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CoinDetails } from '@/types/Coins'


type FavoriteCardProps = {
  coin: CoinDetails
  currency: string
}



export function FavoriteCard({ coin, currency }:FavoriteCardProps ) {
  const priceColorClass =  coin.market_data.price_change_percentage_24h >= 0 ? 'text-positiveNum' : 'text-negativeNum'

  
  return (
    <>
      <Card 
        key={coin.id}
        className='w-full max-w-md flex flex-row items-center justify-between gap-10 p-2 border-lightGray bg-darkGreen  hover:bg-hoverGreen transition-colors duration-700'>
          
        <CardHeader>
          <CardTitle className='flex flex-col items-end gap-2'>
            <div className='flex items-center gap-2'>
            <img 
              src={coin.image.small} 
              alt={coin.name} 
              className='w-6 h-6'
            />
            <p className='text-lg uppercase  text-textGray font-medium'>{coin.symbol}</p>
          </div>
          </CardTitle>
          <CardDescription>
            <p className='text-sm'>{coin.name}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col items-items-start'>
          <p className={`text-sm font-semibold ${priceColorClass}`}>{coin.market_data.price_change_percentage_24h.toFixed(2)}% (24H)</p>
          <p className='text-lg'>${coin.market_data.current_price[currency]}</p>
        </CardContent>
      </Card> 
    </>
  )
}
