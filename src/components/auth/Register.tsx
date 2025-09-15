import { FormEvent, useState } from 'react'
import { useAuth } from '@/hook/useAuth'
import { Button } from '@/components/ui/button'
import { FcGoogle } from "react-icons/fc";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useLocation } from 'wouter'

export function Register() {

  const { register} = useAuth()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  const [, setLocation] = useLocation()

  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await register(email, password)
      setLocation('/')
      console.log('Registro exitoso')
    } catch (err: any) {
      setError(err.message)
      console.log('Error state', err.message)
    }
  }
  return (
     <section className='flex justify-center items-center h-full'>
      <Card className='w-full max-w-[26rem] grid gap-6 bg-deepGreen border-[1px] border-lightGray'>
        <CardHeader>
          <CardTitle className='text-lg'>Regístrate</CardTitle>
          <CardDescription>
            Descubre el mundo de las criptomonedas con Lynx
          </CardDescription>
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
                  <a
                    href='#'
                    className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
                <Input 
                  id='password' 
                  type='password' 
                  required 
                  className='bg-deepGreen border-lightGray'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className='mt-12 flex flex-col gap-4'>
              <Button type='submit' className='w-full text-black bg-button border-lightGray hover:bg-logoText transition-colors duration-500'>
                Registrarse
              </Button>
              <Button variant='outline' className='w-full bg-deepGreen border-[1px] border-lightGray'>
                <FcGoogle/>Registrarse con Google
              </Button>
              <div className='flex items-center justify-center text-sm'>
                <span>ya tienes una cuanta?</span> <Link href='/login'><Button variant='link'>Iniciar Sesión</Button></Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}