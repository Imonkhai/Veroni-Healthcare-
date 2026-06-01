import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './components/Hero'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'

import TeamPage from './pages/TeamPage'
import DayProgramsPage from './pages/DayProgramsPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import { serviceRoutes } from './pages/ServiceDetailPage'
import { slideRoutes } from './pages/slideData'

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Testimonials />
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
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {serviceRoutes.map(r => <Route key={r.path} path={r.path} element={<ServiceDetailPage slug={r.slug} />} />)}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/day-programs" element={<DayProgramsPage />} />
        {slideRoutes.map(r => <Route key={r.path} path={r.path} element={r.element} />)}
      </Routes>
      <Footer />
    </div>
  )
}
