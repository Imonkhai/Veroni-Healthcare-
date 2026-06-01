import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, ShieldCheck, HeartHandshake, Award, Users, Heart, TrendingUp } from 'lucide-react'

const pillars = [
  { icon: ShieldCheck, title: 'BCBA-Certified Clinicians', desc: 'Every program is designed and supervised by board-certified behavior analysts.' },
  { icon: HeartHandshake, title: 'Family-Centered Approach', desc: 'We partner with families at every step, ensuring care extends beyond our walls.' },
  { icon: Target, title: 'Evidence-Based Methods', desc: 'Our interventions are grounded in the latest peer-reviewed research and best practices.' },
  { icon: Eye, title: 'Transparent & Accountable', desc: 'Regular progress reports and open communication keep families fully informed.' },
]

const stats = [
  { icon: TrendingUp, value: '15+', label: 'Years of Experience' },
  { icon: Users, value: '1,000+', label: 'Families Supported' },
  { icon: Award, value: '50+', label: 'Certified Staff' },
  { icon: Heart, value: '95%', label: 'Satisfaction Rate' },
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

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">

      {/* Hero */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85"
            alt="About Veroni Healthcare"
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Compassionate Care Built on{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-teal-300">
              Science & Heart
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/80 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            For over 15 years, Veroni Healthcare Services has walked alongside individuals with autism, developmental disabilities, and complex behavioral needs — and the families who love them.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass rounded-2xl p-5 text-center">
                <Icon size={20} className="text-teal-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-blue-200/70 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <FadeUp>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80"
                    alt="Veroni Healthcare team"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-blue-900/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-5 border border-slate-100 dark:border-slate-700">
                  <div className="text-4xl font-bold text-blue-600">15+</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Years of<br />Trusted Care</div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 dark:bg-teal-900/30 rounded-2xl -z-10" />
              </div>
            </FadeUp>

            {/* Content */}
            <div>
              <FadeUp delay={0.1}>
                <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
                  About Veroni Healthcare Services
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
                  Who We Are
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Veroni Healthcare Services is a premier provider of behavioral health and social support services. For over 15 years, we have walked alongside individuals with autism, developmental disabilities, and complex behavioral needs — and the families who love them.
                </p>
              </FadeUp>

              {/* Mission & Vision */}
              <FadeUp delay={0.2}>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 border border-blue-100 dark:border-blue-800">
                    <Target size={20} className="text-blue-600 mb-2" />
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Our Mission</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      To empower every individual to reach their fullest potential through personalized, compassionate, and evidence-based care.
                    </p>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-4 border border-teal-100 dark:border-teal-800">
                    <Eye size={20} className="text-teal-600 mb-2" />
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Our Vision</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      A world where every person with a disability lives with dignity, independence, and full community inclusion.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* Pillars */}
              <div className="grid sm:grid-cols-2 gap-3">
                {pillars.map(({ icon: Icon, title, desc }, i) => (
                  <FadeUp key={title} delay={0.25 + i * 0.08}>
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-0.5">{desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Why Families Trust Us</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                The Veroni <span className="gradient-text">Difference</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Families choose Veroni because we combine clinical excellence with genuine compassion. We don't just provide services — we build lasting relationships that transform lives.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Personalized Care Plans', desc: 'Every individual receives a fully customized care plan built around their unique strengths, goals, and circumstances.' },
              { title: 'Experienced Clinical Team', desc: 'Our BCBAs, social workers, and support specialists bring decades of combined expertise to every case.' },
              { title: 'Family Partnership', desc: 'We involve families at every stage — from assessment to goal-setting to ongoing progress reviews.' },
              { title: 'Community Integration', desc: 'We prioritize real-world skills and community participation to foster lasting independence.' },
              { title: 'Continuous Improvement', desc: 'We regularly review and adjust programs based on data, feedback, and the latest research.' },
              { title: 'Accessible & Inclusive', desc: 'We accept Medicaid, most insurance plans, and government funding to ensure care is accessible to all.' },
            ].map(({ title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 card-hover">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4">
                    <ShieldCheck size={18} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <FadeUp>
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100/80 leading-relaxed mb-8">
              Contact our team today for a free consultation. We're here to listen, answer your questions, and help you find the right support.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
            >
              Book a Free Consultation
            </a>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}
