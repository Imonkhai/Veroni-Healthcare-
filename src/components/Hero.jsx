import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, MessageCircle, Star, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85',
    alt: 'Healthcare professional with patient',
    badge: 'Trusted Healthcare & Support Services',
    headline: ['Empowering Lives,', 'One Family', 'at a Time'],
    highlight: 1,
    desc: 'Veroni Healthcare Services delivers compassionate, evidence-based behavioral therapy, autism support, and developmental disability programs — designed around your family\'s unique needs.',
    page: '/about-us',
  },
  {
    url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85',
    alt: 'Caring therapy session',
    badge: 'Evidence-Based Autism Support',
    headline: ['Transforming Lives', 'Through', 'ABA Therapy'],
    highlight: 1,
    desc: 'Our BCBA-certified clinicians design individualized ABA therapy programs that unlock each child\'s potential — building skills, confidence, and independence every step of the way.',
    page: '/aba-therapy',
  },
  {
    url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&q=85',
    alt: 'Doctor consulting with family',
    badge: 'Family-Centered Care',
    headline: ['Your Family', 'Is at the Heart', 'of Everything We Do'],
    highlight: 0,
    desc: 'We partner with families as active members of the care team — providing coaching, training, and ongoing support so that progress extends far beyond our clinic walls.',
    page: '/family-care',
  },
  {
    url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=85',
    alt: 'Medical team collaboration',
    badge: 'Certified & Experienced Professionals',
    headline: ['A Team You Can', 'Trust With', 'What Matters Most'],
    highlight: 2,
    desc: 'Our multidisciplinary team of BCBAs, social workers, and support specialists brings decades of combined expertise — united by a shared commitment to changing lives.',
    page: '/our-team',
  },
  {
    url: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1600&q=85',
    alt: 'Behavioral therapy with child',
    badge: 'Children\'s Programs & Early Intervention',
    headline: ['Early Support', 'Builds a', 'Brighter Future'],
    highlight: 2,
    desc: 'Early intervention is the most powerful tool we have. Our children\'s programs provide the foundation for lifelong learning, communication, and social connection.',
    page: '/childrens-programs',
  },
  {
    url: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1600&q=85',
    alt: 'Community healthcare support',
    badge: 'Community Integration & Support',
    headline: ['Building Belonging', 'in Every', 'Community'],
    highlight: 1,
    desc: 'We believe every individual deserves to live, work, and thrive in their community. Our programs foster independence, inclusion, and meaningful participation in everyday life.',
    page: '/community-programs',
  },
]

const stats = [
  { icon: TrendingUp, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '1,000+', label: 'Families Supported' },
  { icon: Award, value: '50+', label: 'Certified Staff' },
  { icon: Star, value: '95%', label: 'Satisfaction Rate' },
]

const textVariants = {
  enter: { opacity: 0, y: 28 },
  center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: 'easeIn' } },
}

export default function Hero() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const prev = () => { setDir(-1); setCurrent(i => (i - 1 + slides.length) % slides.length) }
  const next = () => { setDir(1); setCurrent(i => (i + 1) % slides.length) }

  useEffect(() => {
    const timer = setInterval(() => { next() }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Slideshow background */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.03 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/70 to-slate-900/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 active:scale-90 transition-all group"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 active:scale-90 transition-all group"
      >
        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === current ? 'w-8 h-2 bg-teal-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — animated text per slide */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  {slide.badge}
                </div>

                {/* Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                  {slide.headline.map((line, i) =>
                    i === slide.highlight ? (
                      <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300 block">
                        {line}
                      </span>
                    ) : (
                      <span key={i} className="block">{line}</span>
                    )
                  )}
                </h1>

                {/* Description */}
                <p className="text-blue-100/80 text-lg leading-relaxed mb-6 max-w-xl">
                  {slide.desc}
                </p>

                {/* Read More */}
                <button
                  onClick={() => navigate(slide.page)}
                  className="inline-flex items-center gap-2 text-teal-300 hover:text-white border border-teal-400/40 hover:border-white/40 text-sm font-semibold px-5 py-2.5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all group mb-8"
                >
                  Read More
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* CTAs — static, don't re-animate */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/40 active:scale-95 group"
              >
                Get Support
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 glass text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all active:scale-95"
              >
                <MessageCircle size={18} />
                Contact Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 text-blue-200/70 text-sm">
              {['BCBA Certified', 'CARF Accredited', 'Medicaid Accepted', 'Insurance Friendly'].map(b => (
                <span key={b} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — floating rating card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="hidden lg:flex flex-col gap-4 items-end"
          >
            <div className="glass rounded-2xl p-5 max-w-xs w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center shrink-0">
                  <Star size={18} className="text-white" fill="white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Rated #1 in Compassionate Care</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400" fill="#facc15" />
                    ))}
                    <span className="text-white/70 text-xs ml-1">4.9 / 5 (320+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass rounded-2xl p-5 text-center hover:bg-white/20 transition-colors">
              <Icon size={22} className="text-teal-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-blue-200/70 text-sm mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" className="dark:fill-slate-950" />
        </svg>
      </div>
    </section>
  )
}
