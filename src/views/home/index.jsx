import React, { useEffect } from 'react'

const Home = () => {
	useEffect(() => {
		const myHeaders = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}

		const urlencoded = new URLSearchParams({
			grant_type: 'client_credentials',
			client_id: '8dc4079d89f04217b4cf7e3c67bae7d4',
			client_secret: 'b77f4340300f4b32bf972ae838827c72'
		})

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: urlencoded
		}

		fetch('https://accounts.spotify.com/api/token', requestOptions)
			.then(response => response.json())
			.then(result => console.log(result))
			.catch(error => console.log('error', error))
	}, [])

	return (
		<>
			<h1 style={{ color: 'white' }}>Hola home</h1>
		</>
	)
}

export default Home
