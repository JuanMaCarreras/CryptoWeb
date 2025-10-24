import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'

interface GoogleButtonProps {
  onClick: () => void
  text: string
}

export function GoogleButton({ onClick, text }: GoogleButtonProps) {
  return (
    <Button
      type='button'
      variant='outline'
      onClick={onClick}
      className='w-full bg-deepGreen border-[1px] border-lightGray'
    >
      <FcGoogle /> {text}
    </Button>
  )
}