import { Link } from 'react-router-dom'
import { CATEGORY_CHIP_LABELS } from '../data/restaurants'

const TYPES = ['korean', 'western', 'chinese', 'japanese']

export default function TopChips({ currentType }) {
  return (
    <nav className="tabsRow" role="tablist">
      {TYPES.map((type) => {
        const isActive = type === currentType
        return (
          <Link
            key={type}
            to={`/list/${type}`}
            className={`tabBtn ${isActive ? 'active' : ''}`}
            role="tab"
            aria-selected={isActive}
          >
            {CATEGORY_CHIP_LABELS[type]}
          </Link>
        )
      })}
    </nav>
  )
}
