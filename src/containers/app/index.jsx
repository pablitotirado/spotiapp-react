import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import appRoutes from './routes'
import Nav from 'components/nav'
import Loading from 'components/loading'

const AppContainer = () => {
	const { uri, trackExist } = useSelector(state => state.reducerPlayer)
	return (
		<>
			<Nav>
				<Suspense fallback={<Loading loading />}>
					{appRoutes.map((route, i) => (
						<Route key={i} {...route} />
					))}
					<Redirect to='/home' />
				</Suspense>
			</Nav>
			{trackExist && (
				<iframe
					src={`https://open.spotify.com/embed?uri=${uri}`}
					style={{ position: 'fixed', bottom: 0, width: '100%', cursor: 'pointer' }}
					height='80'
					className='animated'
					frameBorder='0'
					allow='encrypted-media'
					title='prueba'
				></iframe>
			)}
		</>
	)
}

export default AppContainer
