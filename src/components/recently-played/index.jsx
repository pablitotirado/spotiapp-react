import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	getTrackAndAlbums,
	FetchRecently,
	PaginationActionRecently
} from 'actions'

import { CardArtist } from 'components'
import { Pagination } from 'components'
import './styles.scss'

//TODO: proptypes and defaultProps
export const RecentlyPlayed = () => {
	const dispatch = useDispatch()
	const { recently, loading } = useSelector(state => state.recently)

	useEffect(() => {
		const loadingRecently = () => dispatch(FetchRecently())
		loadingRecently()
	}, [dispatch])

	const loadUri = uri => dispatch(getTrackAndAlbums(uri))
	return (
		<>
			<div className='recently animated fade-in'>
				<h2 className='recently__heading'>escuchado recientemente</h2>
				<Pagination
					next={recently && recently.next}
					paginationAction={PaginationActionRecently}
				/>
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
			</div>
		</>
	)
}
