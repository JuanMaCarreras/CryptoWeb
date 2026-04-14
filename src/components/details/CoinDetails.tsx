// import { useParams } from 'wouter'
// import type { CoinDetails } from '@/types/Coins'
// import { useCryptoStore } from '@/store'
// import { Card } from '../ui/card'
// import { CoinDetailsHeader } from './CoinDetailsHeader'
// import { useCoinDetails } from '@/hook/useCoinDetails'
// import { Spinner } from '../ui/spinner'
// import { lazy, Suspense } from 'react'

// const Chart = lazy(() => import('@/components/details/Chart'))
// const MarketData = lazy(() => import('@/components/details/MarketData'))

// export function CoinDetails() {


//   const currency = useCryptoStore(state => state.currency)
//   const { coinId } = useParams<{coinId: string}>()
//   const { coins, loading } = useCoinDetails(coinId)


//   if(loading) return <Spinner className='size-20' />

//   return (
//     <section className='w-full flex justify-center my-5'>
//       <Card className='w-full pb-9 overflow-hidden'>
//         <div className='flex flex-col [@media(min-width:820px)]:flex-row'>
//           <div className='flex flex-col gap-11 mb-6 [@media(min-width:820px)]:mb-14 w-full [@media(min-width:820px)]:flex-1 min-w-0'>
//             <CoinDetailsHeader loading={loading} coins={coins} coinId={coinId}/>
//             <div className='w-full h-[25rem] pl-10'>
//               <Suspense fallback={<Spinner className='size-20' />}>
//                 <Chart coinId={coinId} currency={currency} />
//               </Suspense>
//             </div>
//           </div>

//           {
//             coins && 
//             <Suspense fallback={<Spinner className='size-20' />}>
//               <MarketData coins={coins} />
//             </Suspense>
//           }
//         </div>
//       </Card>
//     </section>
//   )
// }

import { lazy, Suspense } from 'react'
import { useParams, useLocation } from 'wouter'
import { useCryptoStore } from '@/store'
import { useCoinDetails } from '@/hook/useCoinDetails'
import { Card } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'
import { CoinDetailsHeader } from '@/components/details/CoinDetailsHeader'

const Chart = lazy(() => import('@/components/details/Chart'))
const MarketData = lazy(() => import('@/components/details/MarketData'))

export default function CoinDetails() {
  const currency = useCryptoStore(state => state.currency)
  const { coinId } = useParams<{ coinId: string }>()
  const [, setLocation] = useLocation()
  const { coins, loading, error } = useCoinDetails(coinId)

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner className='size-20' />
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen p-4'>
        <h2 className='text-2xl font-bold mb-4'>Error al cargar</h2>
        <p className='text-gray-600 mb-6'>
          No se pudo cargar la información de esta moneda
        </p>
        <div className='flex gap-4'>
          <button 
            onClick={() => setLocation('/')}
            className='px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600'
          >
            Volver al inicio
          </button>
          <button 
            onClick={() => window.location.reload()}
            className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  if (!coins) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen p-4'>
        <p className='text-xl mb-4'>Moneda no encontrada</p>
        <button 
          onClick={() => setLocation('/')}
          className='px-6 py-3 bg-blue-500 text-white rounded-lg'
        >
          Volver al inicio
        </button>
      </div>
    )
  }

  return (
    <section className='w-full flex justify-center my-5'>
      <Card className='w-full pb-9 overflow-hidden'>
        <div className='flex flex-col [@media(min-width:820px)]:flex-row'>
          
          <div className='flex flex-col gap-11 mb-6 [@media(min-width:820px)]:mb-14 w-full [@media(min-width:820px)]:flex-1 min-w-0'>
            <CoinDetailsHeader 
              loading={false}
              coins={coins} 
              coinId={coinId}
            />
            
            <div className='w-full h-[25rem] pl-10 pr-7 [@media(max-width:870px)]:px-2'>
              <Suspense fallback={
                <div className='flex justify-center items-center h-full'>
                  <Spinner className='size-20' />
                </div>
              }>
                <Chart coinId={coinId ?? ''} currency={currency} />
              </Suspense>
            </div>
          </div>

          <Suspense fallback={
            <div className='flex justify-center items-center p-8'>
              <Spinner className='size-20' />
            </div>
          }>
            <MarketData coins={coins} />
          </Suspense>
          
        </div>
      </Card>
    </section>
  )
}