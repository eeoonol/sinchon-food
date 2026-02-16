import { useRoutes } from 'react-router-dom'
import { AppRouter } from './router'

export default function App() {
  return useRoutes(AppRouter)
}
