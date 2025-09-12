import { useEffect } from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useAuthStore } from '@/store'


export const useAuthListener = () => {
  
  const setUser = useAuthStore((state) => state.setUser)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [setUser])

}
  




