import img from '../assets/d.png'

function NavBar() {
  return (
    <>
      <nav className='flex top-0 justify-between items-center w-full px-16 h-20 bg-verdeOscuro2 border-b-[1px] border-gris1'>
        <div>
          <img 
            src={img} 
            alt='Lynx logo' 
            className='h-[4rem] w-[4.3rem]'
          />
        </div>
        
        <ul className='flex w-96 text-grisLetras font-semibold justify-around'>
          <li className='hover:text-verdeClaro1 cursor-pointer transition duration-300'>Inicio</li>
          <li className='hover:text-verdeClaro1 cursor-pointer transition duration-300'>Precios</li>
          <li className='hover:text-verdeClaro1 cursor-pointer transition duration-300'>Aprender Más</li>
        </ul>

        <div className=''>
          <button className='w-40 p-[4px] font-semibold border-2 rounded-2xl border-verdeClaro text-verdeClaro1 bg-verdeSemiOscuro hover:bg-verdeClaro1 hover:border-verdeClaro1 hover:text-black transition duration-500'>Descargar App</button>
        </div>
      </nav>
    </>
  )
}

export default NavBar