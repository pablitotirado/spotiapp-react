import React from 'react'
import { Route } from 'react-router-dom'
import AppContainer from './containers/dashboard'
import AppLogin from './containers/login'

export default () => (
	<Route render={() => (localStorage.getItem('access_token') ? <AppContainer /> : <AppLogin />)} />
)
