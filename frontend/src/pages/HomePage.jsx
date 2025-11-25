import toast from 'react-hot-toast'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import HeroSection from '../components/HeroSection.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-blue-50 to-blue-200">
        
        <Navbar />
        <HeroSection />

        <div className="flex flex-col items-center mt-20 gap-4">

          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn btn-primary">Sign In</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <button
              className="btn btn-success"
              onClick={() => toast.success('Signed in successfully!')}
            >
              Click me
            </button>
            <UserButton />
          </SignedIn>

        </div>
        <Footer />

      </div>
    </>
  )
}

export default HomePage
