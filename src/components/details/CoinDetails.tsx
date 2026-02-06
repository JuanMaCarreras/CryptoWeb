import { useEffect, useState } from 'react'
import { TitleDetailsSkeleton } from '../LoadingSkeleton'
import { useParams } from 'wouter'
import type { CoinDetails } from '@/types/Coins'
import { getCoinById } from '@/service/api'
import { Chart } from '@/components/details/Chart'
import { useCryptoStore } from "@/store"
import { AddToFavorite } from '../favorite/AddToFavorite'



import { MarketData } from './MarketData'


export function CoinDetails() {

  const currency = useCryptoStore(state => state.currency)
  const { coinId } = useParams<{coinId: string}>()
  const [coins, setCoins] = useState<CoinDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    const fetchDetailById = async () => {
      try {
        const res = await getCoinById(coinId)
        setCoins(res)
        console.log('detail data', res)
        setLoading(false)
        
      } catch (error) {
        console.log('fetch details data', error)
      }
    }
    fetchDetailById()

  },[coinId,currency])

  
  return (
    <>
        <div className='mb-5'>
            {
              loading ? <TitleDetailsSkeleton /> : (
                <div className='flex items-center mb-7 mini:justify-center mini:mb-11 mini:mt-4'>

                  <img src={coins?.image.small} alt={coins?.name} className='ml-3 mr-3 w-9 h-9'/> 
                  <h2 className='text-3xl'>{coins?.name}</h2> 
                  <span className='uppercase text-sm text-textGray ml-3 mt-2'>{coins?.symbol}</span>
                  <AddToFavorite coinId={coinId}  className='text-[1.2rem] ml-6'/>
                
                </div>
              )
            }
        </div>    
        <div className='flex  border-2 border-negativeNum'>  
          {/* <Chart coinId={coinId} currency={currency}/> */}
          { coins && <MarketData coins={coins} currency={currency}/> }
        </div>   
    </>
  )
  
  
}
