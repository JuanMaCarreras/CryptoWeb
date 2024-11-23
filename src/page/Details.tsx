import CoinDetails from '@/components/CoinDetails'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'wouter'

function Details() {

  return (
    <>
      <article className='mt-44 mini:mt-11'>
        <header className='w-full flex justify-between items-center'>
          <Link to='/'>
          <h2 className='text-sm font-semibold flex items-center gap-2 hover:text-brightGreen transition duration-500'>  
            <FaArrowLeft className='text-[1rem]'/> <span className='mini:hidden'>Volver Atras</span>
          </h2>
          </Link>
        </header>

        <CoinDetails />
      </article>
    </>
  )
}

export default Details