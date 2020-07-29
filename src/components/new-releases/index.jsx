import React, { useLayoutEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	getTrackAndAlbums,
	FetchAlbumsActions,
	PaginationAction
} from 'actions'
import { CardArtist } from 'components'
import { Pagination } from 'components'

import './styles.scss'

//TODO: proptypes and defaultProps
export const NewReleases = () => {
	const { data } = useSelector(state => state.browser)

	const refBox = useRef(null)
	const dispatch = useDispatch()

	const loadingAlbums = useCallback(() => dispatch(FetchAlbumsActions()), [
		dispatch
	])

	useLayoutEffect(() => {
		loadingAlbums()
	}, [loadingAlbums])

	const loadUri = uri => dispatch(getTrackAndAlbums(uri))

	const countries = ['AR', 'ES', 'AU', 'PE', 'PY', 'US', 'UY', 'PA']
	const countriesName = [
		'Argentina',
		'España',
		'Australia',
		'Perú',
		'Paraguay',
		'Usa',
		'Uruguay',
		'Paraguay'
	]

	return (
		<>
			<div ref={refBox} className='new-releases animated fade-in'>
				<div className='new-releases__heading'>
					<h2 className='new-releases__heading-title'>nuevos lanzamientos</h2>
					{countries.map((countrie, i) => (
						<div
							key={i}
							className='new-releases__heading-countries'
							onClick={() => dispatch(FetchAlbumsActions(countrie))}
						>
							{countriesName[i]}
						</div>
					))}
				</div>
				<Pagination
					previous={data && data.previous}
					next={data && data.next}
					paginationAction={PaginationAction}
				/>
				{data && (
					<div className='new-releases__grid'>
						{data.items &&
							data.items.map(
								({ id, uri, images: [, { url }], name, album_type }) => (
									<CardArtist
										key={id}
										image={url}
										name={name}
										loadUri={loadUri}
										uri={uri}
										type={album_type}
									/>
								)
							)}
					</div>
				)}
			</div>
		</>
	)
}
