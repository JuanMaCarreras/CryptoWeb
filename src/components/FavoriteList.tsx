import { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { CoinDetails } from '@/types/Coins'
import { getUserFavorites } from '@/firebase/firestore'
import { getCoinById } from '@/service/api'
import { FavoriteCard } from './FavoriteCard'
import { useCryptoStore } from '@/store'



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

  console.log('coins',coins)

  return (
    <>
      <h2 className='text-2xl'>Fav List</h2>
      <FavoriteCard coins={coins} currency={currency}/>
    </>
  )
}
