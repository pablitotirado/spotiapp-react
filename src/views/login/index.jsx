import React, { useLayoutEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FetchTokenAction } from 'actions'
import { Logo } from 'components'
import { Loading } from 'components'
import Spotify from 'assets/img/logotipo.svg'
import './styles.scss'

const Login = ({ history }) => {
	const { token, loading } = useSelector(({ auth }) => auth)
	const dispatch = useDispatch()

	const login = useCallback(() => {
		dispatch(FetchTokenAction(history.location.hash.slice(14, -34)))
	}, [history, dispatch])

	useLayoutEffect(() => {
		history.location.hash && login() && history.push('/home')
	}, [history, login])

	const location =
		window.location.hostname === 'localhost'
			? 'http://localhost:3000/login'
			: 'https://spoti-clon-react.now.sh/login'

	return (
		<>
			<div className='container'>
				<div className='container-login'>
					<Loading loading={loading} />
					<h1 className='container-login__title'>
						<Logo src={Spotify} />
						SpotifyClon
					</h1>
					<a
						className='container-login__outside'
						href={`https://accounts.spotify.com/authorize?client_id=366e20586971408a82848c8ac6d8f2a3&redirect_uri=${location}&scope=user-read-private%20user-read-recently-played&response_type=token`}
					>
						Autenticar
					</a>
				</div>
			</div>
			{token && <Redirect to='/home' />}
		</>
	)
}

export default Login
