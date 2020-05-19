import React from 'react'

import './styles.scss'

const Login = ({ history }) => {
	return (
		<>
			<h1 style={{ color: 'white' }}>Hola Logillln</h1>
			<button
				style={{ color: 'white' }}
				onClick={() => {
					localStorage.setItem('access_token', 'a')
					history.push('/home')
				}}
			>
				ir a home
			</button>
		</>
	)
}

export default Login
