import { FormEvent, useState } from 'react'
import { useAuth } from '@/hook/useAuth'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from 'wouter'
import { AuthCard } from '@/components/auth/AuthCard'
import { EmailInput } from '@/components/auth/EmailInput'
import { PasswordInput } from '@/components/auth/PasswordInput'
import { GoogleButton } from '@/components/auth/GoogleButton'

export function Register() {
  const { register, loginWithGoogle } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, setLocation] = useLocation()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await register(email, password)
      setLocation('/')
    } catch (err) {
      console.error('Error al registrar', err)
    }
  }

  return (
    <AuthCard 
      title='Regístrate' 
      description='Descubre el mundo de las criptomonedas con Lynx'
    >
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-6'>
          <EmailInput value={email} onChange={setEmail} />
          <PasswordInput value={password} onChange={setPassword} />
        </div>

        <div className='mt-12 flex flex-col gap-4'>
          <Button
            type='submit'
            className='w-full text-black bg-button border-lightGray hover:bg-logoText transition-colors duration-500'
          >
            Registrarse
          </Button>
          <GoogleButton onClick={loginWithGoogle} text='Registrarse con Google' />
          <div className='flex items-center justify-center text-sm'>
            <span>¿Ya tienes una cuenta?</span>
            <Link href='/login'>
              <Button variant='link'>Iniciar Sesión</Button>
            </Link>
          </div>
        </div>
      </form>
    </AuthCard>
  )
}