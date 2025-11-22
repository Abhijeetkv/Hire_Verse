import toast from 'react-hot-toast'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import HeroSection from '../components/HeroSection.jsx'

const HomePage = () => {
  return (
    <>
      <HeroSection />
        <button className='btn btn-primary mt-20' onClick={() => toast.success('Signed in successfully!')}>click me</button>

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