import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import authRoutes from './routes'
import Loading from 'components/loading'

const AuthContainer = ({ history }) => (
	<Suspense fallback={<Loading loading />}>
		{authRoutes.map((route, i) => (
			<Route key={i} {...route} />
		))}
		{!history.location.hash && <Redirect to='/login' />}
	</Suspense>
)

export default AuthContainer
