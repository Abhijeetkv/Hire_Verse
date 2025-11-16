import React from 'react'
import toast from 'react-hot-toast'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const HomePage = () => {
  return (
    <>
        <h1>sign in with google</h1>

        <button className='btn btn-primary' onClick={() => toast.success('Signed in successfully!')}>click me</button>

       <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}

export default HomePage