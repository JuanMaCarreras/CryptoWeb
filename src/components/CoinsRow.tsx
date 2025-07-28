import { MarketCoins } from '@/types/Coins'
import { Link } from 'wouter'
import {
  TableCell,
  TableRow,
} from '@/components/ui/table'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { AddToFavorite } from './AddToFavorite'
import { useUser } from '@clerk/clerk-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface CoinProp {
  coin: MarketCoins
  index: number
}


export function CoinsRow({coin, index}: CoinProp) {

  const priceColorClass =  coin.price_change_percentage_24h >= 0 ? 'text-positiveNum' : 'text-negativeNum'
  const tableColor = index % 2 === 0 ? 'bg-deepGray' : 'bg-darkGray'

  const { user } = useUser()

  return (
    <>
      <TableRow className={`text-sm ${tableColor}`}>
        {
          user && (
          <TableCell className='text-center'>
            <AddToFavorite coinId={coin.id} />
          </TableCell>)
        }
        
        <TableCell className='text-center' >
          {coin.market_cap_rank}
        </TableCell>

        <TableCell className='flex mini:ml-[-.8rem]'>
          <img 
            src={coin.image} 
            alt={coin.name} 
            className='mr-4 w-7 h-7 mt-1 mini:mr-3'
          />
          <div className='[&>span]:block'>
            <span className='text-[1rem] font-medium'>{coin.name}</span>
            <span className='text-xs uppercase text-textGray font-medium'>{coin.symbol}</span>
          </div>
        </TableCell>

        <TableCell className='text-right'>${coin.current_price.toLocaleString()}</TableCell>
        <TableCell className={` mini:hidden text-right ${priceColorClass}`}>{coin.price_change_percentage_24h.toFixed(2)}%</TableCell>
        <TableCell className=' mini:hidden text-center'>${coin.market_cap.toLocaleString()}</TableCell>
        
        <TableCell>
          <Tooltip>
            <Link to={`/coin/${coin.id}`} >
              <TooltipTrigger className='my-1'>
                <HiOutlineExternalLink className='h-5 w-5 text-textGray hover:text-brightGreen transition duration-500'/>
              </TooltipTrigger>
            </Link>

            <TooltipContent className='bg-lightGray my-1'>
              <p className='text-xs font-medium'>Más detalles</p>
            </TooltipContent>
          </Tooltip>

        </TableCell>
      </TableRow>  
    </>
  )
}
