import toast from 'react-hot-toast'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import HeroSection from '../components/HeroSection.jsx'
import Navbar from '../components/navbar.jsx'

const HomePage = () => {
  return (
    <>
      <Navbar />
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