import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FetchRecently } from 'actions/action-recently-played'
import { getTrackAndAlbums } from 'actions/action-player.js'
import CardArtist from 'components/card-artist'
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
			<h2 className='recently__heading'>escuchado recientemente</h2>
			<div className='recently__grid animated'>
				{recently &&
					recently.map(
						(
							{
								track: {
									id,
									album: {
										name,
										type,
										uri,
										images: [{ url }]
									}
								}
							},
							i
						) => {
							console.log(name)
							return (
								<CardArtist
									key={`${id}_${i}`}
									name={name}
									type={type}
									uri={uri}
									loadUri={loadUri}
									image={url}
								/>
							)
						}
					)}
			</div>
		</>
	)
}

export default RecentlyPlayed
