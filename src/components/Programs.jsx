import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Baby, User, Globe, Briefcase, Music } from 'lucide-react'

const programs = [
  {
    id: 'children',
    icon: Baby,
    label: "Children's Services",
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80',
    headline: 'Early Intervention & Childhood Support',
    desc: 'Our children\'s programs focus on early identification and intervention for autism and developmental delays. Through play-based ABA therapy, speech support, and social skills training, we help children build the foundation for lifelong success.',
    items: ['Early Intensive Behavioral Intervention (EIBI)', 'Social Skills Groups (ages 3–12)', 'School Readiness Programs', 'Parent-Mediated Therapy', 'Sensory Integration Support'],
  },
  {
    id: 'adult',
    icon: User,
    label: 'Adult Services',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80',
    headline: 'Independence & Life Skills for Adults',
    desc: 'We support adults with developmental disabilities in achieving greater independence, meaningful employment, and active community participation through individualized life skills training and behavioral support.',
    items: ['Independent Living Skills Training', 'Supported Employment Programs', 'Behavioral Support Plans', 'Residential Care Coordination', 'Crisis Intervention Services'],
  },
  {
    id: 'community',
    icon: Globe,
    label: 'Community Programs',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80',
    headline: 'Building Connections in the Community',
    desc: 'Our community integration programs help individuals develop social connections, navigate public spaces, and participate fully in their communities — building confidence and belonging.',
    items: ['Community Access & Navigation', 'Peer Mentorship Programs', 'Inclusive Recreation Activities', 'Transportation Support', 'Community Safety Training'],
  },
  {
    id: 'vocational',
    icon: Briefcase,
    label: 'Vocational Training',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80',
    headline: 'Pathways to Meaningful Employment',
    desc: 'We partner with local employers and provide job coaching, workplace readiness training, and ongoing support to help individuals with disabilities secure and maintain meaningful employment.',
    items: ['Job Readiness Workshops', 'Resume & Interview Coaching', 'On-the-Job Support', 'Employer Partnership Network', 'Workplace Accommodation Planning'],
  },
  {
    id: 'recreational',
    icon: Music,
    label: 'Recreational Activities',
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=700&q=80',
    headline: 'Fun, Growth & Social Connection',
    desc: 'Recreation is essential to wellbeing. Our structured recreational programs provide safe, inclusive environments for individuals to explore hobbies, build friendships, and enjoy life to the fullest.',
    items: ['Arts & Crafts Therapy', 'Sports & Fitness Programs', 'Music & Drama Groups', 'Cooking & Life Skills Clubs', 'Summer Camp Programs'],
  },
]

export default function Programs() {
  const [active, setActive] = useState('children')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const current = programs.find(p => p.id === active)

  return (
    <section id="programs" ref={ref} className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Programs & Support</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Programs Designed for{' '}
            <span className="gradient-text">Every Individual</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            From early childhood through adulthood, our programs meet people where they are and help them go further.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {programs.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-10 items-center bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 dark:shadow-black/30"
          >
            <div className="relative h-64 lg:h-full min-h-[320px]">
              <img src={current.image} alt={current.headline} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/10 dark:to-slate-800/20" />
            </div>
            <div className="p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">{current.headline}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{current.desc}</p>
              <ul className="space-y-2.5">
                {current.items.map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
              >
                Enquire About This Program
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
