import { FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useAuth } from '@/hook/useAuth'
import { VerifyEmailCard } from '@/components/auth/VerifyEmailCard'

export function PasswordReset() {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleReset = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await resetPassword(email)
      setIsEmailSent(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (isEmailSent) {
    return <VerifyEmailCard />
  }

  return (
    <section className='flex justify-center items-center h-full'>
      <Card className='w-full max-w-[26rem] grid gap-6 bg-deepGreen border-[1px] border-lightGray'>
        <CardHeader className='grid gap-4'>
          <CardTitle className='text-lg'>Recuperar Contraseña</CardTitle>
          <CardDescription>
            Ingresa tu correo electrónico para recibir instrucciones de restablecimiento de contraseña.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReset}>
            <div className='flex flex-col gap-6'>
              <div>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='ejemplo@ejemplo.com'
                  className='bg-deepGreen border-lightGray'
                  required
                  disabled={isLoading}
                />
                {error && (
                  <p className='text-red-500 text-sm mt-1'>{error}</p>
                )}
              </div>
              <Button 
                type='submit' 
                className='w-full text-black bg-button border-lightGray hover:bg-logoText transition-colors duration-500'
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}