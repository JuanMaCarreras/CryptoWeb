import { Link } from 'wouter'
import img from '../assets/logo.png'

function NavBar() {
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 flex justify-between items-center px-10 h-20 bg-transparent border-b-[1px] border-gris1'>
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
        
        <ul className='flex w-96 text-grisLetras font-medium justify-around'>
          <li 
            className='hover:text-verdeClaro1 cursor-pointer transition duration-300'
          >
           <Link to='/'>Inicio</Link>
          </li>
          
          <li 
            className='hover:text-verdeClaro1 cursor-pointer transition duration-300'
          >
            <Link to='/price'>Precios</Link>
          </li>
          
          <li 
            className='hover:text-verdeClaro1 cursor-pointer transition duration-300'
          >
            Aprender Más
          </li>
          
          <li 
            className='hover:text-verdeClaro1 cursor-pointer transition duration-300'
          >
           <Link to='/description'> Más Info </Link>
          </li>
        </ul>

        <div className=''>
          <button className='w-40 p-[4px] border-2 rounded-2xl border-verdeClaro text-verdeClaro1 bg-verdeSemiOscuro hover:bg-verdeClaro1 hover:border-verdeClaro1 hover:text-black transition duration-500'>Descargar App</button>
        </div>
      </nav>
    </>
  )
}

export default NavBar