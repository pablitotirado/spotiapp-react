import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FetchTokenAction } from 'actions/actions-auth.js'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'
import './styles.scss'

import Loading from 'components/loading'

const Login = ({ history }) => {
	const { token, loading } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const login = () =>
			dispatch(FetchTokenAction(history.location.hash.slice(14, -34)))
		history.location.hash && login() && history.push('/home')
	}, [history, dispatch])

	return (
		<>
			<div className='container'>
				<div className='container-login'>
					<div>
						<Loading loading={loading} />
					</div>
					<h1 className='container-login__title'>
						<Logo src={Spotify} /> Accesar a SpotifyClon
					</h1>
					<a
						className='container-login__outside'
						href='https://accounts.spotify.com/authorize?client_id=366e20586971408a82848c8ac6d8f2a3&redirect_uri=http://localhost:3000/login&scope=user-read-private%20user-read-recently-played&response_type=token'
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
