import { Link, useLocation } from 'wouter'
import logo from '@/assets/logo.png'
import SearchBar from './SearchBar'
import CurrencySelect from './CurrencySelect'

function NavBar() {

  const [location] = useLocation()



  return (
    <>
      <nav className='fixed top-0 z-50 w-full flex justify-between items-center px-10  h-20 bg-darkGreen border-b-[1px] border-lightGray'>
        <Link to='/'>
          <div className='flex items-center'>
            <img 
              src={logo} 
              alt='Lynx logo' 
              className='h-[2.8rem] w-[3rem] mr-1'
            />
            <span className='font-sinkia text-logoText text-2xl font-bold select-none '>LYNX</span>
          </div>
        </Link>

        <div className='flex items-center space-x-8 mr-[2rem]'> 
          {
            location == '/' && <SearchBar />
          }
          {/* <SearchBar /> */}
          <CurrencySelect />
        </div>
      </nav>
    </>
  )
}

export default NavBar