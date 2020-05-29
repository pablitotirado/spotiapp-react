import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import authRoutes from './routes'
import Loading from 'components/loading'

const AuthContainer = () => (
	<Suspense fallback={<Loading loading />}>
		{authRoutes.map((route, i) => (
			<Route key={i} {...route} />
		))}
	</Suspense>
)

export default AuthContainer
