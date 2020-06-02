import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FetchRecently } from 'actions/action-recently-played'
import { getTrackAndAlbums } from 'actions/action-player.js'
import './styles.scss'

const RecentlyPlayed = () => {
	const dispatch = useDispatch()
	const recently = useSelector(state => state.reducerRecently.recently)

	useEffect(() => {
		const loadingRecently = () => dispatch(FetchRecently())
		loadingRecently()
	}, [dispatch])

	const loadUri = uri => dispatch(getTrackAndAlbums(uri))
	return (
		<>
			<h2 className='recently__heading'>RecentlyPlayed</h2>
			<div className='recently__grid animated'>
				{recently &&
					recently.map((album, i) => {
						return (
							<div
								className='recently__card'
								key={`${album.track.id}_${i}`}
								onClick={() => loadUri(album.track.album.uri)}
							>
								<img
									src={album.track.album.images[1].url}
									alt={album.track.album.name}
									className='recently__image'
								/>
								<div className='recently__title'>
									<p>{album.track.album.name}</p>
								</div>
								<div className='recently__type'>
									<p>{album.track.album.type}</p>
								</div>
							</div>
						)
					})}
			</div>
		</>
	)
}

export default RecentlyPlayed
