import { useEffect, useState } from 'react'
import { TitleDetailsSkeleton, DescDetailsSkeleton } from './LoadingSkeleton'
import { useParams } from 'wouter'
import type { CoinDetails } from '@/types/Coins'
import { getCoinById } from '@/service/api'
import { Chart } from './Chart'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCryptoStore } from "@/store"
import { AddToFavorite } from './favorite/AddToFavorite'


import { ChartPro } from './chart/ChartPro'


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
        setLoading(false)
        
      } catch (error) {
        console.log('fetch details data', error)
      }
    }
    fetchDetailById()

  },[coinId,currency])
  
  return (
    <>
      <Card className='bg-deepGreen my-8 mini:mt-16'>
        <CardHeader className='mb-5'>
            {
              loading ? <TitleDetailsSkeleton /> : (
                <CardTitle className='flex items-center mb-7 ml-5 mini:justify-center mini:mb-11 mini:mt-4'>

                  <img src={coins?.image.small} alt={coins?.name} className='ml-3 mr-2 w-9 h-9'/> 
                  <h2 className='text-3xl'>{coins?.name}</h2> 
                  <span className='uppercase text-sm text-textGray ml-3 mt-2'>{coins?.symbol}</span>
                  <AddToFavorite coinId={coinId}  className='text-[1.2rem] ml-6'/>
                
                </CardTitle>
              )
            }
            {
              loading ? <DescDetailsSkeleton /> : (
                  <CardDescription className='flex justify-around flex-wrap mini:flex-col mini:[&>dl]:mb-3 '>
                    <dl> 
                      <dt className='text-textGray font-semibold'>Precio Actual</dt>
                      <dd className='font-medium text-xl'>
                        ${coins?.market_data.current_price[currency].toLocaleString()}
                        <span className='uppercase mx-1'>{currency}</span>
                      </dd>
                    </dl>

                    <dl> 
                      <dt className='text-textGray font-semibold'>24H Máximo</dt>
                      <dd className='font-medium text-xl'>
                        ${coins?.market_data.high_24h[currency].toLocaleString()}
                        <span className='uppercase mx-1'>{currency}</span>
                      </dd>
                    </dl>

                    <dl> 
                      <dt className='text-textGray font-semibold'>24H Mínimo</dt>
                      <dd className='font-medium text-xl'>
                        ${coins?.market_data.low_24h[currency].toLocaleString()}
                        <span className='uppercase mx-1'>{currency}</span>
                      </dd>
                    </dl>
                    <dl> 
                      <dt className='text-textGray font-semibold'>Capitalización de Mercado</dt>
                      <dd className='font-medium text-xl'>
                        ${coins?.market_data.market_cap[currency].toLocaleString()}
                        <span className='uppercase mx-1'>{currency}</span>
                      </dd>
                    </dl>
                  </CardDescription>
                )
            } 
        </CardHeader>    
        <CardContent>  
          <Chart coinId={coinId} currency={currency}/>
          <ChartPro coinId={coinId} currency={currency}/>
        </CardContent>    
        <CardFooter>
        </CardFooter>  
      </Card>    
    </>
  )
}
