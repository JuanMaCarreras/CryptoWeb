import { useParams } from 'wouter'
import type { CoinDetails } from '@/types/Coins'
import { Chart } from '@/components/details/Chart'
import { useCryptoStore } from '@/store'
import { MarketData } from './MarketData'
import { Card } from '../ui/card'
import { CoinDetailsHeader } from './CoinDetailsHeader'
import { useCoinDetails } from '@/hook/useCoinDetails'
import { Spinner } from '../ui/spinner'


export function CoinDetails() {

  const currency = useCryptoStore(state => state.currency)
  const { coinId } = useParams<{coinId: string}>()
  const { coins, loading } = useCoinDetails(coinId)

  if(loading) return <Spinner className='size-20' />

  return (
    <section className='w-full flex justify-center my-5'>
      <Card className='w-full pb-9 overflow-hidden'>
        <div className='flex flex-col [@media(min-width:820px)]:flex-row'>
          <div className='flex flex-col gap-11 mb-6 [@media(min-width:820px)]:mb-14 w-full [@media(min-width:820px)]:flex-1 min-w-0'>
            <CoinDetailsHeader loading={loading} coins={coins} coinId={coinId}/>
            <div className='w-full h-[25rem] pl-10'>
              <Chart coinId={coinId} currency={currency} />
            </div>
          </div>

          {coins && <MarketData coins={coins} />}
        </div>
      </Card>
    </section>
  )
}