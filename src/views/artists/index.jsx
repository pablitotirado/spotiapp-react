import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchSearch } from 'actions/action-search'
import { getTrackAndAlbums } from 'actions/action-player'
import NotImage from 'assets/img/notimage.png'

import './styles.scss'
const Artist = () => {
	const [search, setSearch] = useState('')
	const dispatch = useDispatch()
	const loadSearch = search => dispatch(FetchSearch(search))
	const handleChange = e => setSearch(e.target.value)
	const handlePress = e => {
		if (e.keyCode === 13) {
			loadSearch(search) && setSearch('')
		}
	}
	const searchComplete = useSelector(state => state.reducerSearch.search)
	const loadUri = uri => dispatch(getTrackAndAlbums(uri))
	console.log(searchComplete)

	return (
		<div className='artist-container animated'>
			<input
				type='text'
				className='artist-container__input'
				placeholder='Buscar por artista'
				onKeyUp={handlePress}
				onChange={handleChange}
				value={search}
			/>
			<div className='searchComplete'>
				{searchComplete &&
					searchComplete.map(search => {
						const validationImages =
							search.images !== undefined && search.images.length > 0
						console.log(search)
						return (
							<div
								key={search.id}
								className='searchComplete__card'
								onClick={() => loadUri(search.uri)}
							>
								<img
									src={validationImages ? search.images[1].url : NotImage}
									alt={search.name}
									className='searchComplete__image'
								/>
								<div className='searchComplete__title'>
									<p>{search.name}</p>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default Artist
