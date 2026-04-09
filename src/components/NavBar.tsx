import { Link, useLocation, useRoute } from 'wouter'
import logo from '@/assets/logo.png'
import { SearchBar } from './SearchBar'
import { CurrencySelect } from './currencySelector/CurrencySelect'
import { Button } from './ui/button'
import { useAuthStore } from '@/store'
import { Profile } from './auth/Profile'
import { MobileMenu } from './MobileMenu'
import { useMediaQuery } from '@/hook/useMediaQuery'


export function NavBar() {

  const { user } = useAuthStore()
  const [location] = useLocation()
  const [isNotFound] = useRoute('/:rest*')

  const isMobile = useMediaQuery('(max-width: 698px)')

  const isAuthPage = location === '/login' || location === '/sign-up' || location === '/reset-password'
  const isHomePage = location === '/'
  const isCoinPage = location.startsWith('/coin')
  const shouldHide = isAuthPage || isNotFound

  return (
    <>
      <nav className='fixed top-0 z-50 w-full flex justify-between items-center px-7 mini:px-3 h-[4.3rem]  bg-deepGreen border-b-[1px] border-lightGray'>
        <Link to='/'>
          <div className='flex items-center'>
            <img 
              src={logo} 
              alt='Lynx logo' 
              loading='lazy'
              className='h-[2rem] w-[2rem] mr-1 [@media(min-width:820px)]:w-[3rem] [@media(min-width:820px)]:h-[3rem]'
            />
            <span className='font-sinkia text-logoText text-2xl font-bold select-none [@media(max-width:890px)]:hidden'>LYNX</span>
          </div>
        </Link>

        <div className='flex items-center space-x-3'>
          {
            isHomePage && <SearchBar />
          }

          {
            isMobile ? <MobileMenu /> : (
            <div className='flex items-center space-x-6 mr-[1rem]'> 
              
              {
                (isHomePage || isCoinPage) && <CurrencySelect  variant='nav'/>
              }

              {
                !shouldHide && (
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
                  )
              }
            </div>)
          }
        </div>
      </nav>
    </>
  )
}