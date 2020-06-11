import React, { useLayoutEffect } from 'react'
import { NavLink, Redirect, Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
//Images
import NotImage from 'assets/img/notimage.png'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'
//Actions
import { ClearStorageAction } from 'actions/actions-auth'
import { FetchUser } from 'actions/action-user'
import InputSearch from 'components/input-search'
import './styles.scss'

const Nav = ({ children }) => {
	const token = useSelector(state => state.auth.token)
	const { images, display_name } = useSelector(state => state.user.user)
	const dispatch = useDispatch()

	const logout = () => dispatch(ClearStorageAction())
	const history = useHistory()
	useLayoutEffect(() => {
		const getUser = () => dispatch(FetchUser())
		getUser()
	}, [dispatch])

	const validationImages = images !== undefined && images.length > 0

	return (
		<>
			<div className='nav'>
				<div className='nav__left'>
					<Link to='/home' className='title-container'>
						<Logo src={Spotify} className='title-container__logo' />
						<h1 className='title-container__title'>Spotify</h1>
					</Link>
					<NavLink
						to='/home'
						className='nav__link'
						activeClassName='nav__link-active'
					>
						Home
					</NavLink>
					<NavLink
						to='/tracks'
						className='nav__link'
						activeClassName='nav__link-active'
					>
						Canciones
					</NavLink>
					<NavLink
						to='/artists'
						className='nav__link'
						activeClassName='nav__link-active'
					>
						Artistas
					</NavLink>
				</div>
				<div className='nav__center'>
					<div
						className={`top-nav ${
							history.location.pathname === '/home' && 'top-nav--user-left'
						}`}
					>
						{history.location.pathname !== '/home' && <InputSearch />}
						<div className='container-wrapper-user'>
							<div className='user'>
								<img
									className='user__image'
									src={validationImages ? images[0].url : NotImage}
									alt={display_name}
								/>
								<p className='user__name'>{display_name}</p>
							</div>
							<button className='user__logout' onClick={logout}>
								Salir
							</button>
						</div>
					</div>
					{children}
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
