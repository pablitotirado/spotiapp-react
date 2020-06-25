import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from 'components/logo'
import Spotify from 'assets/img/logotipo.svg'
import './styles.scss'

const NavigationMobile = () => {
	return (
		<>
			<div className='navigation-mobile'>
				<Link to='/home' className='navigation-mobile__title'>
					<Logo src={Spotify} className='navigation-mobile__logo' />
					<h1 className='navigation-mobile__title'>Spotify</h1>
				</Link>
				<NavLink
					to='/home'
					className='navigation-mobile__link'
					activeClassName='navigation-mobile__link--active'
				>
					Home
				</NavLink>
				<NavLink
					to='/tracks'
					className='navigation-mobile__link'
					activeClassName='navigation-mobile__link--active'
				>
					Canciones
				</NavLink>
				<NavLink
					to='/artists'
					className='navigation-mobile__link'
					activeClassName='navigation-mobile__link--active'
				>
					Artistas
				</NavLink>
			</div>
		</>
	)
}

export default NavigationMobile
