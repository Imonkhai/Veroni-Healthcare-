import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'

const jobs = [
  { title: 'Board Certified Behavior Analyst (BCBA)', type: 'Full-Time', location: 'Toronto, ON', dept: 'Clinical' },
  { title: 'Registered Behavior Technician (RBT)', type: 'Full-Time / Part-Time', location: 'Multiple Locations', dept: 'Clinical' },
  { title: 'Direct Support Professional (DSP)', type: 'Full-Time', location: 'Toronto, ON', dept: 'Residential' },
  { title: 'Family Support Coordinator', type: 'Full-Time', location: 'Remote / Hybrid', dept: 'Support Services' },
]

export default function Careers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="careers" ref={ref} className="py-20 lg:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Careers</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
              Join a Team That{' '}
              <span className="gradient-text">Changes Lives</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              At Veroni Healthcare Services, our people are our greatest asset. We offer competitive compensation, ongoing professional development, a supportive culture, and the privilege of doing work that truly matters.
            </p>
            <ul className="space-y-2.5 mb-8">
              {['Competitive salary & benefits', 'Paid clinical supervision hours', 'Ongoing training & CEU support', 'Flexible scheduling options', 'Inclusive & supportive culture'].map(b => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 bg-teal-500 rounded-full" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
            >
              View All Openings
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="space-y-3">
            {jobs.map(({ title, type, location, dept }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex items-center justify-between gap-4 card-hover group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 transition-colors">{title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                        <MapPin size={11} /> {location}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                        <Clock size={11} /> {type}
                      </span>
                      <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">
                        {dept}
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
