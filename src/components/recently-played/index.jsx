import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FetchRecently, PaginationAction } from 'actions/action-recently-played'
import { getTrackAndAlbums } from 'actions/action-player.js'
import CardArtist from 'components/card-artist'
import Pagination from 'components/pagination'

import './styles.scss'

const RecentlyPlayed = () => {
	const dispatch = useDispatch()
	const { recently, loading, error } = useSelector(state => state.recently)

	useEffect(() => {
		const loadingRecently = () => dispatch(FetchRecently())
		loadingRecently()
	}, [dispatch])

	const loadUri = uri => dispatch(getTrackAndAlbums(uri))
	return (
		<>
			<div className='recently'>
				<h2 className='recently__heading'>escuchado recientemente</h2>
				{!loading && recently.items && (
					<div className='recently__grid'>
						{recently.items.map(
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
				)}
				<Pagination
					next={recently && recently.next}
					paginationAction={PaginationAction}
				/>
			</div>
		</>
	)
}

export default RecentlyPlayed
