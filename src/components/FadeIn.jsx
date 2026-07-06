import { motion } from 'framer-motion'

/**
 * Wraps children in a scroll-triggered fade + slide-up animation.
 * @param {number} delay  - seconds of delay before animation starts
 * @param {string} className - optional class forwarded to the wrapper div
 */
export default function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
