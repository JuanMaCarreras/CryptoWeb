import { 
  auth, 
  provider 
} from '@/firebase/firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut 
} from 'firebase/auth'

export const useAuth = () => {
  const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

  const loginWithGoogle = () =>
    signInWithPopup(auth, provider)

  const logout = () => signOut(auth)

  return { register, login, loginWithGoogle, logout }
}