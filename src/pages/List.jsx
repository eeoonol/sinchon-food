import { useParams, Navigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import TopChips from '../components/TopChips'
import RestaurantCard from '../components/RestaurantCard'
import { getRestaurantsByType } from '../data/restaurants'
import { TitleLogo } from '../layouts/AppContainer'

const VALID_TYPES = ['korean', 'western', 'chinese', 'japanese']

export default function List() {
  const { type } = useParams()
  if (!VALID_TYPES.includes(type)) {
    return <Navigate to="/category" replace />
  }
  const restaurants = getRestaurantsByType(type)

  return (
    <div className="page" style={{ padding: 0, alignItems: 'stretch' }}>
      <div className="list-top">
        <BackButton to="/category" />
        <TopChips currentType={type} />
      </div>
      <div className="list-main">
        <TitleLogo as="h2" style={{ marginTop: 0 }} />
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}
