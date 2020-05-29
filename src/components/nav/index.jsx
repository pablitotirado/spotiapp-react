import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ClearStorageAction } from 'actions/actions-auth'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'
import PropTypes from 'prop-types'
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
						<h1 className='title-container__title'>SpotifyClon</h1>
					</div>
					<NavLink
						tabIndex={1}
						className='nav__link'
						activeClassName='nav__link-active'
						to='/home'
					>
						Home
					</NavLink>
					<NavLink
						tabIndex={2}
						className='nav__link'
						activeClassName='nav__link-active'
						to='/albums'
					>
						Albumes
					</NavLink>
					<NavLink
						tabIndex={3}
						className='nav__link'
						activeClassName='nav__link-active'
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

Nav.propTypes = {
	children: PropTypes.node
}

export default Nav
