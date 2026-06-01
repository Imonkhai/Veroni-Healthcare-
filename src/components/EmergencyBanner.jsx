import { Phone, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-red-600 text-white text-sm py-2 px-4 flex items-center justify-center gap-3 relative z-50"
        >
          <Phone size={14} className="shrink-0" />
          <span className="font-medium">
            24/7 Crisis Support Line:{' '}
            <a href="tel:+18005551234" className="underline font-bold hover:text-red-100 transition-colors">
              1-800-555-1234
            </a>
            {' '}— We're here for you anytime.
          </span>
          <button
            onClick={() => setVisible(false)}
            aria-label="Close banner"
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-red-200 transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
