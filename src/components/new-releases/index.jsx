import React, { useLayoutEffect } from 'react'
import { FetchAlbumsActions } from 'actions/actions-browser.js'
import { useSelector, useDispatch } from 'react-redux'
import CardsGrid from 'components/cards-grid'
import './styles.scss'

const NewReleases = () => {
	const { albums, loading } = useSelector(state => state.reducerBrowser)
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const loadingAlbums = () => dispatch(FetchAlbumsActions())
		loadingAlbums()
	}, [])

	return (
		<>
			<h2 className='title'>new releases</h2>
			<CardsGrid albums={albums} loading={loading} />
		</>
	)
}

export default NewReleases
