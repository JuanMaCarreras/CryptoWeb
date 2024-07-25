import IntroCards from "./IntroCards"

function Intro() {
  return (
    <>
      <section className='h-screen flex flex-col items-center justify-center space-y-11 bg-radial-gradient'>
    
          <h2 className='text-5xl font-semibold text-verdeClaro1'
            >Descubre el Mundo Cripto con Lynx
          </h2>

          <h4 className='text-2xl mt-5 text-logoText'
            >Toda la Información que Necesitas
          </h4>

        <IntroCards />

      </section>
    </>
  )
}

export default Intro