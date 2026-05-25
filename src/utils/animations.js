// Shared Framer Motion variants
export const ease = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1,   transition: { duration: 0.5,  ease: 'easeOut' } },
}

export const stagger = (delay = 0, staggerChildren = 0.09) => ({
  hidden: {},
  show:   { transition: { staggerChildren, delayChildren: delay } },
})

export const cardHover = {
  rest: { y: 0,    boxShadow: '0 1px 3px rgba(0,0,0,0.06)' },
  hover:{ y: -4,   boxShadow: '0 12px 32px rgba(0,0,0,0.10)', transition: { duration: 0.25, ease } },
}
