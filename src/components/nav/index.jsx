import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ClearStorageAction } from 'actions/actions-auth'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'

import './styles.scss'

const Nav = ({ children }) => {
	const token = useSelector(state => state.reducerAuth.token)
	const dispatch = useDispatch()

	const logout = () => dispatch(ClearStorageAction())

	return (
		<>
			<div className='nav'>
				<div className='nav__left'>
					<div className='title-container'>
						<Logo src={Spotify} className='title-container__logo' />
						<h1 className='title-container__title'>Spotify</h1>
					</div>
					<NavLink
						tabIndex={1}
						activeClassName='nav__link-active'
						className='nav__link'
						to='/home'
					>
						Home
					</NavLink>
					<NavLink
						tabIndex={2}
						activeClassName='nav__link-active'
						className='nav__link'
						to='/albums'
					>
						Albumes
					</NavLink>
					<NavLink
						tabIndex={3}
						activeClassName='nav__link-active'
						className='nav__link'
						to='/artists'
					>
						Artista
					</NavLink>
				</div>
				<div tabIndex={4} className='nav__center'>
					<div className='children'>{children}</div>
					<div className='user'>
						<button tabIndex={5} className='user__logout' onClick={logout}>
							Salir
						</button>
					</div>
				</div>
			</div>
			{!token && <Redirect to='/login' />}
		</>
	)
}

export default Nav
