import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FetchTokenAction } from 'actions/actions-auth'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'
import './styles.scss'

import Loading from 'components/loading'

const Login = ({ history }) => {
	const { token, loading } = useSelector(state => state.reducerAuth)
	const dispatch = useDispatch()

	const login = () => dispatch(FetchTokenAction(history.location.hash.slice(14, -34)))

	return (
		<>
			<div tabIndex={1} className='container'>
				<div tabIndex={2} className='container-login'>
					<div>
						<Loading loading={loading} />
					</div>
					<h1 tabIndex={3} className='container-login__title'>
						<Logo src={Spotify} /> Accesar a SpotifyClon
					</h1>

					<a
						className='container-login__outside'
						href='https://accounts.spotify.com/authorize?client_id=366e20586971408a82848c8ac6d8f2a3&redirect_uri=http://localhost:3000/login&response_type=token'
					>
						Autenticar con Spotify
					</a>
					<button
						tabIndex={4}
						className='container-login__button'
						onClick={() => {
							history.location.hash && login()
						}}
					>
						Ingresar a SpotifyClon
					</button>
				</div>
			</div>
			{token && <Redirect to='/home' />}
		</>
	)
}

export default Login
