import { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { addCoinToFavorites, deleteCoinFromFavorites, getUserFavorites } from '@/firebase/firestore'

interface Prop {
  coinId: string
}

export function AddToFavorite({ coinId }: Prop ) {
  
  const { user } = useUser()

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const check = async () => {

      if (user) {
        const favs = await getUserFavorites(user.id)
        setIsFavorite(favs.includes(coinId))
      }
    }
    
    check()
  
  }, [user, coinId])

  const toggleFav = async () => {
    if (!user) return;

    if (isFavorite) {

      await deleteCoinFromFavorites(user.id, coinId)
    } else {
      
      await addCoinToFavorites(user.id, coinId)
    }
   
    setIsFavorite(!isFavorite)
  
  }
  
  
  
  return (
    <>
      <button
        onClick={toggleFav}
      >
        {
          isFavorite ? "💔 Quitar de Favoritos" : "⭐ Favoritos"
        }
      </button>
    </>
  )
}
