import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import routes from './routes'

const LoginContainer = () => (
	<Suspense fallback={<div style={{ color: 'white' }}>cargando...</div>}>
		{routes.map((route, i) => (
			<Route key={i} {...route} />
		))}
		<Redirect to='/login' />
	</Suspense>
)

export default LoginContainer
