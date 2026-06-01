import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BadgeCheck, FlaskConical, Fingerprint, Heart, Users, Globe } from 'lucide-react'

const features = [
  { icon: BadgeCheck, title: 'Certified Professionals', desc: 'All clinicians hold BCBA, RBT, or equivalent certifications with ongoing professional development.' },
  { icon: FlaskConical, title: 'Evidence-Based Care', desc: 'Every intervention is grounded in peer-reviewed research and proven clinical outcomes.' },
  { icon: Fingerprint, title: 'Personalized Programs', desc: 'No two individuals are alike. We build custom care plans tailored to each person\'s strengths and goals.' },
  { icon: Heart, title: 'Family-Focused Approach', desc: 'Families are active partners in care — we provide coaching, training, and ongoing support.' },
  { icon: Users, title: 'Experienced Team', desc: 'Our multidisciplinary team brings decades of combined experience across behavioral and social services.' },
  { icon: Globe, title: 'Community Integration', desc: 'We prioritize real-world skills and community participation to foster lasting independence.' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why-us" ref={ref} className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/60 to-transparent dark:from-blue-900/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-5"
            >
              The Veronni Difference —{' '}
              <span className="gradient-text">Care You Can Trust</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
            >
              Families choose Veronni because we combine clinical excellence with genuine compassion. We don't just provide services — we build lasting relationships that transform lives.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
            >
              Start Your Journey
            </motion.a>
          </div>

          {/* Right — feature grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1.5">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
