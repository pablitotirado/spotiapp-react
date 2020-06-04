import { FETCH_TOKEN_SUCCESS, CLEAR_STORAGE } from 'types/types-auth.js'

const FetchTokenSuccess = token => {
	localStorage.setItem('access_token', token)
	localStorage.setItem('token_type', 'Bearer')
	return {
		type: FETCH_TOKEN_SUCCESS,
		payload: {
			token: true,
			error: false,
			loading: false
		}
	}
}

export const FetchTokenAction = token => {
	return dispatch => {
		dispatch(FetchTokenSuccess(token))
	}
}

const clearStorage = () => {
	return {
		type: CLEAR_STORAGE,
		payload: {
			token: false
		}
	}
}
export const ClearStorageAction = () => dispatch => dispatch(clearStorage())
