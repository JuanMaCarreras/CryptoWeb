import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'wouter'
import { CurrencySelect } from './currencySelector/CurrencySelect'
import { useLocation } from 'wouter'

export function MobileMenu() {

  const [location] = useLocation()
  const isCoinPage = location === '/' || location === '/coin/:coinId' || location === '/description'


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' className='border-lightGray w-[3.1rem] h-[2rem]'><IoMenu /></Button>
      </SheetTrigger>
      <SheetContent className='bg-deepGreen border-lightGray'>
        <SheetHeader className='flex items-left mb-10 '>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Registrate o inicia sesión para acceder a tu perfil y a tus favoritos 
          </SheetDescription>
        </SheetHeader>
        <div className='flex flex-col items-center justify-center gap-6 border-t-2 border-lightGray pt-10'>
          {
            isCoinPage && (
            <div className='flex flex-col items-center justify-center w-full gap-4 my-3 pb-12 [@media(min-width:420px)]:flex-row border-b-2 border-lightGray'>
              <CurrencySelect variant='sheet'/> 
            </div>)
          }
          <div className='flex flex-col [@media(min-width:420px)]:flex-row gap-2 justify-center items-center'>
            <SheetClose asChild>
              <Link to='/sign-up'>
                <Button className='bg-semiDarkGreen hover:bg-SemiGreen text-white text-[1rem] font-medium py-5 px-6 transition-colors duration-700'>
                  Registrarse
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to='/login'>
                <Button className='bg-buttonGreen hover:bg-SemiGreen hover:border-textGray text-white text-[1rem] font-medium py-2 px-4 transition-colors duration-700'>
                  Iniciar Sesión
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
