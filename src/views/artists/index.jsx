import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchSearch } from 'actions/action-search'
import { getTrackAndAlbums } from 'actions/action-player.js'
import Loading from 'components/loading'
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

	const loading = useSelector(state => state.reducerSearch.loading)

	console.log(loading)

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
			{searchComplete && (
				<div className='artist__result'>Mostrando {searchComplete.length} resultados</div>
			)}
			{loading && <Loading loading />}
			<div className='artist-container__search'>
				{searchComplete &&
					searchComplete.map(search => {
						const validationImages =
							search.images !== undefined && search.images.length > 0
						return (
							<div
								key={search.id}
								className='search-card'
								onClick={() => loadUri(search.uri)}
							>
								<img
									src={validationImages ? search.images[1].url : NotImage}
									alt={search.name}
									className='search-card__image'
								/>
								<div className='search-card__name'>
									<p>{search.name}</p>
								</div>
								<iframe
									src={`https://open.spotify.com/follow/1/?uri=${search.uri}&size=basic&theme=dark`}
									scrolling='no'
									frameborder='0'
									className='search-card__follow'
									allowtransparency='true'
									title='foll'
								></iframe>
								<div className='search-card__followers'>
									Followers:{' '}
									<span className='search-card__followers-span'>
										{search.followers.total}
									</span>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default Artist
