import { useLocation } from 'wouter'

export function NotFound() {

  const [location] = useLocation()


  return (
    <>
      {
        !['/', '/description'].includes(location) && !location.startsWith('/coin/') && (
          <section className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-8xl font-semibold text-brightGreen'>404</h1>
            <p className='mt-4 text-xl text-gray-600'>Página no encontrada</p>
            <p className='mt-2 text-base text-textGray'>Lo sentimos, la página que buscas no existe.</p>
          </section>
        )
      }
    </>
  )
}
