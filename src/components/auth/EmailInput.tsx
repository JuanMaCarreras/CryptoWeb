import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface EmailInputProps {
  value: string
  onChange: (value: string) => void
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <div className='grid gap-2'>
      <Label htmlFor='email'>Email</Label>
      <Input
        id='email'
        type='email'
        placeholder='ejemplo@ejemplo.com'
        required
        value={value}
        className='bg-deepGreen border-lightGray'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}