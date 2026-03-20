import { useParams } from 'wouter'
import type { CoinDetails } from '@/types/Coins'
import { useCryptoStore } from '@/store'
import { Card } from '../ui/card'
import { CoinDetailsHeader } from './CoinDetailsHeader'
import { useCoinDetails } from '@/hook/useCoinDetails'
import { Spinner } from '../ui/spinner'
import { lazy, Suspense } from 'react'

const Chart = lazy(() => import('@/components/details/Chart'))
const MarketData = lazy(() => import('@/components/details/MarketData'))

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
              <Suspense fallback={<Spinner className='size-20' />}>
                <Chart coinId={coinId} currency={currency} />
              </Suspense>
            </div>
          </div>

          {
            coins && 
            <Suspense fallback={<Spinner className='size-20' />}>
              <MarketData coins={coins} />
            </Suspense>
          }
        </div>
      </Card>
    </section>
  )
}