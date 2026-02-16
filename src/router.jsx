import { Navigate } from 'react-router-dom'
import AppContainer from './layouts/AppContainer'
import Home from './pages/Home'
import Category from './pages/Category'
import List from './pages/List'

export const AppRouter = [
  {
    path: '/',
    element: (
      <AppContainer>
        <Home />
      </AppContainer>
    ),
  },
  {
    path: '/category',
    element: (
      <AppContainer>
        <Category />
      </AppContainer>
    ),
  },
  {
    path: '/list/:type',
    element: (
      <AppContainer>
        <List />
      </AppContainer>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]
