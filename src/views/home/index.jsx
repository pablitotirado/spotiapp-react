import React from 'react'
import { NewReleases } from 'components'
import { RecentlyPlayed } from 'components'
import './styles.scss'

const Home = () => {
	return (
		<>
			<div className='home-container animated fade-in'>
				<NewReleases />
				<RecentlyPlayed />
			</div>
		</>
	)
}

export default Home
