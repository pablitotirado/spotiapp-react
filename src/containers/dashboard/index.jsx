import React, { Suspense } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import routes from './routes'
import Nav from 'components/nav'

const DashBoard = () => {
	return (
		<>
			<BrowserRouter>
				<Nav>
					<Suspense fallback={<div>cargando...</div>}>
						{routes.map((route, i) => (
							<Route key={i} {...route} />
						))}
					</Suspense>
				</Nav>
			</BrowserRouter>
		</>
	)
}

export default DashBoard
