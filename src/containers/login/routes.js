import { lazy } from 'react'

const Login = lazy(() => import('views/login'))

export default [
	{
		component: Login,
		path: '/login',
		exact: true
	}
]
