import { Link } from 'react-router-dom'
import { CATEGORY_CHIP_LABELS } from '../data/restaurants'

const TYPES = ['korean', 'western', 'chinese', 'japanese']

export default function TopChips({ currentType }) {
  return (
    <nav className="chips">
      {TYPES.map((type) => {
        const isActive = type === currentType
        return (
          <Link
            key={type}
            to={`/list/${type}`}
            className={`chip ${isActive ? 'chip-active' : ''}`}
          >
            {CATEGORY_CHIP_LABELS[type]}
          </Link>
        )
      })}
    </nav>
  )
}
