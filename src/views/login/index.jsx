import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FetchTokenAction } from 'actions/actions-auth'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'
import './styles.scss'

import Loading from 'components/loading'

const Login = () => {
	const { token, loading } = useSelector(state => state.reducerAuth)
	const dispatch = useDispatch()

	const login = () => dispatch(FetchTokenAction())

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
					<button
						tabIndex={4}
						className='container-login__button'
						onClick={login}
					>
						Ingresar
					</button>
				</div>
			</div>
			{token && <Redirect to='/home' />}
		</>
	)
}

export default Login
