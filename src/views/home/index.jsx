import React from 'react'
import NewReleases from 'components/new-releases'
import RecentlyPlayed from 'components/recently-played'
import './styles.scss'
const Home = () => {
	return (
		<>
			<div className='home-container animated'>
				<NewReleases />
				<RecentlyPlayed />
			</div>
		</>
	)
}

export default Home
