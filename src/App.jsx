import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes'

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div style={{ color: 'white' }}>cargando...</div>}>
				{routes.map((route, i) => (
					<Route {...route} key={i} />
				))}
			</Suspense>
		</BrowserRouter>
	)
}
export default App
