// components/CoinsRow.tsx
import { memo } from 'react'
import { MarketCoins } from '@/types/Coins'
import { Link } from 'wouter'
import { TableCell, TableRow } from '@/components/ui/table'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { AddToFavorite } from '@/components/favorite/AddToFavorite'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useAuthStore } from '@/store'

interface CoinsRowProps {
  coin: MarketCoins
  index: number
}

export const CoinsRow = memo(function CoinsRow({ coin, index }: CoinsRowProps) {
  const { user } = useAuthStore()

  const isPricePositive = (coin.price_change_percentage_24h ?? 0) >= 0
  const priceColorClass = isPricePositive ? 'text-positiveNum' : 'text-negativeNum'
  const tableColor = index % 2 === 0 ? 'bg-deepGray' : 'bg-darkGray'


  const cellTextClass = 'text-[.9rem] font-medium'

  return (
    <TableRow className={`text-sm ${tableColor}`}>
      
      {
        user && (
          <TableCell className='text-center'>
            <AddToFavorite coinId={coin.id} />
          </TableCell>)
      }
      
      <TableCell className='text-center'>
        {coin.market_cap_rank}
      </TableCell>

      <TableCell className='flex mini:ml-[-.8rem]'>
        <img 
          src={coin.image} 
          alt={`${coin.name} logo`}
          className='mr-4 w-7 h-7 mt-1 mini:mr-3'
          loading='lazy'
          width={28}
          height={28}
        />
        <div className='[&>span]:block'>
          <span className='text-[1rem] font-medium'>{coin.name}</span>
          <span className='text-xs uppercase text-textGray font-medium'>
            {coin.symbol}
          </span>
        </div>
      </TableCell>

      <TableCell className={`text-right ${cellTextClass}`}>
        ${coin.current_price.toLocaleString()}
      </TableCell>

      <TableCell className={`mini:hidden text-right ${cellTextClass} ${priceColorClass}`}>
        {coin.price_change_percentage_24h?.toFixed(2) ?? '0.00'}%
      </TableCell>

      <TableCell className={`mini:hidden text-center ${cellTextClass}`}>
        ${coin.market_cap.toLocaleString()}
      </TableCell>

      <TableCell className={`mini:hidden text-center ${cellTextClass}`}>
        {coin.high_24h?.toLocaleString()}
      </TableCell>
      
      <TableCell className={`mini:hidden text-center ${cellTextClass}`}>
        {coin.low_24h?.toLocaleString()}
      </TableCell>
      
      <TableCell>
        <Tooltip>
          <Link to={`/coin/${coin.id}`}>
            <TooltipTrigger 
              className='my-1'
              aria-label={`Ver detalles de ${coin.name}`}
            >
              <HiOutlineExternalLink 
                className='h-5 w-5 text-textGray hover:text-brightGreen transition duration-500'
              />
            </TooltipTrigger>
          </Link>

          <TooltipContent className='bg-lightGray my-1'>
            <p className='text-xs font-medium'>Más detalles</p>
          </TooltipContent>
        </Tooltip>
      </TableCell>
    </TableRow>
  )
})