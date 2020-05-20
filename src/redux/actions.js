import { FETCH_TOKEN, CLEAR_STORAGE } from './types'

const queryToken = 'https://accounts.spotify.com/api/token'
const body = new URLSearchParams({
	grant_type: 'client_credentials',
	client_id: '8dc4079d89f04217b4cf7e3c67bae7d4',
	client_secret: 'b77f4340300f4b32bf972ae838827c72'
})
const headers = {
	'Content-Type': 'application/x-www-form-urlencoded'
}
const requestOptions = {
	method: 'POST',
	headers,
	body
}

const FetchToken = response => {
	const { access_token, token_type } = response
	localStorage.setItem('access_token', access_token)
	localStorage.setItem('token_type', token_type)
	return {
		type: FETCH_TOKEN,
		payload: true
	}
}

const Fetch = () => {
	const response = fetch(queryToken, requestOptions)
		.then(res => res.json())
		.then(res => res)
	return response
}

const clearStorage = () => {
	localStorage.clear()
	return {
		type: CLEAR_STORAGE,
		payload: false
	}
}

export const FetchTokenAction = () => {
	return async dispatch => {
		const response = await Fetch()
		dispatch(FetchToken(response))
	}
}

export const ClearStorageAction = () => {
	return dispatch => dispatch(clearStorage())
}
