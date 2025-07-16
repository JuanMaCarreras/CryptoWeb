import { 
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton
} from '@clerk/clerk-react'

export function Auth() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedOut>
        <SignUpButton />
      </SignedOut>

      <SignedIn>
        <UserButton /> 
      </SignedIn>
    </>
  )
}
