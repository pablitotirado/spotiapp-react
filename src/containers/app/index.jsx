import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import appRoutes from './routes'
import NavWrapper from 'components/nav-wrapper'
import Loading from 'components/loading'

const AppContainer = () => {
	const { uri, trackExist } = useSelector(state => state.player)
	return (
		<>
			<NavWrapper>
				<Suspense fallback={<Loading loading />}>
					{appRoutes.map((route, i) => (
						<Route key={i} {...route} />
					))}
					<Redirect to='/home' />
				</Suspense>
			</NavWrapper>
			{trackExist && (
				<iframe
					src={`https://open.spotify.com/embed?uri=${uri}`}
					style={{
						position: 'fixed',
						bottom: 0,
						width: '100%',
						cursor: 'pointer'
					}}
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
