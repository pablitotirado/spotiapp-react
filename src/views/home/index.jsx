import React from 'react'
import NewReleases from 'components/new-releases'
import RecentlyPlayed from 'components/recently-played'
import './styles.scss'
const Home = () => {
	return (
		<>
			<div
				onScrollCapture={e => console.log(e)}
				className='home-container animated fade-in'
			>
				<NewReleases />
				<RecentlyPlayed />
			</div>
		</>
	)
}

export default Home
