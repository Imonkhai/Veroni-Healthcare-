import { useState } from 'react'
import { Share2, Globe, Link, Video, Send, Heart } from 'lucide-react'
import logo from '../assets/ChatGPT Image May 30, 2026, 03_59_53 AM.png'

const links = {
  Services: ['Behavioral Consultation', 'Autism Therapy', 'Staff Training', 'Support Staffing', 'Day Programs', 'Residential Care'],
  Company: ['About Us', 'Our Team', 'Careers', 'Blog & Resources', 'Downloadable Resources', 'Contact Us'],
  Support: ['FAQ', 'Funding Options', 'Insurance Info', 'Crisis Support', 'Referral Form', 'Privacy Policy'],
}

const socials = [
  { icon: Share2, href: '#', label: 'Facebook' },
  { icon: Globe, href: '#', label: 'Twitter' },
  { icon: Link, href: '#', label: 'Instagram' },
  { icon: Link, href: '#', label: 'LinkedIn' },
  { icon: Video, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Veroni Healthcare Services" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Empowering individuals and families through compassionate, evidence-based behavioral health and social support services.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-white text-sm font-semibold mb-2">Stay Informed</p>
              {subscribed ? (
                <p className="text-teal-400 text-sm">✓ You're subscribed! Thank you.</p>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubscribed(true) }} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button type="submit" className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors">
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} className="text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Veroni Healthcare Services. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 mx-1" fill="#ef4444" /> for families everywhere
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
