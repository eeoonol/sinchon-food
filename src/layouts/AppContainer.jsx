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

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, transition: { duration: 0.12 }, pointerEvents: 'none' },
}

export default function AppContainer({ children }) {
  const location = useLocation()

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ width: '100%', minHeight: '100vh' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export { PAGE_TITLE }
