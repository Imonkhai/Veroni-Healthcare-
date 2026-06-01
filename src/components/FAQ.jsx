import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What autism services does Veroni Healthcare Services provide?',
    a: 'We offer a comprehensive range of autism services including Applied Behavior Analysis (ABA) therapy, early intensive behavioral intervention (EIBI), social skills training, parent coaching, and school consultation. All programs are supervised by BCBA-certified clinicians.',
  },
  {
    q: 'How do I know if my child is eligible for services?',
    a: 'Eligibility is determined through an initial intake assessment. Generally, we serve individuals with autism spectrum disorder, developmental disabilities, intellectual disabilities, and related behavioral challenges. Contact us to schedule a free consultation.',
  },
  {
    q: 'What does the assessment process look like?',
    a: 'Our assessment process includes a comprehensive intake interview, standardized behavioral and developmental assessments, direct observation, and a review of existing reports. We then develop an individualized care plan in collaboration with the family.',
  },
  {
    q: 'Does Veronni accept insurance or government funding?',
    a: 'Yes. We accept most major insurance plans, Medicaid/OHIP, and various government-funded programs including developmental services funding. Our intake team will help you navigate funding options and verify your coverage.',
  },
  {
    q: 'What training programs do you offer for caregivers and staff?',
    a: 'We offer accredited training in Applied Behavior Analysis, crisis prevention and intervention, positive behavior support, and specialized autism care. Programs are available for parents, DSPs, school staff, and healthcare professionals.',
  },
  {
    q: 'How long does it take to start services after referral?',
    a: 'After receiving a referral, our team typically completes the intake process within 1–2 weeks. Service start times vary depending on program availability, but we work diligently to minimize wait times for all families.',
  },
  {
    q: 'Do you offer services in the home or only at your facility?',
    a: 'We offer flexible service delivery including in-home therapy, clinic-based programs, school-based support, and community settings. We work with families to determine the most effective and convenient setting for each individual.',
  },
  {
    q: 'What makes Veronni different from other providers?',
    a: 'Our combination of BCBA-certified clinical oversight, family-centered approach, evidence-based methods, and genuine compassion sets us apart. We treat every individual as a whole person — not just a diagnosis — and we measure our success by the real-world outcomes we achieve together.',
  },
]

function FAQItem({ q, a, open, toggle }) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors"
      >
        <span className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">{q}</span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 text-slate-600 dark:text-slate-400 text-sm leading-relaxed bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" ref={ref} className="py-20 lg:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">FAQ</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Have questions? We have answers. If you don't see yours here, reach out — we're happy to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={open === i}
              toggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
