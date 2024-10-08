import { useEffect, useState } from 'react'
import { TitleDetailsSkeleton, DescDetailsSkeleton } from './LoadingSkeleton'
import { useParams } from 'wouter'
import { CoinDetailsById  } from '@/types/Coins'
import { getCoinById } from '@/service/api'
import Chart from './Chart'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCryptoStore } from "../store"

function CoinDetails() {

  const currency = useCryptoStore(state => state.currency)
  const { coinId } = useParams<{coinId: string}>()
  const [coins, setCoins] = useState<CoinDetailsById | null>( null)
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
      <Card className='bg-deepGreen my-8'>
        <CardHeader className='mb-5'>
            {
              loading ? <TitleDetailsSkeleton /> : (
                <CardTitle className='flex items-center mb-6'>
                  <img src={coins?.image.small} alt={coins?.name} className='mr-3 w-9 h-9'/> 
                  <h2 className='text-3xl'>{coins?.name}</h2> 
                  <span className='uppercase text-sm text-textGray ml-3 mt-2'>{coins?.symbol}</span>
                </CardTitle>
              )
            }
            {
              loading ? <DescDetailsSkeleton /> : (
                  <CardDescription className='flex justify-around'>
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
        </CardContent>    
        <CardFooter>
        </CardFooter>  
      </Card>    
    </>
  )
}

export default CoinDetails