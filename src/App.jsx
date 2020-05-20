import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'

const AppContainer = lazy(() => import('./containers/dashboard'))
const AppLogin = lazy(() => import('./containers/login'))

export default () => (
	<Suspense fallback={<div style={{ color: 'white' }}>cargando...</div>}>
		<Route
			render={() => (localStorage.getItem('access_token') ? <AppContainer /> : <AppLogin />)}
		/>
	</Suspense>
)
