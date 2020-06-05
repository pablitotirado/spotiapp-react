import React, { useLayoutEffect } from 'react'
import { FetchAlbumsActions } from 'actions/actions-browser.js'
import { getTrackAndAlbums } from 'actions/action-player'
import { useSelector, useDispatch } from 'react-redux'
import CardArtist from 'components/card-artist'
import './styles.scss'

const NewReleases = ({ className }) => {
	const { albums, loading, error } = useSelector(state => state.reducerBrowser)
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const loadingAlbums = () => dispatch(FetchAlbumsActions())
		loadingAlbums()
	}, [dispatch])

	const loadUri = uri => dispatch(getTrackAndAlbums(uri))

	return (
		<>
			{!loading && !error && (
				<div className='animated'>
					<h2 className='new-releases__heading'>nuevos lanzamientos</h2>
					<div className='new-releases__grid'>
						{albums.map(
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
				</div>
			)}
		</>
	)
}

export default NewReleases
