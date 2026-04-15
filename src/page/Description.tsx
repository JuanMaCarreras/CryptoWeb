import { Link } from 'wouter'
import { FaArrowLeft } from 'react-icons/fa'
import { FaLinkedin, FaGithub } from 'react-icons/fa'


export default function Description() {

  const items = [
    { name: 'Vite', url: 'https://vitejs.dev/' },
    { name: 'React', url: 'https://reactjs.org/' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'ShadcnUI', url: 'https://ui.shadcn.com/' },
    { name: 'TailwindCSS', url: 'https://tailwindcss.com/' },
    { name: 'Firebase', url: 'https://firebase.google.com/' },
    { name: 'Axios', url: 'https://axios-http.com/' },
    { name: 'CoinGecko API', url: 'https://www.coingecko.com/en/api' },
    { name: 'Zustand', url: 'https://zustand-demo.pmnd.rs/' },
    { name: 'Wouter', url: 'https://wouter.vercel.app/' },
    { name: 'Recharts', url: 'https://recharts.org/' },
  ]

  return (
    <>
      <article className='w-full'>
        <section >
          <Link to='/'>
            <h2 className='text-sm flex items-center gap-1 hover:text-brightGreen transition duration-500'> 
              <FaArrowLeft className='text-[1rem]'/> Volver Atras
            </h2>
          </Link>

          <div className='flex flex-col  space-y-14 mx-36 mt-16'>
            <h1 className='ml-16 text-2xl'>CryptoWeb: Seguimiento de Criptomonedas</h1>
            <p className='text-center text-textGray'>CryptoWeb es una aplicación web creada para seguir el mercado de criptomonedas de forma accesible y práctica. Ofrece información actualizada sobre precios, volúmenes y cambios del mercado, y está pensada para que tanto principiantes como usuarios avanzados puedan explorar el mundo cripto con facilidad.</p>
            <p className='text-center text-textGray'>La plataforma permite buscar monedas por nombre o símbolo, filtrar y paginar resultados, cambiar entre distintas monedas fiat y consultar el detalle de cada criptomoneda con gráficos de evolución. También incluye autenticación de usuario, gestión de favoritos y sincronización de preferencias para una experiencia más personalizada.</p>
            <p className='text-center text-textGray'>La aplicación se construyó con <span className='text-logoText'>Vite</span> como empaquetador, <span className='text-logoText'>React</span> para la interfaz, <span className='text-logoText'>TailwindCSS</span> para estilos y <span className='text-logoText'>TypeScript</span> para el manejo seguro de datos. Utiliza <span className='text-logoText'>Axios</span> para consumir la API de <span className='text-logoText'>CoinGecko</span>, <span className='text-logoText'>Zustand</span> para el estado global de divisas y <span className='text-logoText'>Recharts</span> para mostrar gráficos de precios. <span className='text-logoText'>Firebase</span> gestiona la autenticación y las listas de favoritos.</p>
            <ul className='flex justify-evenly pt-14'>
              {
                items.map((item) => (
                <li key={item.name}>
                  <a href={item.url} target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>{item.name}</a>
                </li>))
              }
              {/* <li>
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
                <a href='https://zustand-demo.pmnd.rs/' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>Zustand</a>
              </li>

              <li>
                <a href='https://github.com/molefrog/wouter' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>Wouter</a>
              </li>

              <li>
               <a href='https://recharts.org/' target='_blank' rel='noopener noreferrer' className='hover:underline  hover:text-brightGreen  transition duration-500'>Recharts</a>
              </li>   */}

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
