import React, { useEffect } from 'react'
import {
	FetchAlbumsActions,
	PaginationAction
} from 'actions/actions-browser.js'
import { getTrackAndAlbums } from 'actions/action-player'
import { useSelector, useDispatch } from 'react-redux'
import CardArtist from 'components/card-artist'

import Pagination from 'components/pagination'
import './styles.scss'

const NewReleases = () => {
	const { data } = useSelector(state => state.browser)
	const dispatch = useDispatch()

	useEffect(() => {
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
			<div className='new-releases animated fade-in'>
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
					previous={data?.previous}
					next={data?.next}
					paginationAction={PaginationAction}
				/>
				{data && (
					<div className='new-releases__grid'>
						{data?.items?.map(
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

export default NewReleases
