import { useParams, Navigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import TopChips from '../components/TopChips'
import RestaurantCard from '../components/RestaurantCard'
import { fetchRestaurants } from "../data/restaurants"
import { useEffect, useState } from "react"
import { TitleLogo } from '../layouts/AppContainer'

const VALID_TYPES = ['korean', 'western', 'chinese', 'japanese']

export default function List() {
  const { type } = useParams()
  if (!VALID_TYPES.includes(type)) {
    return <Navigate to="/category" replace />
  }
  
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")


useEffect(() => {
  ;(async () => {
    try {
      const data = await fetchRestaurants()
      setRestaurants(data.filter(r => r.category === type))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  })()
}, [type])


if (loading) return <div style={{ padding: 16 }}>Loading...</div>
if (error) return <div style={{ padding: 16 }}>Error: {error}</div>


  return (
    <div className="page" style={{ padding: 0, alignItems: 'stretch' }}>
      <div className="list-top topBar">
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
