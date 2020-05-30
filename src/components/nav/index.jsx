import React, { useLayoutEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
//Images
import NotImage from 'assets/img/notimage.png'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'
//Actions
import { ClearStorageAction } from 'actions/actions-auth'
import { FetchUser } from 'actions/action-user'
import './styles.scss'

const Nav = ({ children }) => {
	const token = useSelector(state => state.reducerAuth.token)
	const user = useSelector(state => state.reducerUser.user)
	const dispatch = useDispatch()

	const logout = () => dispatch(ClearStorageAction())

	useLayoutEffect(() => {
		const getUser = () => dispatch(FetchUser())
		getUser()
	}, [dispatch])

	const validationImages = user.images !== undefined && user.images.length > 0

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
				</div>
				<div className='nav__right'>
					<img
						className='nav__right-user__img'
						src={validationImages ? user.images[0].url : NotImage}
						alt={user.display_name}
					/>
					<p className='nav__right-user__name'>{user.display_name}</p>
					<p className='nav__right-user__product'>
						{user.product ? user.product : 'Free'}
					</p>
					<button tabIndex={5} className='nav__right-user__logout' onClick={logout}>
						Salir
					</button>
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
