import { useNavigate } from 'react-router-dom'
import { TitleLogo } from '../layouts/AppContainer'

const CATEGORIES = [
  { label: '한식', path: '/list/korean' },
  { label: '양식', path: '/list/western' },
  { label: '중식', path: '/list/chinese' },
  { label: '일식', path: '/list/japanese' },
]

export default function Category() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <TitleLogo />
      <div className="category-buttons btn-wrap">
        {CATEGORIES.map(({ label, path }) => (
          <button
            key={path}
            type="button"
            className="btn btn-outline"
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
