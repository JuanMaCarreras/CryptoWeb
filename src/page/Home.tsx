import { FavoriteList } from "@/components/favorite/FavoriteList"
import { Cryptocurrency } from '@/components/Cryptocurrency'
import { useUser } from "@clerk/clerk-react"

export function Home() {

  const { user } = useUser()

  return (
    <>
      <div className='min-h-[200px]'>
        {
          user && <FavoriteList />
        }
      </div>
      <Cryptocurrency />
    </>
  )
}
