import CoinDetails from '@/components/CoinDetails'
import CurrencySelect from '@/components/CurrencySelect'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'wouter'

function Details() {

  return (
    <>
      <article className='mt-16'>
        <header className='w-full flex justify-between items-center'>
          <Link to='/'>
          <h2 className='text-lg font-semibold flex items-center gap-2 hover:text-brightGreen transition duration-500'>  
              <FaArrowLeft className='text-[1rem]'/> Volver Atras
            </h2>
          </Link>
          <CurrencySelect />
        </header>

        <CoinDetails />
      </article>
    </>
  )
}

export default Details