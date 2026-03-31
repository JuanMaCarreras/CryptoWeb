import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LuEye } from 'react-icons/lu'
import { RiEyeCloseLine } from 'react-icons/ri'
import { Link } from 'wouter'

interface PasswordInputProps {
  value: string
  onChange: (value: string) => void
  showForgotPassword?: boolean
}

export function PasswordInput({ value, onChange, showForgotPassword }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='grid gap-2'>
      <div className='flex items-center'>
        <Label htmlFor='password'>Contraseña</Label>
        {
          showForgotPassword && (
          <Link
            href='/reset-password'
            tabIndex={-1}
            className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
          >
            Olvide mi contraseña
          </Link>
          )
        }
      </div>
      <div className='relative'>
        <Input
          id='password'
          type={showPassword ? 'text' : 'password'}
          required
          value={value}
          className='bg-deepGreen border-lightGray pr-10'
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-3 top-1/2 -translate-y-1/2 p-1'
          aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        >
          {
            showPassword ? (
              <RiEyeCloseLine className='w-4 h-4 text-textGray' />
            ) : (
              <LuEye className='w-4 h-4 text-textGray' />
            )
          }
        </button>
      </div>
    </div>
  )
}