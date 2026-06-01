import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent of a child with Autism',
    avatar: 'https://i.pravatar.cc/80?img=47',
    rating: 5,
    text: "Veroni Healthcare Services changed our family's life. Within six months of starting ABA therapy, our son made more progress than we'd seen in years. The team is compassionate, professional, and truly invested in our child's success.",
  },
  {
    name: 'James & Linda T.',
    role: 'Parents — Residential Care Program',
    avatar: 'https://i.pravatar.cc/80?img=32',
    rating: 5,
    text: "Finding the right residential placement for our daughter was terrifying. Veronni made the process seamless and gave us complete peace of mind. She is thriving, and we couldn't be more grateful.",
  },
  {
    name: 'Priya K.',
    role: 'Caregiver — Staff Training Graduate',
    avatar: 'https://i.pravatar.cc/80?img=44',
    rating: 5,
    text: "The staff training program was the most comprehensive I've ever attended. The BCBA instructors were knowledgeable, approachable, and gave us real-world tools we use every single day.",
  },
  {
    name: 'Marcus D.',
    role: 'Parent — Day Program',
    avatar: 'https://i.pravatar.cc/80?img=12',
    rating: 5,
    text: "My son looks forward to going to his day program every morning. The staff know him by name, understand his needs, and celebrate every milestone with us. That means everything.",
  },
  {
    name: 'Angela R.',
    role: 'Family Support Services Client',
    avatar: 'https://i.pravatar.cc/80?img=56',
    rating: 5,
    text: "The family coaching sessions gave me the confidence and skills to support my child at home. I no longer feel alone in this journey — Veronni is truly a partner in every sense of the word.",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIndex(i => (i + 1) % testimonials.length) }, 5000)
    return () => clearInterval(t)
  }, [])

  const go = (d) => { setDir(d); setIndex(i => (i + d + testimonials.length) % testimonials.length) }

  const variants = {
    enter: d => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    exit: d => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  }

  return (
    <section id="testimonials" ref={ref} className="py-20 lg:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Families Who Trust{' '}
            <span className="gradient-text">Veronni</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Real stories from the families and caregivers we're proud to serve.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-linear-to-br from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 lg:p-12 overflow-hidden"
        >
          <Quote size={64} className="absolute top-6 right-8 text-blue-100 dark:text-slate-700" />

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400" fill="#facc15" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
                "{testimonials[index].text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200 dark:ring-blue-700"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonials[index].name}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm">{testimonials[index].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-8">
            <button onClick={() => go(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow border border-slate-200 dark:border-slate-600 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors">
              <ChevronLeft size={18} className="text-slate-600 dark:text-slate-300" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-600'}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow border border-slate-200 dark:border-slate-600 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors">
              <ChevronRight size={18} className="text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
