import React, { useLayoutEffect } from 'react'
import { FetchAlbumsActions } from 'actions/actions-browser.js'
import { getTrackAndAlbums } from 'actions/action-player'
import { useSelector, useDispatch } from 'react-redux'
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
			<h2 className='new-releases__heading'>new releases</h2>
			<div className='new-releases__grid'>
				{albums &&
					albums.map(({ id, uri, images: [{ url }], name, album_type }) => (
						<div key={id} onClick={() => loadUri(uri)} className='new-releases__card'>
							<img src={url} alt={name} className='new-releases__image' />
							<div className='new-releases__title'>
								<p>{name}</p>
							</div>
							<div className='new-releases__type'>
								<p>{album_type}</p>
							</div>
						</div>
					))}
			</div>
		</>
	)
}

export default NewReleases
