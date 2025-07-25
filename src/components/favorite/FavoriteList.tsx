import { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { CoinDetails } from '@/types/Coins'
import { getUserFavorites } from '@/firebase/firestore'
import { getCoinById } from '@/service/api'
import { FavoriteCard } from './FavoriteCard'
import { useCryptoStore } from '@/store'
import { Link } from 'wouter'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export function FavoriteList() {

  const { user } = useUser()
  const [coins, setCoins] = useState<CoinDetails[]>([])
  const currency = useCryptoStore(state => state.currency)
  
  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        const favs = await getUserFavorites(user.id)
        
        const details = await Promise.all(
          favs.map((coinId: string) => getCoinById(coinId))
        )
        
        setCoins(details)
      }
    }

    fetchFavorites()
    
  }, [user, currency])

  return (
    <>
      <h2 className='text-xl ml-10'>Favoritos</h2>
      <section className='flex flex-row justify-center gap-4 mb-20 mt-4'>
        <Carousel>
          <CarouselContent>
            {
              coins.map((coin, index) => (
                <CarouselItem key={index} className='basis-1/3'>
                  <Link to={`/coin/${coin.id}`} >
                    <FavoriteCard coin={coin} currency={currency} />
                  </Link>
                </CarouselItem>
              ))
            }
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        
        </Carousel>
      </section>
    </>
  )
}
