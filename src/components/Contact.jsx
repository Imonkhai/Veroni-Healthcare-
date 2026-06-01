import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

const info = [
  { icon: Phone, label: 'Phone', value: '1-800-555-1234', href: 'tel:+18005551234' },
  { icon: Mail, label: 'Email', value: 'info@veronihealthcare.com', href: 'mailto:info@veronihealthcare.com' },
  { icon: MapPin, label: 'Address', value: '123 Care Boulevard, Toronto, ON M5V 2T6', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8am–6pm | Sat: 9am–2pm', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Contact Us</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Start Your{' '}
            <span className="gradient-text">Journey Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Reach out today for a free consultation. Our team is ready to listen, answer your questions, and help you find the right support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</div>
                  {href && href !== '#' ? (
                    <a href={href} className="text-slate-800 dark:text-slate-200 text-sm font-medium hover:text-blue-600 transition-colors">{value}</a>
                  ) : (
                    <span className="text-slate-800 dark:text-slate-200 text-sm font-medium">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/18005551234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-4 rounded-2xl transition-all hover:shadow-lg hover:shadow-green-500/30 active:scale-95"
            >
              <MessageCircle size={20} />
              Chat with Us on WhatsApp
            </a>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden h-48 border border-slate-200 dark:border-slate-700">
              <iframe
                title="Veroni Healthcare Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9!2d-79.3832!3d43.6532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM5JzExLjUiTiA3OcKwMjInNTkuNSJX!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/60 dark:shadow-black/30 border border-slate-100 dark:border-slate-700"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. Our team will contact you within 1 business day.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-blue-600 font-semibold text-sm hover:underline">Send another message</button>
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-6">Book a Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Service of Interest</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service...</option>
                        <option>Behavioral Consultation</option>
                        <option>Autism Therapy (ABA)</option>
                        <option>Staff Training</option>
                        <option>Support Worker Staffing</option>
                        <option>Children's Programs</option>
                        <option>Residential & Respite Care</option>
                        <option>Day Programs</option>
                        <option>Family Support Services</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your situation and how we can help..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Newsletter opt-in */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 accent-blue-600" />
                    <span className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                      Subscribe to our newsletter for autism resources, caregiver tips, and program updates.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
