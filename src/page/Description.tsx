
function Description() {
  return (
    <>
      <article className='w-full'>
        <section className=' text-white pt-32'>
          <h1 className='ml-16 text-2xl'>Proyecto Tecnico</h1>

          <div className='mx-20 mt-14'>
            <p className='text-center text-grisLetras'>Esta página web es un proyecto personal, creado con la intención poner a pruba conocimientos de programación 
            y a su vez ser util para usuarios que buscar informance sobre el mundo de las cripto monedas de una manera simple y sencilla.
            </p>
            <h4 className='mt-14  text-xl'>Tecnologías usadas:</h4>
            <p className='text-center text-grisLetras mt-11 mb-20'>Usando Vite como empaquetador, React para la interface de usuario y TailwindCSS para los estilos. TypeScript para un mejor 
              manejo de los datos al hacer peticiones con Axios a la API de Coin Gecko, Recharts para los gráficos de las criptos. Y Wouter
              para una rápida y sencilla forma de enrutador. Además, el uso del logo obtenido de Vecteezy 
            </p>
            <ul className=' flex ml-4 justify-evenly'>
              <li>Vite</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>TypeScript</li>
              <li>Axios</li>  
              <li>Wouter</li>
              <li>Recharts</li>  
            </ul>
          </div>
          
        </section> 
      </article>
    </>
  )
}

export default Description