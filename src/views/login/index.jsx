import React from 'react'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FetchTokenAction } from '../../redux/actions'
import './styles.scss'

const Login = () => {
	const state = useSelector(state => state)

	const {
		reducerLogin: { token }
	} = state

	const dispatch = useDispatch()

	const login = () => dispatch(FetchTokenAction())

	return (
		<>
			{!token ? (
				<div className='container'>
					<div className='container-login'>
						<h1 className='container-login__title'>
							<Logo src={Spotify} /> Accesar a SpotifyClon
						</h1>
						<button className='container-login__button' onClick={login}>
							Ingresar
						</button>
					</div>
				</div>
			) : (
				<Redirect to='/home' />
			)}
		</>
	)
}

export default Login
