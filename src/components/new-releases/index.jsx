import React, { useLayoutEffect } from 'react'
import { FetchAlbumsActions } from 'actions/actions-browser.js'
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

	return (
		<>
			<h2 className='title'>new releases</h2>
			{loading ? (
				<Loading />
			) : (
				<div className='new-releases'>
					{albums.map(album => (
						<div key={album.id}>
							<div className='new-releases__card animated'>
								<img
									src={album.images[1].url}
									alt={album.name}
									className='new-releases__image'
								/>
								<div className='new-releases__title'>
									<p>{album.name}</p>
								</div>
								<div className='new-releases__type'>
									<p>{album.type}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default NewReleases
