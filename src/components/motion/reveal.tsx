import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Horizontal offset in px for side reveals; 0 keeps the default up-fade. */
  x?: number
}

export function Reveal({ children, className, delay = 0, x = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  const variants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0, x: 0 }, visible: { opacity: 1, y: 0, x: 0 } }
    : {
        hidden: { opacity: 0, y: x === 0 ? 24 : 0, x },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
