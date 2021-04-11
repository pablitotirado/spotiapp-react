import { lazy } from 'react'
const Home = lazy(() => import('views/home'))
const Tracks = lazy(() => import('views/tracks'))
const Artist = lazy(() => import('views/artists'))

export default [
  {
    component: Home,
    path: '/home',
    exact: true
  },
  {
    component: Tracks,
    exact: true,
    path: '/tracks'
  },
  {
    component: Artist,
    exact: true,
    path: '/artists'
  }
]
