import { Link } from 'wouter'
import img from '../assets/logo.png'

function NavBar() {
  return (
    <>
      <nav className='w-full flex justify-between items-center px-10  h-24 bg-darkGreen border-b-[1px] border-lightGray'>
        <Link to='/'>
          <div className='flex items-center'>
            <img 
              src={img} 
              alt='Lynx logo' 
              className='h-[4rem] w-[4.3rem] mr-1'
            />
            <span className='font-sinkia text-logoText text-3xl font-bold select-none '>LYNX</span>
          </div>
        </Link>
        <Link to='/description'>
          <button className='p-[6px] px-4 rounded-2xl font-semibold border-2 border-lightGreen text-brightGreen bg-semiDarkGreen hover:bg-brightGreen hover:border-brightGreen hover:text-black transition duration-500'>
            Información
          </button>
        </Link>
      </nav>
    </>
  )
}

export default NavBar