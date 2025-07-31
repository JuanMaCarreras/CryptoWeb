import { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { addCoinToFavorites, deleteCoinFromFavorites, getUserFavorites } from '@/firebase/firestore'
import { ImStarFull, ImStarEmpty  } from 'react-icons/im'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface Prop {
  coinId: string
  className?: string
}

export function AddToFavorite({ coinId, className }: Prop ) {
  
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
      {  
        user && ( 
          <Tooltip>
            <TooltipTrigger>
              <button
                onClick={toggleFav}
              >
                {
                  isFavorite ? <ImStarFull className={`text-base ${className}`}/> : <ImStarEmpty  className={`text-base ${className}`}/>
                }
              </button>
            </TooltipTrigger>
            {
              isFavorite ? (
                <TooltipContent className='bg-lightGray my-1'>
                  <p className='text-xs font-medium'>Quitar de Favoritos</p>
                </TooltipContent>
              ) : (
                <TooltipContent className='bg-lightGray my-1'>
                  <p className='text-xs font-medium'>Añadir a Favoritos</p>
                </TooltipContent>
              )
            }
          </Tooltip>)
      }
    </>
  )
}
