function Footer () {
  return(
    <>
      <footer className='w-full h-[6rem] mt-[15rem] py-6 border-t-[1px] border-lightGray flex items-end justify-center'>
          <p className='font-medium text-textGray'>Lynx&copy; {new Date().getFullYear()} Created By Manuel Carreras</p>
      </footer>
    </>
  )
}

export default Footer