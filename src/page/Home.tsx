import { FavoriteList } from "@/components/favorite/FavoriteList"
import { Cryptocurrency } from '@/components/Cryptocurrency'
import { useAuthStore } from "@/store"

export function Home() {

  const { user } = useAuthStore()
  return (
    <>
      {/* <div className='min-h-[200px]'>
        {
          user && <FavoriteList />
        }
      </div> */}
      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${user ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="pt-4">
          <FavoriteList />
        </div>
      </div>

      <Cryptocurrency />
    </>
  )
}
