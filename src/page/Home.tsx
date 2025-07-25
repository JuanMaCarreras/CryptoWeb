import { FavoriteList } from "@/components/favorite/FavoriteList"
import { Cryptocurrency } from '@/components/Cryptocurrency'
import { useUser } from "@clerk/clerk-react"

export function Home() {

  const { user } = useUser()

  return (
    <>
      {
        user ? (<FavoriteList />) 
        : ( <div className='h-52' />  )
      }
      <Cryptocurrency />
    </>
  )
}
