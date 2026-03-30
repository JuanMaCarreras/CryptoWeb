import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { RiErrorWarningLine } from 'react-icons/ri'

export function AlertError({ error }: { error: string }) {
  return (
    <Alert className='bg-deepGray border-negativeNum mb-5'>
      <RiErrorWarningLine className='text-negativeNum'/>
      <AlertTitle>Malas Noticias!</AlertTitle>
      <AlertDescription className='my-3 text-textGray'>
        { error }
      </AlertDescription>
    </Alert>
  )
}

