import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link, Mail } from 'lucide-react'

const team = [
  {
    name: 'Dr. Amara Osei',
    role: 'Executive Director & BCBA-D',
    image: 'https://i.pravatar.cc/300?img=47',
    bio: 'PhD in Applied Behavior Analysis with 18 years of clinical and leadership experience in autism and developmental services.',
    tags: ['BCBA-D', 'PhD', '18 Yrs Exp'],
  },
  {
    name: 'Michael Chen, MSW',
    role: 'Director of Clinical Services',
    image: 'https://i.pravatar.cc/300?img=11',
    bio: 'Master of Social Work with specialization in family systems and trauma-informed care for individuals with complex needs.',
    tags: ['MSW', 'LCSW', '14 Yrs Exp'],
  },
  {
    name: 'Dr. Fatima Al-Hassan',
    role: 'Lead Behavioral Consultant',
    image: 'https://i.pravatar.cc/300?img=45',
    bio: 'Board-certified behavior analyst specializing in functional behavior assessment and positive behavior support for children and adults.',
    tags: ['BCBA', 'PhD', '12 Yrs Exp'],
  },
  {
    name: 'James Okafor, RBT',
    role: 'Senior Program Coordinator',
    image: 'https://i.pravatar.cc/300?img=15',
    bio: 'Registered Behavior Technician and program coordinator with expertise in residential care and community integration services.',
    tags: ['RBT', 'BA Psychology', '10 Yrs Exp'],
  },
]

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="team" ref={ref} className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Our Team</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Meet the Experts Behind{' '}
            <span className="gradient-text">Your Care</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our multidisciplinary team brings together decades of expertise in behavioral health, social work, and community support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, image, bio, tags }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md shadow-slate-200/60 dark:shadow-black/20 card-hover group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
                  <button className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Link size={15} />
                  </button>
                  <button className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Mail size={15} />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base">{name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{role}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-3">{bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => (
                    <span key={t} className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
