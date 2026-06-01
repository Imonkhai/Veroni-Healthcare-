import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const posts = [
  {
    tag: 'Autism',
    title: "Understanding ABA Therapy: A Parent's Complete Guide",
    excerpt: "Applied Behavior Analysis is the gold standard for autism treatment. Here's everything families need to know before starting.",
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
    readTime: '6 min read',
    date: 'Jan 15, 2025',
  },
  {
    tag: 'Family Support',
    title: "5 Strategies to Support Your Child's Behavior at Home",
    excerpt: 'Practical, evidence-based techniques that parents can implement immediately to reduce challenging behaviors and build positive skills.',
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=600&q=80',
    readTime: '4 min read',
    date: 'Jan 8, 2025',
  },
  {
    tag: 'Resources',
    title: 'Navigating Disability Funding: What Families Need to Know',
    excerpt: 'A comprehensive overview of government funding programs, insurance coverage, and financial assistance available for disability services.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    readTime: '8 min read',
    date: 'Dec 28, 2024',
  },
  {
    tag: 'Autism',
    title: 'Early Signs of Autism: What Every Parent Should Know',
    excerpt: 'Recognizing early signs of autism can make a significant difference. Learn what to look for and when to seek an evaluation.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
  },
  {
    tag: 'Family Support',
    title: 'Caregiver Burnout: Recognizing the Signs and Finding Support',
    excerpt: 'Caring for a loved one with a disability is rewarding but demanding. Here is how to recognize burnout and where to find help.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
    readTime: '5 min read',
    date: 'Dec 5, 2024',
  },
  {
    tag: 'Resources',
    title: 'Building Social Skills in Children with Autism',
    excerpt: 'Social skills are foundational to quality of life. Discover evidence-based strategies to help children with autism build meaningful connections.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    readTime: '7 min read',
    date: 'Nov 22, 2024',
  },
]

const tagColors = {
  'Autism': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'Family Support': 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  'Resources': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
}

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export default function BlogPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">

      {/* Hero */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=85" alt="Blog" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Resources & Blog
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Insights for Families &{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-teal-300">Caregivers</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Expert articles, practical guides, and resources to help families navigate behavioral health, autism support, and disability services.
          </motion.p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(({ tag, title, excerpt, image, readTime, date }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <article className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md shadow-slate-200/60 dark:shadow-black/20 card-hover group cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden h-52">
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[tag]}`}>
                        <Tag size={10} />{tag}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock size={11} />{readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">{excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-slate-400 text-xs">{date}</span>
                      <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
