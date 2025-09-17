import { useAuthStore } from '@/store'

export function Profile() {

  const { user } = useAuthStore()
  console.log('user profile', user)
  return (
    <div>Profile</div>
  )
}