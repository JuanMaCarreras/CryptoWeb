import { Link, useLocation } from 'wouter'
import logo from '@/assets/logo.png'
import { SearchBar } from './SearchBar'
import { CurrencySelect } from './CurrencySelect'
import { Button } from './ui/button'
import { useAuthStore } from '@/store'
import { Profile } from './auth/Profile'

export function NavBar() {

  const { user } = useAuthStore()
  const [location] = useLocation()
  

  return (
    <>
      <nav className='fixed top-0 z-50 w-full flex justify-between items-center px-7 mini:px-3 h-[4.3rem]  bg-deepGreen border-b-[1px] border-lightGray'>
        <Link to='/'>
          <div className='flex items-center'>
            <img 
              src={logo} 
              alt='Lynx logo' 
              className='h-[2.8rem] w-[3rem] mr-1 mini:w-[3.3rem] mini:h-[3rem]'
            />
            <span className='font-sinkia text-logoText text-2xl font-bold select-none '>LYNX</span>
          </div>
        </Link>

        <div className='flex items-center space-x-6 mini:space-x-0 mr-[1rem]'> 
          {
            location == '/' && <SearchBar />
          }
          {
            (location == '/' || location.startsWith('/coin')) && <CurrencySelect />
          }

          {
            user ? <Profile /> : (
            <div className='flex gap-2'>
              <Link to='/sign-up'>
                <Button className='bg-semiDarkGreen hover:bg-SemiGreen text-white text-[1rem] font-medium py-2 px-4 transition-colors duration-700'>
                  Registrarse
                </Button>
              </Link>
              <Link to='/login'>
                <Button className='bg-buttonGreen hover:bg-SemiGreen  text-white text-[1rem] font-medium py-2 px-4 transition-colors duration-700'>
                  Iniciar Sesión
                </Button>
              </Link>
            </div>)
          }
        </div>
      </nav>
    </>
  )
}