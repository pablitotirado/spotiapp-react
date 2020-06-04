import React, { useLayoutEffect } from 'react'
import { NavLink, Redirect, Link } from 'react-router-dom'
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
	const { images, display_name, product } = useSelector(
		state => state.reducerUser.user
	)
	const dispatch = useDispatch()

	const logout = () => dispatch(ClearStorageAction())

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
						className='nav__link'
						activeClassName='nav__link-active'
						to='/home'
					>
						Home
					</NavLink>
					<NavLink
						className='nav__link'
						activeClassName='nav__link-active'
						to='/albums'
					>
						Albumes
					</NavLink>
					<NavLink
						className='nav__link'
						activeClassName='nav__link-active'
						to='/artists'
					>
						Artista
					</NavLink>
				</div>
				<div className='nav__center'>{children}</div>
				{/* <div className='nav__right'>
					<div className='user'>
						<img
							className='user__img'
							src={validationImages ? images[0].url : NotImage}
							alt={display_name}
						/>
						<p className='user__name'>{display_name}</p>
						<p className='user__product'>{product ? product : 'Free'}</p>
						<button className='user__logout' onClick={logout}>
							Salir
						</button>
					</div>
				</div> */}
			</div>
			{!token && <Redirect to='/login' />}
		</>
	)
}

Nav.propTypes = {
	children: PropTypes.node
}

export default Nav
