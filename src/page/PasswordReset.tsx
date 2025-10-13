import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useAuth } from '@/hook/useAuth'


export function PasswordReset() {

  const { resetPassword } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState('')

  const handleReset = async () => {
    try {
      await resetPassword(email)
      setMessage("Revisa tu correo para restablecer tu contraseña.")
    } catch (err: any) {
      setMessage("Error: " + err.message)
    }
  }


  return (
    <section className='flex justify-center items-center h-full'>
      <Card className='w-full max-w-[26rem] grid gap-6 bg-deepGreen border-[1px] border-lightGray'>
        <CardHeader>
          <CardTitle className='text-lg'>Recuperar Contraseña</CardTitle>
          <CardDescription>
            Ingresa tu correo electrónico para recibir instrucciones de restablecimiento de contraseña.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReset}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='ejemplo@ejemplo.com'
                  className='bg-deepGreen border-lightGray '
                  required
                />
              </div>
              <Button type='submit' className='w-full text-black bg-button border-lightGray hover:bg-logoText transition-colors duration-500'>
                Enviar
              </Button>
            </div>
          </form>
          <CardFooter>
            <p>{message}</p>
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  )
}
