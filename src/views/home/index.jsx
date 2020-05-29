import React from 'react'
import NewReleases from 'components/new-releases'
import './styles.scss'
const Home = () => {
	return (
		<>
			<div className='home-container'>
				<NewReleases />
			</div>
		</>
	)
}

export default Home
