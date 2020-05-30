import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import Loading from 'components/loading'
import { useSelector } from 'react-redux'

const AppContainer = lazy(() => import('./containers/app'))
const AppLogin = lazy(() => import('./containers/auth'))

export default () => {
	const token = useSelector(state => state.reducerAuth.token)

	return (
		<Suspense fallback={<Loading loading />}>
			<Route
				render={props => (token ? <AppContainer {...props} /> : <AppLogin {...props} />)}
			/>
		</Suspense>
	)
}
