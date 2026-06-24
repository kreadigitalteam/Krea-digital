import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const scrollToId = () => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // ensure the page content is mounted before scrolling
    const timeout = window.setTimeout(scrollToId, 50)
    return () => window.clearTimeout(timeout)
  }, [location.hash, location.pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Services />
              <Pricing />
              <WhyChooseUs />
            </main>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
