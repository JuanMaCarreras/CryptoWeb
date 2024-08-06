import { useEffect, useState } from 'react'
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

interface Prop {
  currency: string
}


function CoinDetails({currency}:Prop) {

  const { coinId } = useParams<{coinId: string}>()
  const [coins, setCoins] = useState<CoinDetailsById>()

  useEffect(() =>{
    const fetchDetailById = async () => {
      try {
        const res = await getCoinById(coinId)
        setCoins(res)

      } catch (error) {
        console.log('fetch details data', error)
      }
    }
    fetchDetailById()

  },[coinId])

  
  return (
    <>
      <Card className='text-white bg-verdeOscuro'>
        <CardHeader className='mb-4'>
          <CardTitle className='flex items-center mb-5'>
            <img src={coins?.image.small} alt={coins?.name} className='mr-3 w-9 h-9'/> 
            <h2 className='text-3xl'>{coins?.name}</h2> 
            <span className='uppercase text-sm text-grisLetras ml-3'>{coins?.symbol}</span>
          </CardTitle>
          <CardDescription className='flex justify-around'>
           <dl> 
            <dt className='text-grisLetras font-semibold'>Precio Actual</dt>
            <dd className='font-medium text-xl'>${coins?.market_data.current_price.currency}</dd>
           </dl>

           <dl> 
            <dt className='text-grisLetras font-semibold'>24H Máximo</dt>
            <dd className='font-medium text-xl'>${coins?.market_data.high_24h.currency}</dd>
           </dl>

           <dl> 
            <dt className='text-grisLetras font-semibold'>24H Mínimo</dt>
            <dd className='font-medium text-xl'>${coins?.market_data.low_24h.currency}</dd>
           </dl>
           <dl> 
            <dt className='text-grisLetras font-semibold'>Capitalización de Mercado</dt>
            <dd className='font-medium text-xl'>${coins?.market_data.market_cap.currency}</dd>
           </dl>
          </CardDescription>
        </CardHeader>    
        <CardContent>  
          <Chart coinId={coinId}/>
        </CardContent>    
        <CardFooter>
        </CardFooter>  
      </Card>    
    </>
  )
}

export default CoinDetails