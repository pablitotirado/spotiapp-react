import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
//Actions
import NavigationMobile from './navigation-mobile'
import NavigationDesktop from './navigation-dektop'
import InputSearch from 'components/input-search'
import './styles.scss'

import User from 'components/user'
const NavWrapper = ({ children }) => {
	const token = useSelector(state => state.auth.token)
	const history = useHistory()

	return (
		<>
			<div className='nav-wrapper'>
				<div className='nav-wrapper__top-nav-mobile'>
					<NavigationMobile />
					{history.location.pathname !== '/home' && (
						<InputSearch desktop={true} />
					)}
					<User />
				</div>
				<div className='nav-wrapper__center'>
					<div className='nav-wrapper__top-nav-desktop'>
						<NavigationDesktop />
					</div>
					<div className='nav-wrapper__children'>
						{history.location.pathname !== '/home' && (
							<InputSearch desktop={false} />
						)}
						{children}
					</div>
				</div>
			</div>
			{!token && <Redirect to='/login' />}
		</>
	)
}

export default NavWrapper
