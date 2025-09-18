import { FavoriteList } from "@/components/favorite/FavoriteList"
import { Cryptocurrency } from '@/components/Cryptocurrency'
import { useAuthStore } from "@/store"

export function Home() {

  const { user } = useAuthStore()
  console.log('user home',user)

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
