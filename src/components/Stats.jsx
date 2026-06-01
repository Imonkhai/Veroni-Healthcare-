import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Award, Star, MapPin, Clock } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: 15, suffix: '+', label: 'Years of Experience', color: 'text-blue-400' },
  { icon: Users, value: 1000, suffix: '+', label: 'Families Supported', color: 'text-teal-400' },
  { icon: Award, value: 50, suffix: '+', label: 'Certified Staff', color: 'text-purple-400' },
  { icon: Star, value: 95, suffix: '%', label: 'Satisfaction Rate', color: 'text-yellow-400' },
  { icon: MapPin, value: 12, suffix: '+', label: 'Service Locations', color: 'text-pink-400' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Crisis Support', color: 'text-orange-400' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-20 lg:py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-blue-300 font-semibold text-sm tracking-widest uppercase mb-3">Our Impact</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
            Numbers That Tell Our Story
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map(({ icon: Icon, value, suffix, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 text-center hover:bg-white/20 transition-colors"
            >
              <Icon size={22} className={`${color} mx-auto mb-3`} />
              <div className={`text-3xl font-bold text-white mb-1`}>
                <Counter target={value} suffix={suffix} />
              </div>
              <div className="text-blue-200/70 text-xs leading-tight">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
