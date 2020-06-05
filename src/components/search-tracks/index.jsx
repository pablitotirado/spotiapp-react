import React from 'react'
import { useDispatch } from 'react-redux'
import { getTrackAndAlbums } from 'actions/action-player.js'
import Loading from 'components/loading'
import './styles.scss'

const SearchTracks = ({ search, loading }) => {
	const dispatch = useDispatch()
	const loadUri = uri => dispatch(getTrackAndAlbums(uri))
	return (
		<>
			{loading ? (
				<Loading loading />
			) : (
				<div className='container-search-tracks'>
					{search &&
						search.map(
							({
								id,
								name,
								artists: [{ name: nameArtist }],
								album: { name: nameAlbum },
								duration_ms,
								uri
							}) => {
								return (
									<div
										onClick={() => loadUri(uri)}
										key={id}
										className='table-tracks animated'
									>
										<div className='table-tracks__name'>{name}</div>
										<div className='table-tracks__artist'>{nameArtist}</div>
										<div className='table-tracks__duration'>
											{parseFloat(duration_ms / 60000).toFixed(2)} minutos
										</div>
										<div className='table-tracks__album'>{nameAlbum}</div>
										<div className='table-tracks__play'>
											<span className='table-tracks__play-icon'>&#x25b6;</span>
										</div>
									</div>
								)
							}
						)}
				</div>
			)}
		</>
	)
}

export default SearchTracks
