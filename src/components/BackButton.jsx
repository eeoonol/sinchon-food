import { useNavigate } from 'react-router-dom'

export default function BackButton({ to, onClick }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (typeof onClick === 'function') {
      onClick()
    } else {
      const path = (to ?? '/category').startsWith('/') ? (to ?? '/category') : `/${to ?? 'category'}`
      navigate(path, { replace: true })
    }
  }

  return (
    <button
      type="button"
      className="back-btn"
      aria-label="뒤로 가기"
      onClick={handleClick}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </button>
  )
}
