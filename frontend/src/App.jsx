import { useUser } from '@clerk/clerk-react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProblemsPage from './pages/ProblemsPage.jsx'
import { Toaster } from 'react-hot-toast'

function App() {

  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/problems"
          element={
            isSignedIn ? <ProblemsPage /> : <Navigate to="/" />
          }
        />
      </Routes>

      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
