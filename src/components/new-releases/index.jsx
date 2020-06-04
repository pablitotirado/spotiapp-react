import React, { useLayoutEffect } from 'react'
import { FetchAlbumsActions } from 'actions/actions-browser.js'
import { getTrackAndAlbums } from 'actions/action-player'
import { useSelector, useDispatch } from 'react-redux'
import CardArtist from 'components/card-artist'
import Loading from 'components/loading'
import './styles.scss'

const NewReleases = () => {
	const { albums, loading } = useSelector(state => state.reducerBrowser)
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const loadingAlbums = () => dispatch(FetchAlbumsActions())
		loadingAlbums()
	}, [dispatch])

	const loadUri = uri => dispatch(getTrackAndAlbums(uri))

	return (
		<>
			<h2 className='new-releases__heading'>nuevos lanzamientos</h2>
			<div className='new-releases__grid'>
				{albums &&
					albums.map(({ id, uri, images: [, { url }], name, album_type }) => (
						<CardArtist
							key={id}
							image={url}
							name={name}
							loadUri={loadUri}
							uri={uri}
							type={album_type}
						/>
					))}
			</div>
		</>
	)
}

export default NewReleases
