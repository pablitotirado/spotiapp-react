import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ClearStorageAction } from 'actions/actions-auth'

import './styles.scss'

const Nav = ({ children }) => {
	const token = useSelector(state => state.reducerAuth.token)
	const dispatch = useDispatch()

	const logout = () => dispatch(ClearStorageAction())

	return (
		<>
			<div className='nav'>
				<div className='nav__left'>
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
					<button tabIndex={5} className='nav__right-logout' onClick={logout}>
						Salir
					</button>
				</div>
			</div>
			{!token && <Redirect to='/login' />}
		</>
	)
}

export default Nav
