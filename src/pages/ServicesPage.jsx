import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Puzzle, GraduationCap, Users, Baby, Home, Sun, HeartHandshake, ArrowRight } from 'lucide-react'

const services = [
  { icon: Brain, color: 'blue', title: 'Behavioral Consultation', desc: 'Comprehensive functional behavior assessments and individualized behavior intervention plans developed by BCBA-certified clinicians.' },
  { icon: Puzzle, color: 'teal', title: 'Autism Therapy Services', desc: "Applied Behavior Analysis (ABA) therapy tailored to each child's unique profile, goals, and learning style." },
  { icon: GraduationCap, color: 'purple', title: 'Staff Training Programs', desc: 'Accredited training for caregivers, DSPs, and healthcare professionals in evidence-based behavioral strategies.' },
  { icon: Users, color: 'orange', title: 'Support Worker Staffing', desc: "Qualified, vetted support workers matched to your individual or organization's specific needs and values." },
  { icon: Baby, color: 'pink', title: "Children's Programs", desc: 'Early intervention, social skills groups, and school-readiness programs for children ages 2–12.' },
  { icon: Home, color: 'green', title: 'Residential & Respite Care', desc: 'Safe, nurturing residential placements and short-term respite care to support families and caregivers.' },
  { icon: Sun, color: 'yellow', title: 'Day Programs', desc: 'Structured daytime activities promoting skill development, independence, and community participation.' },
  { icon: HeartHandshake, color: 'red', title: 'Family Support Services', desc: 'Parent coaching, family counseling, and navigation support to help families thrive together.' },
]

const colorMap = {
  blue:   { bg: 'bg-blue-50 dark:bg-blue-900/20',   icon: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600',   border: 'border-blue-100 dark:border-blue-800',   btn: 'text-blue-600 hover:text-blue-700' },
  teal:   { bg: 'bg-teal-50 dark:bg-teal-900/20',   icon: 'bg-teal-100 dark:bg-teal-900/40 text-teal-600',   border: 'border-teal-100 dark:border-teal-800',   btn: 'text-teal-600 hover:text-teal-700' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', icon: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600', border: 'border-purple-100 dark:border-purple-800', btn: 'text-purple-600 hover:text-purple-700' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', icon: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600', border: 'border-orange-100 dark:border-orange-800', btn: 'text-orange-600 hover:text-orange-700' },
  pink:   { bg: 'bg-pink-50 dark:bg-pink-900/20',   icon: 'bg-pink-100 dark:bg-pink-900/40 text-pink-600',   border: 'border-pink-100 dark:border-pink-800',   btn: 'text-pink-600 hover:text-pink-700' },
  green:  { bg: 'bg-green-50 dark:bg-green-900/20', icon: 'bg-green-100 dark:bg-green-900/40 text-green-600', border: 'border-green-100 dark:border-green-800', btn: 'text-green-600 hover:text-green-700' },
  yellow: { bg: 'bg-yellow-50 dark:bg-yellow-900/20', icon: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600', border: 'border-yellow-100 dark:border-yellow-800', btn: 'text-yellow-600 hover:text-yellow-700' },
  red:    { bg: 'bg-red-50 dark:bg-red-900/20',     icon: 'bg-red-100 dark:bg-red-900/40 text-red-600',     border: 'border-red-100 dark:border-red-800',     btn: 'text-red-600 hover:text-red-700' },
}

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">

      {/* Hero */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85" alt="Our Services" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            What We Offer
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Comprehensive Care for Every{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-teal-300">Stage of Life</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/80 text-lg max-w-3xl mx-auto leading-relaxed">
            From early childhood intervention to adult community support, our full spectrum of services is designed to meet individuals and families wherever they are.
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Our Services</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Everything You Need, <span className="gradient-text">All in One Place</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Each service is delivered by certified professionals and tailored to the unique needs of every individual and family we serve.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, color, title, desc }, i) => {
              const c = colorMap[color]
              return (
                <FadeUp key={title} delay={i * 0.07}>
                  <div className={`card-hover ${c.bg} border ${c.border} rounded-2xl p-6 flex flex-col h-full`}>
                    <div className={`w-11 h-11 rounded-xl ${c.icon} flex items-center justify-center mb-4`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2">{title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
                    <a href="/#contact" className={`mt-4 flex items-center gap-1 text-sm font-semibold ${c.btn} transition-colors group`}>
                      Get Started
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <FadeUp>
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5">Not Sure Which Service Is Right for You?</h2>
            <p className="text-blue-100/80 leading-relaxed mb-8">Our team is here to help. Book a free consultation and we'll guide you to the right support.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/40 active:scale-95">
              Book a Free Consultation
            </a>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}
