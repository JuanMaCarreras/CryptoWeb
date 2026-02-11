import { useParams } from 'wouter'
import type { CoinDetails } from '@/types/Coins'
import { Chart } from '@/components/details/Chart'
import { useCryptoStore } from '@/store'
import { MarketData } from './MarketData'
import { Card } from '../ui/card'
import { CoinDetailsHeader } from './CoinDetailsHeader'
import { useCoinDetails } from '@/hooks/useCoinDetails'

export function CoinDetails() {

  const currency = useCryptoStore(state => state.currency)
  const { coinId } = useParams<{coinId: string}>()
  const { coins, loading, error } = useCoinDetails(coinId)

  console.log('coin error', error)

  return (
    <Card className='my-6 '>
      <div className='flex '>
        <div className='flex flex-col gap-11 mb-14'>
          <CoinDetailsHeader loading={loading} coins={coins} coinId={coinId}/>
          <Chart coinId={coinId} currency={currency} />
        </div>
        { coins && <MarketData coins={coins} /> }
      </div>
    </Card>
  )
}