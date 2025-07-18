import { 
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'

export function Auth() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton /> 
      </SignedIn>
    </>
  )
}
