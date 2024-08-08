import { MarketCoins } from '../types/Coins'
import {
  TableCell,
  TableRow,
} from "@/components/ui/table"

interface CoinProp {
  coin: MarketCoins
  index: number
}


function CoinsRow({coin, index}: CoinProp) {

  const priceColorClass =  coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
  const tableColor = index % 2 === 0 ? 'bg-deepGray' : 'bg-darkGray'

  return (
    <>
      <TableRow className={`text-sm [&_td]:p-4 ${tableColor}`}>
        <TableCell className="text-center" >
          {coin.market_cap_rank}
        </TableCell>

        <TableCell className='flex'>
          <img 
            src={coin.image} 
            alt={coin.name} 
            className='mr-4 w-7 h-7'
          />
          <div className='[&>span]:block'>
            <span className='text-[1rem] font-medium'>{coin.name}</span>
            <span className='text-xs uppercase text-textGray font-medium'>{coin.symbol}</span>
          </div>
        </TableCell>

        <TableCell className="text-right">${coin.current_price.toLocaleString()}</TableCell>
        <TableCell className={`text-right ${priceColorClass}`}>{coin.price_change_percentage_24h.toFixed(2)}%</TableCell>
        <TableCell className="text-center">${coin.market_cap.toLocaleString()}</TableCell>
      </TableRow>  
    </>
  )
}

export default CoinsRow