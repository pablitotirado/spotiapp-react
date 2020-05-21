import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import loginRoutes from './routes'
import Loading from 'components/loading'

const LoginContainer = () => {
	return (
		<Suspense fallback={<Loading loading />}>
			{loginRoutes.map((route, i) => (
				<Route key={i} {...route} />
			))}
		</Suspense>
	)
}

export default LoginContainer
