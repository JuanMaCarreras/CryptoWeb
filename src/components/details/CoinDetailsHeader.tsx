import { AddToFavorite } from '../favorite/AddToFavorite'
import type { CoinDetails } from '@/types/Coins'
import { useCryptoStore } from '@/store'
import { TitleDetailsSkeleton } from '../LoadingSkeleton'

export function CoinDetailsHeader({ loading, coins, coinId}: {loading: boolean, coins: CoinDetails | null, coinId: string}) {
  
  const currency = useCryptoStore(state => state.currency)
  return (
    <>
      {
        loading ? <TitleDetailsSkeleton /> : (
          <div className=' ml-5'>
            <div className='flex items-center mt-9 ml-3'>

              <img src={coins?.image.large} alt={coins?.name} className='ml-3 mr-3 size-12'/> 
              <h2 className='text-2xl font-bold text-button'>{coins?.name}</h2> 
              <span className='uppercase text-lg text-textGray ml-2 mt-1'>{coins?.symbol}</span>
              <AddToFavorite coinId={coinId}  className='text-[1.2rem] ml-3 mt-3'/>
                  
            </div>
            <div className='flex items-center gap-5 flex-wrap ml-10 mt-6'>
              <span className='text-4xl font-bold'>
                ${coins?.market_data.current_price[currency].toLocaleString()}
              </span>

              <span
                className={`text-lg font-medium ${
                  coins?.market_data.price_change_percentage_24h && coins?.market_data.price_change_percentage_24h > 0
                    ? 'text-positiveNum'
                    : 'text-negativeNum'
                }`}
              >
                {coins?.market_data.price_change_percentage_24h?.toFixed(2)}%
              </span>
              </div>
          </div>
        )
      }
    </>
  )
}

