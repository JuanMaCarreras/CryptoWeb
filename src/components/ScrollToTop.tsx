import {useState, useEffect} from 'react'
import { FaArrowUp } from 'react-icons/fa'


export function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false)  
  
  useEffect(() => {
    const handlerScroll = () => {
      window.innerWidth < 713 ? setIsVisible(false) : setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handlerScroll)
    return () => {
      window.removeEventListener('scroll', handlerScroll)
    }
    
    
  },[])
  
  const scrollButton = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  } 

  
  return (
    <>
      {
        isVisible && 
          <button
            onClick={scrollButton}
            className='fixed bottom-8 right-5 p-3 bg-deepGreen border-[.1rem] border-lightGray rounded-full hover:border-brightGreen hover:border-[.1rem] hover:bg-SemiGreen transition-colors duration-500'
          >
            <FaArrowUp className='text-[1rem]'/> 
          </button>
      }
    </>
  )
}