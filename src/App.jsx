import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import EmergencyBanner from './components/EmergencyBanner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Careers from './components/Careers'
import Contact from './components/Contact'

import TeamPage from './pages/TeamPage'
import { slideRoutes } from './pages/slideData'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Blog />
      <FAQ />
      <Careers />
      <Contact />
    </main>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={dark ? 'dark' : ''}>
      {pathname === '/' && <EmergencyBanner />}
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        {slideRoutes.map(r => <Route key={r.path} path={r.path} element={r.element} />)}
      </Routes>
      <Footer />
    </div>
  )
}
