import { useState } from 'react'
import { useAuthStore } from '@/store'
import { useAuth } from '@/hook/useAuth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MdLogout } from 'react-icons/md'


export function Profile() {
  const { user } = useAuthStore()
  const { logout } = useAuth()

  const userIamge = user?.photoURL ? user.photoURL : 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg'
  const [position, setPosition] = useState('buttom')

  const handleLogout = async () => {
    try {
      await logout()
      console.log('User logged out successfully')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='outline-none cursor-pointer mb-1'>
          <img src={userIamge} alt='profile image' className='w-8 h-8 rounded-full'/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 bg-deepGreen border-lightGray' align='end'>
          <DropdownMenuLabel className='text-xs'>Panel de Usuario</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value='logout'>
              <Button onClick={handleLogout} className='rounded-md hover:bg-SemiGreen transition duration-700'>Cerrar Sesión <MdLogout/></Button>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}