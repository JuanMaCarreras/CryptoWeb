import { FormEvent, useState } from 'react'
import { useAuth } from '@/hook/useAuth'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from 'wouter'
import { AuthCard } from '@/components/auth/AuthCard'
import { EmailInput } from '@/components/auth/EmailInput'
import { PasswordInput } from '@/components/auth/PasswordInput'
import { GoogleButton } from '@/components/auth/GoogleButton'

export function Login() {
  const { login, loginWithGoogle } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, setLocation] = useLocation()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      setLocation('/')
    } catch (err) {
      console.error('Error al iniciar sesión', err)
    }
  }

  return (
    <AuthCard title='Iniciar Sesión'>
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
            Iniciar Sesión
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