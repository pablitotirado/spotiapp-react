import React, { useLayoutEffect } from 'react'
import {
	FetchAlbumsActions,
	PaginationAction
} from 'actions/actions-browser.js'
import { getTrackAndAlbums } from 'actions/action-player'
import { useSelector, useDispatch } from 'react-redux'
import Loading from 'components/loading'
import CardArtist from 'components/card-artist'

import Pagination from 'components/pagination'
import './styles.scss'

const NewReleases = () => {
	const { data, loading } = useSelector(state => state.browser)
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const loadingAlbums = () => dispatch(FetchAlbumsActions())
		loadingAlbums()
	}, [dispatch])

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
			<div className='new-releases'>
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
				<Pagination
					previous={data && data.previous}
					next={data && data.next}
					paginationAction={PaginationAction}
				/>
			</div>
		</>
	)
}

export default NewReleases
