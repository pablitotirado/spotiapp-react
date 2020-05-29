import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import appRoutes from './routes'
import Nav from 'components/nav'
import Loading from 'components/loading'
import Player from 'components/player'

const AppContainer = () => (
	<>
		<Nav>
			<Suspense fallback={<Loading loading />}>
				{appRoutes.map((route, i) => (
					<Route key={i} {...route} />
				))}
			</Suspense>
		</Nav>
		<Player />
	</>
)

export default AppContainer
