import { useEffect, useState } from "react"
import { 
  auth, 
  provider 
} from '@/firebase/firebase'
import { 
  User, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  signInWithPopup 
} from "firebase/auth"

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    });
    return () => unsub()
  }, []);

  const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

  const loginWithGoogle = () =>
    signInWithPopup(auth, provider)

  const logout = () => signOut(auth)

  return { user, register, login, loginWithGoogle, logout }
};