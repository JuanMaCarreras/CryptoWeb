import { FormEvent, useState } from 'react'
import { useAuth } from '@/hook/useAuth'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from 'wouter'
import { AuthCard } from '@/components/auth/AuthCard'
import { EmailInput } from '@/components/auth/EmailInput'
import { PasswordInput } from '@/components/auth/PasswordInput'
import { GoogleButton } from '@/components/auth/GoogleButton'
import { AlertError } from '@/components/auth/AlertError'
import { getAuthErrorMessage, isFirebaseError } from '@/utils/authErrors'

export function Login() {
  const { login, loginWithGoogle } = useAuth()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,  setError] = useState('')
  const [, setLocation] = useLocation()


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {

      await login(email, password)
      setLocation('/')

    } catch (err) {
      setError('Error al iniciar sesión')
      console.error('Error al iniciar sesión', err)
      
      if (isFirebaseError(err)) {
        setError(getAuthErrorMessage(err.code))

      } else {
        setError('Ocurrió un error inesperado')
      }

    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthCard title='Iniciar Sesión'>

      {error && <AlertError  error={error}/>}
      
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-6'>
          <EmailInput value={email} onChange={setEmail} />
          <PasswordInput 
            value={password} 
            onChange={setPassword}
            showForgotPassword 
          />
        </div>

        <div className='mt-12 flex flex-col gap-4'>
          <Button
            type='submit'
            className='w-full text-black bg-button border-lightGray hover:bg-logoText transition-colors duration-500'
          >
            { loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }
          </Button>
          <GoogleButton onClick={loginWithGoogle} text='Iniciar Sesión con Google' />
          <div className='flex items-center justify-center text-sm'>
            <span>¿No tienes una cuenta?</span>
            <Link href='/sign-up'>
              <Button variant='link'>Regístrate</Button>
            </Link>
          </div>
        </div>
      </form>
    </AuthCard>
  )
}