
function Description() {
  return (
    <>
      <article className='w-full'>
        <section className=' text-white pt-32'>
          <h1 className='ml-16 text-2xl'>Proyecto Tecnico</h1>

          <div className='flex flex-col space-y-14 mx-20 mt-14'>
            <p className='text-center text-grisLetras'>Esta página web es un proyecto personal, creado con la intención poner a pruba conocimientos de programación 
            y a su vez ser util para usuarios que buscar informance sobre el mundo de las cripto monedas de una manera simple y sencilla.
            </p>
            <p className='text-center text-grisLetras'>Usando <span className='text-logoText'>Vite</span> como empaquetador,  <span className='text-logoText'>React</span> para la interface de usuario y <span className='text-logoText'>TailwindCSS</span> para los estilos. <span className='text-logoText'>TypeScript</span> para un mejor 
              manejo de los datos al hacer peticiones con <span className='text-logoText'>Axios</span> a la API de <span className='text-logoText'>Coin Gecko</span>, <span className='text-logoText'>Recharts</span> para los gráficos de las criptos. Y <span className='text-logoText'>Wouter</span>
              para una rápida y sencilla forma de enrutador. Además, el uso del logo obtenido de <span className='text-logoText'>Vecteezy</span> 
            </p>
            <ul className='flex  justify-evenly'>
              <li>
               <a href='https://vitejs.dev/' target='_blank' className='hover:underline'>Vite</a>
              </li>

              <li>
                <a href='https://reactjs.org/' target='_blank' className='hover:underline'>React</a>  
              </li>

              <li>
                <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer' className='hover:underline'>TailwindCSS</a>
              </li>

              <li>
                <a href='https://www.typescriptlang.org/' target='_blank' className='hover:underline'>TypeScript</a>
              </li>

              <li>
                <a href='https://axios-http.com/' target='_blank' className='hover:underline'>Axios</a>
              </li>  

              <li>
                <a href='https://github.com/molefrog/wouter' target='_blank' className='hover:underline'>Wouter</a>
              </li>

              <li>
               <a href='https://recharts.org/' target='_blank' className='hover:underline'>Recharts</a>
              </li>  

            </ul>
            <div className='flex justify-center space-x-10'>
              <a href="https://github.com/JuanMaCarreras/CryptoWeb" target='_blank' className='hover:underline'>GitHub</a>
              <a href="https://www.linkedin.com/in/manuel-carreras/" target='_blank' className='hover:underline'>Linkedin</a>
            </div>
          </div>
        </section> 
      </article>
    </>
  )
}

export default Description