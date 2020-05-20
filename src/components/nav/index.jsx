import React, { useLayoutEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Home from 'assets/icons/icon.svg'
import Book from 'assets/icons/libro.svg'
import Ratio from 'assets/icons/radio.svg'
import Logo from '../logo'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ClearStorageAction } from '../../redux/actions'

const Nav = ({ children }) => {
	const state = useSelector(state => state)
	const dispatch = useDispatch()
	const history = useHistory()
	const {
		reducerLogin: { token }
	} = state

	const logout = () => dispatch(ClearStorageAction())

	useLayoutEffect(() => {
		if (!token) {
			history.push('/login')
		}
	}, [token, history])

	return (
		<>
			<div className='nav'>
				<div className='nav__left'>
					<NavLink activeClassName='nav__link-active' className='nav__link' to='/'>
						<Logo src={Home} />
						Home
					</NavLink>
					<NavLink activeClassName='nav__link-active' className='nav__link' to='/albums'>
						<Logo src={Book} />
						Albumes
					</NavLink>
					<NavLink activeClassName='nav__link-active' className='nav__link' to='/artists'>
						<Logo src={Ratio} />
						Artista
					</NavLink>
				</div>
				<div className='nav__center'>{children}</div>
				<div className='nav__right'>
					<button className='nav__right-logout' onClick={logout}>
						Salir
					</button>
				</div>
			</div>
		</>
	)
}

export default Nav
