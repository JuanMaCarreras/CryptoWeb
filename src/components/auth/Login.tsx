import { FormEvent, useState } from 'react'
import { useAuth } from '@/hook/useAuth'
import { FcGoogle } from "react-icons/fc";
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useLocation } from 'wouter'
import { LuEye  } from 'react-icons/lu'
import { RiEyeCloseLine } from 'react-icons/ri'

export function Login() {

  const { login, loginWithGoogle } = useAuth()
  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [ error, setError ] = useState('')
  const [, setLocation] = useLocation()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  console.log('Error state', error)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      setLocation('/')
      console.log('Inicio de sesión exitoso')
    } catch (err: any) {
      setError(err.message)
      console.log('Error al registrar', err)
    }
  }
  return (
    <section className='flex justify-center items-center h-full'>
      <Card className='w-full max-w-[26rem] grid gap-6 bg-deepGreen border-[1px] border-lightGray'>
        <CardHeader>
          <CardTitle className='text-lg'>Iniciar Sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='ejemplo@ejemplo.com'
                  required
                  className='bg-deepGreen border-lightGray '
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Contraseña</Label>
                  
                   <a href='#'
                    className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
                <div className='relative'>
                  <Input 
                    id='password' 
                    type={showPassword ? 'text' : 'password'}
                    required 
                    className='bg-deepGreen border-lightGray pr-10'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 p-1 '
                  >
                    {
                    showPassword ? (
                      <RiEyeCloseLine className='w-4 h-4 text-textGray' />
                    ) : (
                      <LuEye className='w-4 h-4 text-textGray' />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className='mt-12 flex flex-col gap-4'>
              <Button type='submit' className='w-full text-black bg-button border-lightGray hover:bg-logoText transition-colors duration-500'>
                Iniciar Sesión
              </Button>
              <Button variant='outline' onClick={loginWithGoogle} className='w-full bg-deepGreen border-[1px] border-lightGray'>
                <FcGoogle/> Iniciar Sesión con Google
              </Button>
              <div className='flex items-center justify-center text-sm'>
                <span>no tienes una cuanta?</span> <Link href='/sign-up'><Button variant='link'>Regístrate</Button></Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}