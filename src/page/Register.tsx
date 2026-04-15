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
import { FaArrowLeft } from 'react-icons/fa'

export function Register() {
  const { register, loginWithGoogle } = useAuth()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,  setError] = useState('')
  const [, setLocation] = useLocation()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await register(email, password)
      setLocation('/')
    } catch (err) {

      setError('Error al registrar')
      console.error('Error al registrar', err)
     
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
    <article>
      <Link to='/'>
        <h2 className='text-sm flex items-center gap-1 hover:text-brightGreen transition duration-500'> 
          <FaArrowLeft className='text-[1rem]'/> Volver Atras
        </h2>
      </Link>
      <AuthCard 
        title='Regístrate' 
        description='Descubre el mundo de las criptomonedas con Lynx'
      >
        {error && <AlertError error={error} />}
        
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
              { loading ? 'Creando cuenta...' : 'Crear Cuenta' }
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
    </article>
  )
}