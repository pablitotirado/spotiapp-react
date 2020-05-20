import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FetchTokenAction } from '../../redux/actions'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'
import './styles.scss'

const Login = () => {
	const token = useSelector(state => state.reducerLogin.token)
	const dispatch = useDispatch()
	const history = useHistory()

	const login = () => dispatch(FetchTokenAction())

	useLayoutEffect(() => {
		token && history.push('/home')
	}, [token, history])

	return (
		<>
			<div tabIndex={1} className='container'>
				<div tabIndex={2} className='container-login'>
					<h1 tabIndex={3} className='container-login__title'>
						<Logo src={Spotify} /> Accesar a SpotifyClon
					</h1>
					<button tabIndex={4} className='container-login__button' onClick={login}>
						Ingresar
					</button>
				</div>
			</div>
		</>
	)
}

export default Login
