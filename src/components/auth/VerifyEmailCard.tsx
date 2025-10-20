import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'wouter'

export function VerifyEmailCard() {

  return (
    <section className='flex justify-center items-center h-full'>
      <Card className='w-full max-w-[26rem] grid gap-6 bg-deepGreen border-[1px] border-lightGray'>
        <CardHeader className='grid gap-4'>
          <CardTitle className='text-lg'>
            ¡Verificación de Correo Enviada!
          </CardTitle>
          <CardDescription className='space-y-2'>
            <p>
              Hemos enviado un correo de verificación a tu dirección de email. 
              Por favor, revisa tu bandeja de entrada para completar el proceso.
            </p>
            <p className='text-sm text-gray-400'>
              Nota: Si no encuentras el correo, revisa tu carpeta de spam o correo no deseado.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/login">
            <Button 
              className='w-full text-black bg-button border-lightGray hover:bg-logoText transition-colors duration-500'
            >
              Volver a Iniciar Sesión
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}