import { useEffect, useState } from 'react'
import { FavoriteCardSkeleton } from '../LoadingSkeleton'
import { CoinDetails } from '@/types/Coins'
import { getCoinById } from '@/service/api'
import { FavoriteCard } from './FavoriteCard'
import { Link } from 'wouter'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useAuthStore } from '@/store'
import { useFavoritesListener } from '@/hook/useFavoritesListener'



export function FavoriteList() {
  const { user } = useAuthStore()
  const favorites = useFavoritesListener(user?.uid)
  const [coins, setCoins] = useState<CoinDetails[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCoins = async () => {
      if (favorites.length > 0) {
        const details = await Promise.all(
          favorites.map((coinId) => getCoinById(coinId))
        )
        setCoins(details)
        setLoading(false)
      } else {
        setCoins([])

      }
    }

    fetchCoins()

  }, [favorites])

  return (
    <section>
      <h2 className='text-xl ml-10'>Favoritos</h2>

      <div className='flex flex-row justify-center gap-2 mb-20 mt-4'>
        <Carousel className='w-full max-w-6xl'>
          <CarouselContent>
            { 
              loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <CarouselItem key={index} className='basis-1/4'>
                    <FavoriteCardSkeleton />
                  </CarouselItem>
                ))
              ) : (
                coins.map((coin, index) => (
                  <CarouselItem key={index} className='basis-1/4'>
                    <Link to={`/coin/${coin.id}`}>
                      <FavoriteCard coin={coin} />
                    </Link>
                  </CarouselItem>
                ))
              )
            }
          </CarouselContent>
          <CarouselPrevious className='hover:border-brightGreen hover:border-[.1rem] hover:bg-SemiGreen border-[.1rem] border-lightGray rounded-full transition-colors duration-500' />
          <CarouselNext className='hover:border-brightGreen hover:border-[.1rem] hover:bg-SemiGreen border-[.1rem] border-lightGray rounded-full transition-colors duration-500' />
        </Carousel>
      </div>
    </section>
  )
}