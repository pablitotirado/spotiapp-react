import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from 'components'
import Spotify from 'assets/img/logotipo.svg'
import './styles.scss'

//TODO: proptypes and defaultProps
const NavigationDesktop = () => {
	return (
		<>
			<div className='navigation-desktop'>
				<Link to='/home' className='navigation-desktop__title'>
					<Logo src={Spotify} className='navigation-desktop__logo' />
					<h1 className='navigation-desktop__title'>Spotify</h1>
				</Link>
				<NavLink
					to='/home'
					className='navigation-desktop__link'
					activeClassName='navigation-desktop__link--active'
				>
					Home
				</NavLink>
				<NavLink
					to='/tracks'
					className='navigation-desktop__link'
					activeClassName='navigation-desktop__link--active'
				>
					Canciones
				</NavLink>
				<NavLink
					to='/artists'
					className='navigation-desktop__link'
					activeClassName='navigation-desktop__link--active'
				>
					Artistas
				</NavLink>
			</div>
		</>
	)
}

export default NavigationDesktop
