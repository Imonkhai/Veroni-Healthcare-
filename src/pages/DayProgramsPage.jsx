import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Target, Users, Globe, Star, Clock, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const objectives = [
  'Independence at its highest level individualized for the participant.',
  'Maximum skill building opportunities.',
  'Development and attainment of personal goals.',
  'Community integration.',
  'Building connections.',
]

const advantages = [
  'Goal Oriented Program (G.O.P.)',
  'Individual Program Adjustment (I.P.A.)',
  'Great Facilities (including Sensory Room)',
  'Access to Behavior Therapist',
  'No Suspensions',
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

export default function DayProgramsPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">

      {/* Hero */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=85"
            alt="Day Programs"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Programs & Support
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Day <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-teal-300">Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/80 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Providing opportunities to socialize, grow, and connect with the community — with dignity, respect, and purpose.
          </motion.p>

          {/* Quick info bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              { icon: Clock, text: 'Mon – Fri | 9am – 3pm' },
              { icon: Phone, text: '416-742-3282' },
              { icon: Mail, text: 'info@behaviorprise.com' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-blue-200/80 text-sm">
                <Icon size={15} className="text-teal-400 shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              <FadeUp>
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  About Our <span className="gradient-text">Day Programs</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Our day programs provide opportunities for our clients to have a place to socialize with peers and engage in vocational, recreational and community activities that would help them explore and connect with their communities. Our program also sets out to preserve client dignity and improve their self esteem and general quality of life.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The programs and activities that we run with the individuals we serve are driven by the uniqueness and individuality of each client. We emphasize and promote individual strengths so that when the clients engage in activities that they find easy and enjoy, there will be less opportunity for challenging behavior.
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  The programs seek to teach and maintain life skills that may replace challenging behaviour, and to enable everyone taking part in the program, to have fun in all ways possible with dignity and respect to self and others.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We operate specialized, structured programs offering a variety of recreational and skill building opportunities for people living with a Dual Diagnosis, Autism Spectrum Disorder and/or Developmental Disability. Participants are exposed to learning skills such as community safety, following routines, responding to group instructions, and developing social interaction skills.
                </p>
              </FadeUp>

              {/* 5 Core Objectives */}
              <FadeUp delay={0.15}>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-7 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                      <Target size={18} className="text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">5 Core Objectives of Our Program</h3>
                  </div>
                  <ul className="space-y-3">
                    {objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* IPA */}
              <FadeUp delay={0.2}>
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Individual Program Adjustment (IPA)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Individuality is a gift given to each one of us, and here at Veroni Healthcare, we are ready to support the individuality of each of our participants by developing and structuring an exclusive program designed to work specifically with each person.
                  </p>
                </div>
              </FadeUp>

              {/* GOP */}
              <FadeUp delay={0.25}>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Goal Oriented Program (GOP)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    At Veroni Healthcare we are not only supporting and supervising our participants like many other agencies do, but we also believe that every minute spent by the participants at our program must be directed towards achieving personal goals. We apply the principles and strategies of Applied Behavior Analysis (ABA) to teach skills and work towards achieving set goals and connecting with others.
                  </p>
                </div>
              </FadeUp>

              {/* No Suspensions note */}
              <FadeUp delay={0.3}>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                    <span className="font-bold">NB:</span> Clients will not be suspended from our program because of their challenging behavior unless suspension is part of a behavior teaching strategy.
                  </p>
                </div>
              </FadeUp>

              {/* Our Commitment */}
              <FadeUp delay={0.35}>
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-7 border border-slate-100 dark:border-slate-700">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">Our Commitment</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Veroni Healthcare is committed to ensuring access to necessary supports, dignity, respect, and access to the community regardless of challenging behaviors that may be occurring. We respect the individuality of every applicant and strive to give everyone an opportunity to be themselves as well as appropriately support them in their areas of need. Our staff are aware that difficult behaviors may arise, and they are trained to recognize and understand each client's escalation continuum and promptly respond as appropriate.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Veroni Advantage */}
              <FadeUp delay={0.1}>
                <div className="bg-linear-to-br from-blue-600 to-teal-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Star size={18} className="text-yellow-300" fill="#fde047" />
                    <h3 className="font-semibold text-base">The Veroni Healthcare Advantage</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {advantages.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle size={15} className="text-teal-200 shrink-0 mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Program Hours */}
              <FadeUp delay={0.15}>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={18} className="text-blue-600" />
                    <h3 className="font-semibold text-slate-900 dark:text-white">Program Hours</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-1">
                    <span className="font-semibold text-slate-800 dark:text-white">Monday – Friday</span>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">9:00 AM – 3:00 PM</p>
                </div>
              </FadeUp>

              {/* Contact */}
              <FadeUp delay={0.2}>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 space-y-3">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">For Enquiries</h3>
                  <a href="tel:4167423282" className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <Phone size={14} className="text-blue-500 shrink-0" />
                    416-742-3282
                  </a>
                  <a href="mailto:info@behaviorprise.com" className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <Mail size={14} className="text-blue-500 shrink-0" />
                    info@behaviorprise.com
                  </a>
                  <div className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <MapPin size={14} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>Locations coming soon.</span>
                  </div>
                </div>
              </FadeUp>

              {/* Register CTA */}
              <FadeUp delay={0.25}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Register Today</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Our programs run 5 days a week. Spots are limited — reach out today.</p>
                  <a
                    href="/#contact"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 group"
                  >
                    Get in Touch
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
