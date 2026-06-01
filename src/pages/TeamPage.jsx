import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link, Mail, Award, Users, Heart, Star } from 'lucide-react'

const leadership = [
  {
    name: 'Dr. Amara Osei',
    role: 'Executive Director & BCBA-D',
    image: 'https://i.pravatar.cc/400?img=47',
    bio: 'PhD in Applied Behavior Analysis with 18 years of clinical and leadership experience in autism and developmental services. Dr. Osei founded Veroni Healthcare Services with a vision to create a world-class, family-centered care organization.',
    tags: ['BCBA-D', 'PhD', '18 Yrs Exp'],
    specialties: ['Organizational Leadership', 'Autism Spectrum Disorder', 'Clinical Supervision'],
  },
  {
    name: 'Michael Chen, MSW',
    role: 'Director of Clinical Services',
    image: 'https://i.pravatar.cc/400?img=11',
    bio: 'Master of Social Work with specialization in family systems and trauma-informed care for individuals with complex needs. Michael oversees all clinical programs and ensures the highest standards of evidence-based practice.',
    tags: ['MSW', 'LCSW', '14 Yrs Exp'],
    specialties: ['Family Systems Therapy', 'Trauma-Informed Care', 'Program Development'],
  },
  {
    name: 'Dr. Fatima Al-Hassan',
    role: 'Lead Behavioral Consultant',
    image: 'https://i.pravatar.cc/400?img=45',
    bio: 'Board-certified behavior analyst specializing in functional behavior assessment and positive behavior support for children and adults. Dr. Al-Hassan leads our behavioral consultation team and staff training initiatives.',
    tags: ['BCBA', 'PhD', '12 Yrs Exp'],
    specialties: ['Functional Behavior Assessment', 'Positive Behavior Support', 'Staff Training'],
  },
  {
    name: 'James Okafor, RBT',
    role: 'Senior Program Coordinator',
    image: 'https://i.pravatar.cc/400?img=15',
    bio: 'Registered Behavior Technician and program coordinator with expertise in residential care and community integration services. James is the bridge between clinical teams and the families we serve.',
    tags: ['RBT', 'BA Psychology', '10 Yrs Exp'],
    specialties: ['Residential Care', 'Community Integration', 'Family Liaison'],
  },
]

const staff = [
  { name: 'Sarah Williams', role: 'Senior ABA Therapist', image: 'https://i.pravatar.cc/200?img=32', tags: ['RBT', 'ABA'] },
  { name: 'David Mensah', role: 'Behavioral Technician', image: 'https://i.pravatar.cc/200?img=13', tags: ['RBT', 'DSP'] },
  { name: 'Priya Sharma', role: 'Family Support Coordinator', image: 'https://i.pravatar.cc/200?img=44', tags: ['BSW', 'FSC'] },
  { name: 'Carlos Rivera', role: 'Community Support Worker', image: 'https://i.pravatar.cc/200?img=17', tags: ['DSP', 'CSW'] },
  { name: 'Aisha Nkrumah', role: 'Occupational Therapist', image: 'https://i.pravatar.cc/200?img=56', tags: ['OT', 'MSc'] },
  { name: 'Tom Bradley', role: 'Vocational Coach', image: 'https://i.pravatar.cc/200?img=18', tags: ['VC', 'BA Ed'] },
  { name: 'Linda Park', role: 'Respite Care Specialist', image: 'https://i.pravatar.cc/200?img=48', tags: ['RCS', 'DSP'] },
  { name: 'Emmanuel Boateng', role: 'Day Program Facilitator', image: 'https://i.pravatar.cc/200?img=14', tags: ['DPF', 'BA'] },
]

const values = [
  { icon: Heart, title: 'Compassion First', desc: 'Every decision we make is guided by genuine care for the individuals and families we serve.' },
  { icon: Award, title: 'Clinical Excellence', desc: 'We hold ourselves to the highest standards of evidence-based practice and continuous learning.' },
  { icon: Users, title: 'Collaborative Spirit', desc: 'We work as one unified team — clinicians, coordinators, and families — toward shared goals.' },
  { icon: Star, title: 'Integrity Always', desc: 'We are transparent, accountable, and honest in everything we do.' },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function TeamPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">

      {/* Hero */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&q=85"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            The Experts Behind{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-teal-300">
              Your Care
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/80 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Our multidisciplinary team brings together decades of expertise in behavioral health, social work, and community support — united by a shared passion for changing lives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-10 mt-12"
          >
            {[['50+', 'Team Members'], ['15+', 'Yrs Combined Exp.'], ['100%', 'Certified Staff'], ['4.9★', 'Staff Rating']].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-white">{val}</div>
                <div className="text-blue-200/70 text-sm mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Leadership</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Meet Our <span className="gradient-text">Leadership Team</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Visionary leaders with deep clinical expertise and an unwavering commitment to the communities we serve.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map(({ name, role, image, bio, tags, specialties }, i) => (
              <FadeUp key={name} delay={i * 0.1}>
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 card-hover group">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative sm:w-48 shrink-0 overflow-hidden">
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{name}</h3>
                        <p className="text-blue-600 font-semibold text-sm mb-3">{role}</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{bio}</p>
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Specialties</p>
                          <ul className="space-y-1">
                            {specialties.map(s => (
                              <li key={s} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full shrink-0" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {tags.map(t => (
                            <span key={t} className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">{t}</span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 shadow border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-colors">
                            <Link size={13} />
                          </button>
                          <button className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 shadow border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-colors">
                            <Mail size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">What Drives Us</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Our Team <span className="gradient-text">Values</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 card-hover text-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Our Staff</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                The People Who Make It <span className="gradient-text">Happen</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Behind every success story is a dedicated team member who showed up with skill, heart, and purpose.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {staff.map(({ name, role, image, tags }, i) => (
              <FadeUp key={name} delay={i * 0.07}>
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 card-hover group text-center p-5">
                  <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-white dark:ring-slate-700 shadow-md group-hover:ring-blue-200 transition-all">
                    <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{name}</h3>
                  <p className="text-blue-600 text-xs font-medium mt-0.5 mb-3">{role}</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {tags.map(t => (
                      <span key={t} className="text-[10px] bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <FadeUp>
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <span className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">Join Our Team</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5">
              Passionate About Making a Difference?
            </h2>
            <p className="text-blue-100/80 leading-relaxed mb-8">
              We're always looking for dedicated professionals who share our commitment to compassionate, evidence-based care. Explore open positions and become part of the Veroni family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#careers" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/40 active:scale-95">
                View Open Positions
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 glass text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all active:scale-95">
                Contact Us
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}
