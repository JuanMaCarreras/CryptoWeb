import { Link } from 'wouter'
import { FaArrowLeft } from 'react-icons/fa'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Description() {
  return (
    <>
      <article className='w-full'>
        <section className='mt-14 pb-40'>
          <Link to='/'>
            <h2 className='text-lg font-semibold flex items-center gap-2 hover:text-brightGreen transition duration-500'> 
              <FaArrowLeft className='text-[1rem]'/> Volver Atras
            </h2>
          </Link>

          <div className='flex flex-col space-y-14 mx-20 mt-16'>
          <h1 className='ml-16 text-2xl'>Proyecto Personal</h1>
            <p className='text-center text-textGray'>Esta página web es un proyecto personal, creado con la intención poner a pruba conocimientos de programación 
            y a su vez ser util para usuarios que buscar informance sobre el mundo de las cripto monedas de una manera simple y sencilla.
            </p>
            <p className='text-center text-textGray'>Usando <span className='text-logoText'>Vite</span> como empaquetador,  <span className='text-logoText'>React</span> para la interface de usuario y <span className='text-logoText'>TailwindCSS</span> para los estilos. <span className='text-logoText'>TypeScript</span> para un mejor 
              manejo de los datos al hacer peticiones con <span className='text-logoText'>Axios</span> a la API de <span className='text-logoText'>Coin Gecko</span>, <span className='text-logoText'>Recharts</span> para los gráficos de las criptos. Y <span className='text-logoText'>Wouter</span>
              para una rápida y sencilla forma de enrutador. Además, el uso del logo obtenido de <span className='text-logoText'>Vecteezy</span> 
            </p>
            <ul className='flex  justify-evenly'>
              <li>
               <a href='https://vitejs.dev/' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>Vite</a>
              </li>

              <li>
                <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>React</a>  
              </li>

              <li>
                <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>TailwindCSS</a>
              </li>

              <li>
                <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>TypeScript</a>
              </li>

              <li>
                <a href='https://axios-http.com/' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>Axios</a>
              </li>  

              <li>
                <a href='https://github.com/molefrog/wouter' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>Wouter</a>
              </li>

              <li>
               <a href='https://recharts.org/' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>Recharts</a>
              </li>  

            </ul>
            <div className='flex justify-center space-x-10'>
              <a href="https://github.com/JuanMaCarreras/CryptoWeb" target='_blank' rel='noopener noreferrer' className='hover:underline flex flex-col items-center hover:text-brightGreen  transition duration-500'>
                <FaGithub className='w-8 h-8'/> GitHub
              </a>
             
              <a href="https://www.linkedin.com/in/manuel-carreras/" target='_blank' rel='noopener noreferrer' className='hover:underline flex flex-col items-center hover:text-brightGreen  transition duration-500'>
                <FaLinkedin className='w-8 h-8'/>Linkedin
              </a>
            </div>
          </div>
        </section> 
      </article>
    </>
  )
}

export default Description