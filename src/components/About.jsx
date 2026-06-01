import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, ShieldCheck, HeartHandshake } from 'lucide-react'

const pillars = [
  { icon: ShieldCheck, title: 'BCBA-Certified Clinicians', desc: 'Every program is designed and supervised by board-certified behavior analysts.' },
  { icon: HeartHandshake, title: 'Family-Centered Approach', desc: 'We partner with families at every step, ensuring care extends beyond our walls.' },
  { icon: Target, title: 'Evidence-Based Methods', desc: 'Our interventions are grounded in the latest peer-reviewed research and best practices.' },
  { icon: Eye, title: 'Transparent & Accountable', desc: 'Regular progress reports and open communication keep families fully informed.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } : { opacity: 0, y: 24 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80"
                alt="Caring healthcare team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  from-blue-900/30 to-transparent" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' } } : { opacity: 0, y: 24 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-5 border border-slate-100 dark:border-slate-700"
            >
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Years of<br />Trusted Care</div>
            </motion.div>

            {/* Accent shape */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 dark:bg-teal-900/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' } } : { opacity: 0, y: 24 }}
              className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3"
            >
              About Veroni Healthcare Services
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } } : { opacity: 0, y: 24 }}
              className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-5"
            >
              Compassionate Care Built on{' '}
              <span className="gradient-text">Science & Heart</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' } } : { opacity: 0, y: 24 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6"
            >
              Veroni Healthcare Services is a premier provider of behavioral health and social support services. For over 15 years, we have walked alongside individuals with autism, developmental disabilities, and complex behavioral needs — and the families who love them.
            </motion.p>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.35, ease: 'easeOut' } } : { opacity: 0, y: 24 }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 border border-blue-100 dark:border-blue-800">
                <Target size={20} className="text-blue-600 mb-2" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Our Mission</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  To empower every individual to reach their fullest potential through personalized, compassionate, and evidence-based care.
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-4 border border-teal-100 dark:border-teal-800">
                <Eye size={20} className="text-teal-600 mb-2" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Our Vision</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  A world where every person with a disability lives with dignity, independence, and full community inclusion.
                </p>
              </div>
            </motion.div>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-3">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 + i * 0.08, ease: 'easeOut' } } : { opacity: 0, y: 24 }}
                  className="flex gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
