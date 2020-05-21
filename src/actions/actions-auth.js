import {
	FETCH_TOKEN_INIT,
	FETCH_TOKEN_SUCCESS,
	FETCH_TOKEN_ERROR,
	CLEAR_STORAGE
} from 'types/types-auth'
import { HttpMethods } from 'api/client-http'

const request = new HttpMethods()

const FetchTokenSuccess = response => {
	const { access_token, token_type } = response
	localStorage.setItem('access_token', access_token)
	localStorage.setItem('token_type', token_type)
	return {
		type: FETCH_TOKEN_SUCCESS,
		payload: {
			token: true,
			error: false,
			loading: false
		}
	}
}

export const FetchTokenAction = () => {
	return async dispatch => {
		dispatch({
			type: FETCH_TOKEN_INIT,
			payload: {
				loading: true,
				error: false,
				token: false
			}
		})
		try {
			const response = await request.fetchToken()
			dispatch(FetchTokenSuccess(response))
		} catch (error) {
			dispatch({
				type: FETCH_TOKEN_ERROR,
				payload: {
					loading: false,
					error: true,
					token: false,
					messageError: JSON.stringify(error.message)
				}
			})
		}
	}
}

const clearStorage = () => {
	localStorage.clear()
	return {
		type: CLEAR_STORAGE,
		payload: {
			token: false
		}
	}
}
export const ClearStorageAction = () => dispatch => dispatch(clearStorage())
