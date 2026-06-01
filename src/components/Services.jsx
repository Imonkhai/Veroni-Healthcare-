import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Puzzle, GraduationCap, Users, Baby, Home, Sun, HeartHandshake, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Brain,
    color: 'blue',
    title: 'Behavioral Consultation',
    desc: 'Comprehensive functional behavior assessments and individualized behavior intervention plans developed by BCBA-certified clinicians.',
  },
  {
    icon: Puzzle,
    color: 'teal',
    title: 'Autism Therapy Services',
    desc: 'Applied Behavior Analysis (ABA) therapy tailored to each child\'s unique profile, goals, and learning style.',
  },
  {
    icon: GraduationCap,
    color: 'purple',
    title: 'Staff Training Programs',
    desc: 'Accredited training for caregivers, DSPs, and healthcare professionals in evidence-based behavioral strategies.',
  },
  {
    icon: Users,
    color: 'orange',
    title: 'Support Worker Staffing',
    desc: 'Qualified, vetted support workers matched to your individual or organization\'s specific needs and values.',
  },
  {
    icon: Baby,
    color: 'pink',
    title: "Children's Programs",
    desc: 'Early intervention, social skills groups, and school-readiness programs for children ages 2–12.',
  },
  {
    icon: Home,
    color: 'green',
    title: 'Residential & Respite Care',
    desc: 'Safe, nurturing residential placements and short-term respite care to support families and caregivers.',
  },
  {
    icon: Sun,
    color: 'yellow',
    title: 'Day Programs',
    desc: 'Structured daytime activities promoting skill development, independence, and community participation.',
  },
  {
    icon: HeartHandshake,
    color: 'red',
    title: 'Family Support Services',
    desc: 'Parent coaching, family counseling, and navigation support to help families thrive together.',
  },
]

const colorMap = {
  blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', icon: 'bg-blue-200 dark:bg-blue-900/50 text-blue-700', border: 'border-blue-200 dark:border-blue-700', btn: 'text-blue-700 hover:text-blue-800' },
  teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', icon: 'bg-teal-200 dark:bg-teal-900/50 text-teal-700', border: 'border-teal-200 dark:border-teal-700', btn: 'text-teal-700 hover:text-teal-800' },
  purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', icon: 'bg-purple-200 dark:bg-purple-900/50 text-purple-700', border: 'border-purple-200 dark:border-purple-700', btn: 'text-purple-700 hover:text-purple-800' },
  orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', icon: 'bg-orange-200 dark:bg-orange-900/50 text-orange-700', border: 'border-orange-200 dark:border-orange-700', btn: 'text-orange-700 hover:text-orange-800' },
  pink: { bg: 'bg-pink-100 dark:bg-pink-900/30', icon: 'bg-pink-200 dark:bg-pink-900/50 text-pink-700', border: 'border-pink-200 dark:border-pink-700', btn: 'text-pink-700 hover:text-pink-800' },
  green: { bg: 'bg-green-100 dark:bg-green-900/30', icon: 'bg-green-200 dark:bg-green-900/50 text-green-700', border: 'border-green-200 dark:border-green-700', btn: 'text-green-700 hover:text-green-800' },
  yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', icon: 'bg-yellow-200 dark:bg-yellow-900/50 text-yellow-700', border: 'border-yellow-200 dark:border-yellow-700', btn: 'text-yellow-700 hover:text-yellow-800' },
  red: { bg: 'bg-red-100 dark:bg-red-900/30', icon: 'bg-red-200 dark:bg-red-900/50 text-red-700', border: 'border-red-200 dark:border-red-700', btn: 'text-red-700 hover:text-red-800' },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 section-gradient dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Our Services</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Comprehensive Care for Every{' '}
            <span className="gradient-text">Stage of Life</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            From early childhood intervention to adult community support, our full spectrum of services is designed to meet individuals and families wherever they are.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, color, title, desc }, i) => {
            const c = colorMap[color]
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`card-hover ${c.bg} border ${c.border} rounded-2xl p-6 flex flex-col`}
              >
                <div className={`w-11 h-11 rounded-xl ${c.icon} flex items-center justify-center mb-4`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
                <button className={`mt-4 flex items-center gap-1 text-sm font-semibold ${c.btn} transition-colors group`}>
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
