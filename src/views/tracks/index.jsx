import React from 'react'
import { useSelector } from 'react-redux'
import SearchTracks from 'components/search-tracks'

const Tracks = () => {
	const { searchTracks, loadingTracks } = useSelector(state => state.search)

	return (
		<>
			<SearchTracks search={searchTracks.items} loading={loadingTracks} />
		</>
	)
}

export default Tracks
