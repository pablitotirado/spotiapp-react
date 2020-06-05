import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FetchSearchArtist, FetchSearchTracks } from 'actions/action-search.js'
import Glass from 'assets/img/buscar.svg'
import './styles.scss'

const InputSearch = () => {
	const [inputSearch, setInputSearch] = useState('')
	const [formError, setFormError] = useState(false)
	const history = useHistory()

	const dispatch = useDispatch()
	const handleChange = e => setInputSearch(e.target.value)
	const handlePress = e => {
		if (!inputSearch) {
			setFormError(true)
		} else {
			setFormError(false)
			e.key === 'Enter' && loadSearch(inputSearch)
		}
	}

	const loadSearch = search => {
		history.location.pathname === '/tracks'
			? dispatch(FetchSearchTracks(search))
			: dispatch(FetchSearchArtist(search))
		setInputSearch('')
	}

	return (
		<>
			<div className='input-search'>
				<input
					type='text'
					className='input-search__input'
					placeholder={
						history.location.pathname === '/tracks'
							? 'Buscar por canciones'
							: 'Buscar por artistas'
					}
					onKeyUp={handlePress}
					onChange={handleChange}
					value={inputSearch}
				/>
				<img className='input-search__glass' src={Glass} alt='search' />
				{formError && (
					<div className='error-search animated'> Ingrese una busqueda </div>
				)}
			</div>
		</>
	)
}

export default InputSearch
