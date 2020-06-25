import React from 'react'
import { useSelector } from 'react-redux'
import SearchArtist from 'components/search-artist'
import './styles.scss'

const Artist = () => {
	const { searchArtist, loadingArtist } = useSelector(state => state.search)
	return (
		<>
			<div className='artists-container'>
				<SearchArtist search={searchArtist} loading={loadingArtist} />
			</div>
		</>
	)
}

export default Artist
