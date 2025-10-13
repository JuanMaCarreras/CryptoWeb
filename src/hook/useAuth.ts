import { 
  auth, 
  provider 
} from '@/firebase/firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth'

export const useAuth = () => {
  const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

  const loginWithGoogle = () =>
    signInWithPopup(auth, provider)

  const resetPassword = (email: string) =>
    sendPasswordResetEmail(auth, email)
  
  const logout = () => signOut(auth)

  return { register, login, loginWithGoogle, resetPassword, logout }
}