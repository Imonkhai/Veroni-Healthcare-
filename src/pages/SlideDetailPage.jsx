import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'

export default function SlideDetailPage({ slide }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">

      {/* Hero */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {slide.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-blue-100/80 text-lg leading-relaxed max-w-2xl"
          >
            {slide.intro}
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top back button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex justify-end mb-10"
          >
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Body */}
            <div className="lg:col-span-2 space-y-8">
              {slide.sections.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">{s.heading}</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {slide.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle size={16} className="text-teal-500 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Ready to Get Started?</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Contact our team today for a free consultation.</p>
                <a
                  href="/#contact"
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                >
                  Book a Free Consultation
                </a>
              </motion.div>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
