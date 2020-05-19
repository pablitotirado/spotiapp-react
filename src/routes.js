import { lazy } from 'react'

const DashboardContainer = lazy(() => import('containers/dashboard'))
const Login = lazy(() => import('views/login'))

export default [
	{
		component: DashboardContainer,
		path: '/home',
		exact: true
	},
	{
		component: Login,
		path: '/',
		exact: true
	}
]
