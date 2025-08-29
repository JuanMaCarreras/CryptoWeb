import { 
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/clerk-react'

export function Auth() {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <button>Iniciar sesión</button>
        </SignInButton>
        <SignUpButton>
          <button>Registrarse</button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton /> 
      </SignedIn>
    </>
  )
}
