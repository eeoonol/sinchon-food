import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const PAGE_TITLE = '신촌 밥약 어디서 할래?'

export function TitleLogo({ as: Tag = 'h1', className = '', ...props }) {
  return (
    <Tag className={`page-title titleLogo6 ${className}`.trim()} {...props}>
      <span className="titleLogo6-line1">
        <span className="pinDot" aria-hidden="true" />
        신촌 밥약
      </span>
      <span className="titleLogo6-line2">어디서 할래?</span>
    </Tag>
  )
}

function pathDepth(path) {
  if (path === '/') return 0
  if (path === '/category') return 1
  if (path.startsWith('/list/')) return 2
  return 0
}

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 320 : -320,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -320 : 320,
    opacity: 0,
    pointerEvents: 'none',
  }),
}

export default function AppContainer({ children }) {
  const location = useLocation()
  const prevPathRef = useRef(location.pathname)
  const directionRef = useRef(1)

  useEffect(() => {
    const prev = prevPathRef.current
    const curr = location.pathname
    if (prev !== curr) {
      directionRef.current = pathDepth(curr) >= pathDepth(prev) ? 1 : -1
      prevPathRef.current = curr
    }
  }, [location.pathname])

  const direction = directionRef.current

  return (
    <div className="app-container">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{ width: '100%', minHeight: '100vh' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export { PAGE_TITLE }
