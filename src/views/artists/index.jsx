import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchSearch } from 'actions/action-search'
import { getTrackAndAlbums } from 'actions/action-player.js'
import Loading from 'components/loading'
import ArtistCard from 'components/card-artist'
import './styles.scss'

const Artist = () => {
	const [inputSearch, setInputSearch] = useState('')
	const search = useSelector(state => state.reducerSearch.search)
	const loading = useSelector(state => state.reducerSearch.loading)
	const dispatch = useDispatch()

	const handleChange = e => setInputSearch(e.target.value)
	const handlePress = e =>
		e.keyCode === 13 && inputSearch !== '' && loadSearch(inputSearch) && setInputSearch('')
	const loadSearch = search => dispatch(FetchSearch(search))
	const loadUri = uri => dispatch(getTrackAndAlbums(uri))

	return (
		<>
			{loading && <Loading loading />}
			<div className='artist-container animated'>
				<input
					type='text'
					className='artist-container__input'
					placeholder='Buscar por artista'
					onKeyUp={handlePress}
					onChange={handleChange}
					value={inputSearch}
				/>
				{search && <div className='artist__result'>Mostrando {search.length} resultados</div>}
				<div className='artist-container__search'>
					{search &&
						search.map(artist => {
							const validationImages = artist.images !== undefined && artist.images.length > 0
							return (
								<ArtistCard
									key={artist.id}
									image={validationImages && artist.images[1].url}
									name={artist.name}
									loadUri={loadUri}
									uri={artist.uri}
									followers={artist.followers.total}
								/>
							)
						})}
				</div>
			</div>
		</>
	)
}

export default Artist
