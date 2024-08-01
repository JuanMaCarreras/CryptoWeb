import { useEffect, useState } from 'react'
import { useParams } from 'wouter'
import { CoinDetailsById  } from '../types/Coins'
import { getCoinById } from '../service/api'
import Chart from './Chart'

function CoinDetails() {
  const { coinId } = useParams<{coinId: string}>()
  const [coins, setCoins] = useState<CoinDetailsById>()

  useEffect(() =>{
    const fetchDetailById = async () => {
      try {
        const res = await getCoinById(coinId)
        console.log(res)
        setCoins(res)

      } catch (error) {
        console.log('fetch details data', error)
      }
    }
    fetchDetailById()

  },[coinId])

  return (
    <>
      <section className='text-white'>
        <h2>{coins?.name} {coins?.symbol}</h2>
        <Chart coinId={coinId}/>
      </section>
    </>
  )
}

export default CoinDetails