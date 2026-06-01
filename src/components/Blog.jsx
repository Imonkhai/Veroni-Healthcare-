import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const posts = [
  {
    tag: 'Autism',
    title: 'Understanding ABA Therapy: A Parent\'s Complete Guide',
    excerpt: 'Applied Behavior Analysis is the gold standard for autism treatment. Here\'s everything families need to know before starting.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80',
    readTime: '6 min read',
    date: 'Jan 15, 2025',
  },
  {
    tag: 'Family Support',
    title: '5 Strategies to Support Your Child\'s Behavior at Home',
    excerpt: 'Practical, evidence-based techniques that parents can implement immediately to reduce challenging behaviors and build positive skills.',
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=500&q=80',
    readTime: '4 min read',
    date: 'Jan 8, 2025',
  },
  {
    tag: 'Resources',
    title: 'Navigating Disability Funding: What Families Need to Know',
    excerpt: 'A comprehensive overview of government funding programs, insurance coverage, and financial assistance available for disability services.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80',
    readTime: '8 min read',
    date: 'Dec 28, 2024',
  },
]

const tagColors = {
  'Autism': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'Family Support': 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  'Resources': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
}

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="blog" ref={ref} className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Resources & Blog</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Insights for Families &{' '}
              <span className="gradient-text">Caregivers</span>
            </h2>
          </div>
          <a href="#blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all group">
            View All Articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(({ tag, title, excerpt, image, readTime, date }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md shadow-slate-200/60 dark:shadow-black/20 card-hover group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[tag]}`}>
                    <Tag size={10} />
                    {tag}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock size={11} />
                    {readTime}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">{date}</span>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
