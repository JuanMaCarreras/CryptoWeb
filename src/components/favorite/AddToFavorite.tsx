import { useEffect, useState } from 'react'
import { addCoinToFavorites, deleteCoinFromFavorites, getUserFavorites } from '@/firebase/firestore'
import { ImStarFull, ImStarEmpty  } from 'react-icons/im'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useAuthStore } from '@/store'
import { Spinner } from '@/components/ui/spinner'

interface Prop {
  coinId: string
  className?: string
}

export function AddToFavorite({ coinId, className }: Prop ) {
  const { user } = useAuthStore()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const check = async () => {
      if (user) {
        const favs = await getUserFavorites(user.uid)
        setIsFavorite(favs.includes(coinId))
      }
    }
    check()
  }, [user, coinId])

  const toggleFav = async () => {
    if (!user) return;
    
    setIsLoading(true)
    try {
      if (isFavorite) {
        await deleteCoinFromFavorites(user?.uid, coinId)
      } else {
        await addCoinToFavorites(user?.uid, coinId)
      }
      setIsFavorite(!isFavorite)
    } catch (error) {
      console.error('Error toggling favorite:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>
      {  
        user && ( 
          <Tooltip>
            <TooltipTrigger>
              <button
                onClick={toggleFav}
                disabled={isLoading}
              >
                {
                  isLoading ? (
                    <Spinner />
                  ) : (
                    isFavorite ? 
                      <ImStarFull className={`text-base text-brightGreen ${className}`}/> : 
                      <ImStarEmpty className={`text-base ${className}`}/>
                  )
                }
              </button>
            </TooltipTrigger>
            {
              !isLoading && (
                isFavorite ? (
                  <TooltipContent className='bg-lightGray my-1'>
                    <p className='text-xs font-medium'>Quitar de Favoritos</p>
                  </TooltipContent>
                ) : (
                  <TooltipContent className='bg-lightGray my-1'>
                    <p className='text-xs font-medium'>Añadir a Favoritos</p>
                  </TooltipContent>
                )
              )
            }
          </Tooltip>)
      }
    </>
  )
}
