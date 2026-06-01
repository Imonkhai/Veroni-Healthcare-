import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, Phone, ChevronDown, Brain, Puzzle, GraduationCap, Users, Baby, Home, Sun as DayIcon, HeartHandshake, User, Globe, Briefcase, Music, Link, Mail } from 'lucide-react'
import logo from '../assets/ChatGPT Image May 30, 2026, 03_59_53 AM.png'

const services = [
  { icon: Brain, label: 'Behavioral Consultation', href: '/services/behavioral-consultation' },
  { icon: Puzzle, label: 'Autism Therapy', href: '/services/autism-therapy' },
  { icon: GraduationCap, label: 'Staff Training', href: '/services/staff-training' },
  { icon: Users, label: 'Support Staffing', href: '/services/support-staffing' },
  { icon: Baby, label: "Children's Programs", href: '/services/childrens-programs' },
  { icon: Home, label: 'Residential Care', href: '/services/residential-care' },
  { icon: DayIcon, label: 'Day Programs', href: '/services/day-programs' },
  { icon: HeartHandshake, label: 'Family Support', href: '/services/family-support' },
]

const programs = [
  { icon: Baby, label: "Children's Services", desc: 'Early intervention & ABA therapy' },
  { icon: User, label: 'Adult Services', desc: 'Independence & life skills' },
  { icon: Globe, label: 'Community Programs', desc: 'Integration & social connection' },
  { icon: Briefcase, label: 'Vocational Training', desc: 'Employment pathways' },
  { icon: Music, label: 'Recreational Activities', desc: 'Fun, growth & wellbeing' },
]

const team = [
  {
    name: 'Dr. Amara Osei',
    role: 'Executive Director & BCBA-D',
    image: 'https://i.pravatar.cc/300?img=47',
    tags: ['BCBA-D', 'PhD', '18 Yrs Exp'],
  },
  {
    name: 'Michael Chen, MSW',
    role: 'Director of Clinical Services',
    image: 'https://i.pravatar.cc/300?img=11',
    tags: ['MSW', 'LCSW', '14 Yrs Exp'],
  },
  {
    name: 'Dr. Fatima Al-Hassan',
    role: 'Lead Behavioral Consultant',
    image: 'https://i.pravatar.cc/300?img=45',
    tags: ['BCBA', 'PhD', '12 Yrs Exp'],
  },
  {
    name: 'James Okafor, RBT',
    role: 'Senior Program Coordinator',
    image: 'https://i.pravatar.cc/300?img=15',
    tags: ['RBT', 'BA Psychology', '10 Yrs Exp'],
  },
]

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services', dropdown: 'services' },
  { label: 'Day Programs', href: '/day-programs' },
  { label: 'Team', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar({ dark, setDark }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const [active, setActive] = useState('')
  const [mobileServices, setMobileServices] = useState(false)
  const [mobilePrograms, setMobilePrograms] = useState(false)
  const [mobileTeam, setMobileTeam] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['about', 'services', 'programs', 'team', 'blog', 'careers', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const { top } = el.getBoundingClientRect()
          if (top <= 100 && top > -el.offsetHeight + 100) { setActive(id); break }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setDropdown(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isScrolled = scrolled || open || pathname !== '/'

  const linkClass = (id) => `relative flex items-center px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
    isScrolled
      ? active === id ? 'text-blue-600 dark:text-blue-400'
        : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800'
      : active === id ? 'text-teal-300'
        : 'text-white/90 hover:text-white hover:bg-white/10'
  }`

  const getLinkId = (href) => href === '/' ? 'home' : href.startsWith('#') ? href.slice(1) : href.slice(1)

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 dark:bg-slate-900/97 backdrop-blur-xl shadow-xl shadow-blue-900/8 border-b border-slate-100 dark:border-slate-800'
        : 'bg-transparent'
    }`}>

      {/* Top accent bar */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
            transition={{ duration: 0.4 }}
            className="h-0.5 bg-linear-to-r from-blue-600 via-teal-500 to-blue-400 origin-left"
          />
        )}
      </AnimatePresence>

      <nav ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Veroni Healthcare Services"
            className="w-auto object-contain transition-all duration-300"
            style={{ height: isScrolled ? '48px' : '52px' }}
          />
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.label} className="relative">
              {l.dropdown ? (
                <>
                  <button
                    onMouseEnter={() => setDropdown(l.dropdown)}
                    onClick={() => setDropdown(d => d === l.dropdown ? null : l.dropdown)}
                    className={linkClass(getLinkId(l.href))}
                  >
                    {l.label}
                  </button>

                  {/* Services dropdown */}
                  <AnimatePresence>
                    {l.dropdown === 'services' && dropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.97 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        onMouseLeave={() => setDropdown(null)}
                        className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-blue-900/15 border border-slate-100 dark:border-slate-700 overflow-hidden"
                      >
                        <div className="p-2">
                          {services.map(({ icon: Icon, label, href }) => (
                            <a key={label} href={href}
                              onClick={() => { navigate(href); setDropdown(null) }}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 group transition-colors"
                            >
                              <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                                <Icon size={13} className="text-blue-600" />
                              </div>
                              <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-blue-600 transition-colors">{label}</span>
                            </a>
                          ))}
                        </div>
                        <div className="px-3 pb-3">
                          <a href="/services" onClick={() => { navigate('/services'); setDropdown(null) }}
                            className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-xl transition-colors"
                          >View All Services →</a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Team dropdown */}
                  <AnimatePresence>
                    {l.dropdown === 'team' && dropdown === 'team' && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-blue-900/15 border border-slate-100 dark:border-slate-700 overflow-hidden"
                      >
                        <div className="bg-linear-to-r from-slate-700 to-blue-700 px-5 py-3">
                          <p className="text-white font-semibold text-sm">Our Leadership Team</p>
                          <p className="text-slate-300/80 text-xs">Meet the experts behind your care</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 p-3">
                          {team.map(({ name, role, image, tags }) => (
                            <div key={name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 group transition-colors cursor-default">
                              <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900 shrink-0 group-hover:ring-blue-400 transition-all" />
                              <div className="min-w-0">
                                <p className="text-slate-800 dark:text-slate-200 text-xs font-semibold truncate group-hover:text-blue-600 transition-colors">{name}</p>
                                <p className="text-slate-400 text-xs truncate">{role}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {tags.slice(0, 2).map(t => (
                                    <span key={t} className="text-[10px] bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded-full font-medium">{t}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="px-4 pb-4">
                          <a href="#contact" onClick={() => setDropdown(null)}
                            className="block text-center bg-slate-700 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
                          >Get in Touch with Our Team →</a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Programs dropdown */}
                  <AnimatePresence>
                    {l.dropdown === 'programs' && dropdown === 'programs' && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[360px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-blue-900/15 border border-slate-100 dark:border-slate-700 overflow-hidden"
                      >
                        <div className="bg-linear-to-r from-teal-600 to-blue-500 px-5 py-3">
                          <p className="text-white font-semibold text-sm">Programs & Support</p>
                          <p className="text-teal-100/80 text-xs">Designed for every individual</p>
                        </div>
                        <div className="p-3 space-y-1">
                          {programs.map(({ icon: Icon, label, desc }) => (
                            <a key={label} href="#contact" onClick={() => setDropdown(null)}
                              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-teal-50 dark:hover:bg-slate-800 group transition-colors"
                            >
                              <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center shrink-0 group-hover:bg-teal-200 transition-colors">
                                <Icon size={15} className="text-teal-600" />
                              </div>
                              <div>
                                <p className="text-slate-800 dark:text-slate-200 text-xs font-semibold group-hover:text-teal-600 transition-colors">{label}</p>
                                <p className="text-slate-400 text-xs">{desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-4 pb-4">
                          <a href="#contact" onClick={() => setDropdown(null)}
                            className="block text-center bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
                          >Enquire About a Program →</a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={l.href}
                  onClick={() => {
                    if (l.href.startsWith('/')) { navigate(l.href) }
                  }}
                  className={linkClass(getLinkId(l.href))}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <motion.a
            href="tel:+18005551234"
            whileHover={{ scale: 1.04 }}
            className={`hidden xl:flex items-center gap-1.5 text-sm font-medium transition-colors px-3 py-1.5 rounded-lg ${
              isScrolled ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800' : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <Phone size={13} />
            <span>1-800-555-1234</span>
          </motion.a>

          <motion.button
            onClick={() => setDark(!dark)}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }} className="block"
              >
                {dark ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            className="hidden md:inline-flex items-center gap-2 relative overflow-hidden bg-linear-to-r from-blue-600 to-teal-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 group"
          >
            <span className="relative z-10">Get Support</span>
            <span className="absolute inset-0 bg-linear-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }} className="block"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {l.dropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          if (l.dropdown === 'services') setMobileServices(s => !s)
                          else if (l.dropdown === 'programs') setMobilePrograms(s => !s)
                          else setMobileTeam(s => !s)
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 font-medium hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 transition-colors"
                      >
                        <span>{l.label}</span>
                        <motion.span
                          animate={{ rotate: (l.dropdown === 'services' ? mobileServices : l.dropdown === 'programs' ? mobilePrograms : mobileTeam) ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown size={15} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {((l.dropdown === 'services' && mobileServices) || (l.dropdown === 'programs' && mobilePrograms) || (l.dropdown === 'team' && mobileTeam)) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden ml-4 mt-1 space-y-0.5"
                          >
                            {(l.dropdown === 'services' ? services : l.dropdown === 'programs' ? programs : team).map(({ icon: Icon, label, name, role, image, href, tags }) => (
                              l.dropdown === 'team' ? (
                                <div key={name} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 text-sm">
                                  <img src={image} alt={name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                                  <div>
                                    <p className="text-slate-800 dark:text-slate-200 text-xs font-semibold">{name}</p>
                                    <p className="text-slate-400 text-xs">{role}</p>
                                  </div>
                                </div>
                              ) : (
                                <a
                                  key={label}
                                  href={href || '#contact'}
                                  onClick={() => { setOpen(false); setMobileServices(false); setMobilePrograms(false); setMobileTeam(false) }}
                                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 text-sm hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 transition-colors"
                                >
                                  <Icon size={14} className="text-blue-500 shrink-0" />
                                  {label}
                                </a>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={l.href}
                      onClick={(e) => {
                        if (l.href.startsWith('/')) { e.preventDefault(); navigate(l.href); setOpen(false) }
                        else setOpen(false)
                      }}
                      className="flex items-center px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 font-medium hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 transition-colors"
                    >
                      {l.label}
                    </a>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-3 space-y-2 border-t border-slate-100 dark:border-slate-800"
              >
                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <Phone size={15} className="text-blue-500" />
                  1-800-555-1234
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-linear-to-r from-blue-600 to-teal-500 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-blue-600/20"
                >
                  Get Support
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
