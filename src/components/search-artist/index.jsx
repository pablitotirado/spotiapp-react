import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchSearchArtist } from 'actions/action-search.js'
import { getTrackAndAlbums } from 'actions/action-player.js'
import Loading from 'components/loading'
import ArtistCard from 'components/card-artist'
import './styles.scss'

const SearchArtist = () => {
	const [inputSearch, setInputSearch] = useState('')
	const [formError, setFormError] = useState(false)
	const search = useSelector(state => state.reducerSearch.search)
	const loading = useSelector(state => state.reducerSearch.loading)
	const dispatch = useDispatch()

	const handleChange = e => setInputSearch(e.target.value)
	const handlePress = e => {
		if (!inputSearch) {
			setFormError(true)
		} else {
			setFormError(false)
			e.key === 'Enter' && loadSearch(inputSearch) && setInputSearch('')
		}
	}
	const loadSearch = search => dispatch(FetchSearchArtist(search))
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
				{formError && (
					<div className='error-search animated'> Ingrese una busqueda </div>
				)}
				{search && (
					<div className='artist__result'>
						Mostrando {search.length} resultados
					</div>
				)}
				<div className='artist-container__search'>
					{search &&
						search.map(({ id, images, name, uri, followers: { total } }) => {
							const validationImages = images !== undefined && images.length > 0
							return (
								<ArtistCard
									key={id}
									image={validationImages && images[1].url}
									name={name}
									loadUri={loadUri}
									uri={uri}
									followers={total}
									foll
								/>
							)
						})}
				</div>
			</div>
		</>
	)
}

export default SearchArtist
