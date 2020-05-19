import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from 'assets/icons/icon.svg'
import Book from 'assets/icons/libro.svg'
import Ratio from 'assets/icons/radio.svg'
import './styles.scss'

const Nav = ({ children }) => {
	return (
		<>
			<div className='nav'>
				<div className='nav__left'>
					<NavLink activeClassName='nav__link-active' className='nav__link' to='/home'>
						<img className='icon' src={Home} alt='icon' />
						Home
					</NavLink>
					<NavLink activeClassName='nav__link-active' className='nav__link' to='/albums'>
						<img className='icon' src={Book} alt='icon' />
						Albumes
					</NavLink>
					<NavLink activeClassName='nav__link-active' className='nav__link' to='/artists'>
						<img className='icon' src={Ratio} alt='icon' />
						Artista
					</NavLink>
				</div>
				<div className='nav__center'>{children}</div>
				<div className='nav__right'></div>
			</div>
		</>
	)
}

export default Nav
