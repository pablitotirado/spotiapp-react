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
								<iframe
									src={`https://open.spotify.com/follow/1/?uri=${search.uri}&size=basic&theme=dark`}
									scrolling='no'
									frameborder='0'
									className='searchComplete__follow'
									allowtransparency='true'
									title='foll'
								></iframe>
								<div className='searchComplete__followers'>
									<p>
										Followers:{' '}
										<span className='searchComplete__followers-span'>
											{search.followers.total}
										</span>
									</p>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default Artist
