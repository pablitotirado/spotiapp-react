import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FetchUser, ClearStorageAction } from 'actions'
import NotImage from 'assets/img/notimage.png'
import './styles.scss'

//TODO: proptypes and defaultProps
export const User = () => {
	const { images, display_name } = useSelector(state => state.user.user)
	const dispatch = useDispatch()
	useLayoutEffect(() => {
		const getUser = () => dispatch(FetchUser())
		getUser()
	}, [dispatch])
	const logout = () => dispatch(ClearStorageAction())
	const validationImages = images !== undefined && images.length > 0
	return (
		<div className='user'>
			{display_name && (
				<div className='user__left'>
					<img
						className='user__image'
						src={validationImages ? images[0].url : NotImage}
						alt={display_name}
					/>
					<p className='user__name'>{display_name}</p>
				</div>
			)}
			<button className='user__right' onClick={logout}>
				Salir
			</button>
		</div>
	)
}
