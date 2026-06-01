import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle } from 'lucide-react'

const serviceData = {
  'behavioral-consultation': {
    title: 'Behavioral Consultation',
    badge: 'Clinical Services',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85',
    intro: 'Comprehensive functional behavior assessments and individualized behavior intervention plans developed by BCBA-certified clinicians.',
    sections: [
      { heading: 'What is Behavioral Consultation?', body: 'Behavioral consultation involves a thorough assessment of an individual\'s behavior patterns, triggers, and environmental factors. Our BCBA-certified consultants conduct functional behavior assessments (FBAs) to identify the root causes of challenging behaviors and develop targeted, evidence-based intervention plans.' },
      { heading: 'Our Consultation Process', body: 'We begin with a comprehensive intake interview and direct observation, followed by standardized assessments. Our team then develops a detailed Behavior Intervention Plan (BIP) tailored to the individual\'s unique needs, which is reviewed and updated regularly based on data and progress.' },
      { heading: 'Who Can Benefit?', body: 'Our behavioral consultation services support individuals of all ages with autism spectrum disorder, developmental disabilities, intellectual disabilities, and complex behavioral challenges. We also provide consultation to schools, group homes, and other organizations.' },
    ],
    highlights: ['Functional Behavior Assessment (FBA)', 'Individualized Behavior Intervention Plans', 'BCBA-certified consultants', 'School & community consultation', 'Staff training & coaching', 'Regular progress monitoring'],
  },
  'autism-therapy': {
    title: 'Autism Therapy Services',
    badge: 'ABA Therapy',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85',
    intro: 'Applied Behavior Analysis (ABA) therapy tailored to each child\'s unique profile, goals, and learning style.',
    sections: [
      { heading: 'Evidence-Based ABA Therapy', body: 'Applied Behavior Analysis is the most researched and validated treatment for autism spectrum disorder. Our ABA programs are designed and supervised by Board Certified Behavior Analysts (BCBAs) and delivered by trained Registered Behavior Technicians (RBTs) in a warm, supportive environment.' },
      { heading: 'Our ABA Approach', body: 'We use naturalistic teaching strategies, play-based learning, and structured skill-building sessions to help children develop communication, social, adaptive, and academic skills. Every program is data-driven and continuously adjusted to maximize progress.' },
      { heading: 'Family Involvement', body: 'Families are essential partners in our ABA programs. We provide regular parent training, detailed progress reports, and open communication with your child\'s clinical team to ensure skills generalize to home and community settings.' },
    ],
    highlights: ['BCBA-supervised therapy', 'Early Intensive Behavioral Intervention (EIBI)', 'Naturalistic & play-based ABA', 'Social skills training', 'Parent coaching included', 'School generalization support'],
  },
  'staff-training': {
    title: 'Staff Training Programs',
    badge: 'Professional Development',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85',
    intro: 'Accredited training for caregivers, DSPs, and healthcare professionals in evidence-based behavioral strategies.',
    sections: [
      { heading: 'Comprehensive Training Programs', body: 'Our staff training programs equip caregivers, Direct Support Professionals (DSPs), school staff, and healthcare workers with the knowledge and skills to effectively support individuals with autism and developmental disabilities using evidence-based behavioral strategies.' },
      { heading: 'Training Curriculum', body: 'Programs cover Applied Behavior Analysis fundamentals, positive behavior support, crisis prevention and intervention, autism awareness, communication strategies, and self-care for caregivers. All training is delivered by BCBA-certified instructors.' },
      { heading: 'Flexible Delivery', body: 'We offer in-person workshops, online modules, and on-site organizational training. CEU credits are available for eligible professionals. Custom training packages can be developed for organizations with specific needs.' },
    ],
    highlights: ['BCBA-certified instructors', 'ABA fundamentals training', 'Crisis prevention & intervention', 'CEU credits available', 'In-person & online options', 'Custom organizational training'],
  },
  'support-staffing': {
    title: 'Support Worker Staffing',
    badge: 'Staffing Solutions',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=85',
    intro: 'Qualified, vetted support workers matched to your individual or organization\'s specific needs and values.',
    sections: [
      { heading: 'Quality Staffing Solutions', body: 'We provide highly qualified, thoroughly vetted support workers to individuals, families, and organizations. Every candidate undergoes rigorous background checks, reference verification, and skills assessment before placement.' },
      { heading: 'Our Matching Process', body: 'We take the time to understand the unique needs, preferences, and goals of each individual and family. Our matching process considers personality, skills, experience, and availability to ensure the best possible fit between support worker and client.' },
      { heading: 'Ongoing Support', body: 'Our staffing team provides ongoing supervision, training, and support to all placed workers. We maintain regular communication with families and organizations to ensure satisfaction and address any concerns promptly.' },
    ],
    highlights: ['Rigorous background checks', 'Skills & experience matching', 'Ongoing supervision & support', 'Flexible scheduling options', 'Temporary & permanent placements', 'Specialized disability experience'],
  },
  'childrens-programs': {
    title: "Children's Programs",
    badge: 'Early Intervention',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1600&q=85',
    intro: 'Early intervention, social skills groups, and school-readiness programs for children ages 2–12.',
    sections: [
      { heading: 'The Power of Early Intervention', body: 'Research consistently shows that early intervention — particularly before age 5 — produces the most significant and lasting outcomes for children with autism and developmental delays. Our children\'s programs are designed to maximize this critical window of opportunity.' },
      { heading: 'Our Children\'s Programs', body: 'We offer Early Intensive Behavioral Intervention (EIBI), play-based ABA therapy, social skills groups for ages 3–12, school readiness programs, and sensory integration support. Each program is tailored to the child\'s individual profile and delivered in a nurturing, engaging environment.' },
      { heading: 'School & Community Support', body: 'We work closely with schools and educators to ensure seamless transitions and skill generalization. Our team provides IEP consultation, teacher training, and school-based support to help children thrive in educational settings.' },
    ],
    highlights: ['Early Intensive Behavioral Intervention', 'Play-based ABA therapy', 'Social skills groups (ages 3–12)', 'School readiness programs', 'Sensory integration support', 'IEP consultation & school support'],
  },
  'residential-care': {
    title: 'Residential & Respite Care',
    badge: 'Residential Services',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&q=85',
    intro: 'Safe, nurturing residential placements and short-term respite care to support families and caregivers.',
    sections: [
      { heading: 'Residential Care', body: 'Our residential care program provides safe, supportive, and home-like environments for individuals with developmental disabilities who require 24-hour support. Each resident receives an individualized support plan focused on skill development, independence, and quality of life.' },
      { heading: 'Respite Care', body: 'Caring for a loved one with a disability is deeply rewarding but can also be exhausting. Our respite care services provide temporary relief for primary caregivers, giving families the break they need while ensuring their loved one receives high-quality, compassionate care.' },
      { heading: 'Our Commitment to Quality', body: 'All residential and respite staff are trained in positive behavior support, crisis prevention, and person-centered care. We maintain strict quality standards and conduct regular reviews to ensure the highest level of safety and wellbeing for all residents.' },
    ],
    highlights: ['24-hour residential support', 'Individualized support plans', 'Short-term respite care', 'Trained & certified staff', 'Person-centered approach', 'Regular quality reviews'],
  },
  'day-programs': {
    title: 'Day Programs',
    badge: 'Day Services',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=85',
    intro: 'Structured daytime activities promoting skill development, independence, and community participation.',
    sections: [
      { heading: 'About Our Day Programs', body: 'Our day programs provide structured, meaningful daytime activities for adults with developmental disabilities. Programs run Monday through Friday from 9am to 3pm and focus on skill development, community integration, vocational training, and recreational activities.' },
      { heading: 'Goal-Oriented Programming', body: 'Every minute at our day program is purposeful. We apply ABA principles to teach life skills, work toward personal goals, and build social connections. Each participant has an individualized program plan that is regularly reviewed and updated.' },
      { heading: 'Community Integration', body: 'We believe in the importance of community participation. Our programs include regular community outings, vocational experiences, and social activities that help participants build confidence, independence, and meaningful connections.' },
    ],
    highlights: ['Mon–Fri, 9am–3pm', 'Goal Oriented Program (GOP)', 'Individual Program Adjustment (IPA)', 'Community integration activities', 'Sensory room access', 'No suspension policy'],
  },
  'family-support': {
    title: 'Family Support Services',
    badge: 'Family Services',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=85',
    intro: 'Parent coaching, family counseling, and navigation support to help families thrive together.',
    sections: [
      { heading: 'Supporting the Whole Family', body: 'We recognize that when a family member has a disability, the entire family is affected. Our family support services are designed to strengthen the whole family system — providing practical skills, emotional support, and access to resources.' },
      { heading: 'Parent Coaching & Training', body: 'Our parent coaching programs teach families evidence-based strategies to support their loved one at home. Sessions are practical, hands-on, and tailored to each family\'s unique situation and goals. We empower parents to become confident, effective advocates and caregivers.' },
      { heading: 'Navigation & Advocacy', body: 'Navigating the disability services system can be overwhelming. Our family support coordinators help families access funding, connect with community resources, navigate school systems, and advocate for their loved one\'s rights and needs.' },
    ],
    highlights: ['Parent coaching & training', 'Family counseling services', 'Funding navigation support', 'School advocacy assistance', 'Sibling support groups', '24/7 crisis support line'],
  },
}

export const serviceRoutes = Object.entries(serviceData).map(([slug, data]) => ({
  path: `/services/${slug}`,
  slug,
  data,
}))

export default function ServiceDetailPage({ slug }) {
  const navigate = useNavigate()
  const service = serviceData[slug]
  if (!service) return null

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            {service.badge}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {service.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/80 text-lg max-w-2xl leading-relaxed">
            {service.intro}
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 text-sm font-medium mb-10 transition-colors group">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {service.sections.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">{s.heading}</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle size={16} className="text-teal-500 shrink-0 mt-0.5" />{h}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Ready to Get Started?</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Book a free consultation with our team today.</p>
                <a href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                  Book a Free Consultation
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
