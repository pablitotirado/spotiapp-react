import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import routes from './routes'
import Nav from 'components/nav'

const AppContainer = () => (
	<Suspense fallback={<div>cargando...</div>}>
		<Nav>
			{routes.map((route, i) => (
				<Route key={i} {...route} />
			))}
		</Nav>
		<Redirect to='/home' />
	</Suspense>
)

export default AppContainer
