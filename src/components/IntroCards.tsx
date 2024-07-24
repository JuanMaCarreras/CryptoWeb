import { MdQueryStats, MdCurrencyBitcoin, MdNewspaper } from 'react-icons/md'

function IntroCards() {
  return (
    <>
      <section className='flex space-x-3 text-white [&_div]:py-3 [&_div]:rounded-lg select-none '>
        <div className='flex flex-col justify-center items-center bg-grisClaro bg-opacity-45 border-[1px] border-gris1'>
          <MdCurrencyBitcoin className='w-10 h-10' />
          <p className='text-center max-w-xs break-words'>Encontras todas tus Criptomonedas acá en Lynx</p>
        </div>

        <div className='flex flex-col justify-center items-center bg-grisClaro bg-opacity-55 border-[1px] border-gris1 '>
          <MdQueryStats className='w-10 h-10'/>
          <p className='text-center max-w-xs break-words'>Stats actualizados y detallados minuto a minuto</p>
        </div>

        <div className='flex flex-col justify-center items-center bg-grisClaro bg-opacity-45 border-[1px] border-gris1'>
          <MdNewspaper className='w-10 h-10'/>
          <p className='text-center max-w-xs break-words'>Información detallada del mundo Cripto </p>
        </div>
      </section>
    </>
  )
}

export default IntroCards