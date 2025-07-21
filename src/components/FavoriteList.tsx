import { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { FavCoins } from '@/types/Coins'
import { getUserFavorites } from '@/firebase/firestore'
import { getCoinById } from '@/service/api'

export function FavoriteList() {

  const { user } = useUser()
  const [coins, setCoins] = useState<FavCoins[]>([])
  
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
    
  }, [user])

  console.log('coins',coins)

  return (
    <>
      <h1 className='text-2xl'>FAV LIST</h1>
      {
        coins.map(coin => (
          <div key={coin.id}>
            <h4>{coin.name}</h4>
            <p>{coin.symbol}</p>
          </div>
        ))
      }
    </>
  )
}
