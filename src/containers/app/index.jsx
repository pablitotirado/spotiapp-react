import React, { Suspense, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import appRoutes from './routes'
import Nav from 'components/nav'
import Loading from 'components/loading'
import Http from 'api/client-http'

const song = new Http()
const AppContainer = () => {
	const [mp3, setMp3] = useState('')
	useEffect(() => {
		async function prueba() {
			const request = await song.getRecentlyPlayed()

			// setMp3(request.items[15].track.album.artists[0].uri)
			console.log(request.items[0].tracks)
		}

		prueba()
	}, [])
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
			<iframe
				src='https://open.spotify.com/embed?uri=spotify:track:1GQI7qP5CLlVJAJUoW1FJT'
				style={{ position: 'fixed', bottom: 0, width: '100%' }}
				height='80'
				frameBorder='0'
				allow='encrypted-media'
				title='prueba'
			></iframe>
		</>
	)
}

export default AppContainer
