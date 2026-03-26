import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Link } from 'wouter'

export function AlertError() {
  return (
    <Alert className='bg-deepGray border-negativeNum'>
      <RiErrorWarningLine className='text-negativeNum'/>
      <AlertTitle>Malas Noticias!</AlertTitle>
      <AlertDescription className='my-3 text-textGray'>
        Algo salió mal, por favor intenta de nuevo más tarde.
      </AlertDescription>
      <div className='flex justify-end'>
        <Button asChild variant='outline' size='sm' className='bg-textGray hover:bg-button text-black'>
          <Link href='/'>
            volver al inicio
          </Link>
        </Button>
      </div>
    </Alert>
  )
}

