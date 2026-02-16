import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TitleLogo } from '../layouts/AppContainer'

export default function Home() {
  const navigate = useNavigate()
  const [started, setStarted] = useState(false)

  const handleStart = () => {
    if (started) return
    setStarted(true)
    setTimeout(() => {
      navigate('/category')
    }, 600)
  }

  return (
    <div className="page">
      <TitleLogo />
      <div className="btn-wrap">
        <motion.button
          type="button"
          className="btn btn-start"
          initial={false}
          animate={{
            backgroundColor: started ? 'var(--primary)' : 'transparent',
            color: started ? 'white' : 'var(--primary)',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={handleStart}
          disabled={started}
        >
          START
        </motion.button>
      </div>
    </div>
  )
}
