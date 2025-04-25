import { Link } from 'wouter'


function Footer () {
  return(
    <>
      <footer className='w-full h-[6rem] mt-[15rem] mini:mt-[6rem] py-6 border-t-[1px] font-medium text-textGray border-lightGray flex mini:flex-col items-center justify-center'>
        <p className=''>Lynx&copy; {new Date().getFullYear()} Created By Manuel Carreras - </p>
        <Link to='/description'>
          <button className='p-[6px] hover:underline'>
            Información
          </button>
        </Link>
      </footer>
    </>
  )
}

export default Footer