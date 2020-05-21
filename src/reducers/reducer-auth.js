import {
	FETCH_TOKEN_INIT,
	FETCH_TOKEN_SUCCESS,
	FETCH_TOKEN_ERROR,
	CLEAR_STORAGE
} from 'types/types-auth'

const initialState = {
	token: localStorage.getItem('access_token') ? true : false,
	error: false,
	loading: false,
	messageError: null
}
export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TOKEN_INIT:
			return {
				token: action.payload.token,
				error: action.payload.error,
				loading: action.payload.loading
			}
		case FETCH_TOKEN_SUCCESS:
			return {
				token: action.payload.token,
				error: action.payload.error,
				loading: action.payload.loading
			}
		case FETCH_TOKEN_ERROR:
			return {
				token: action.payload.token,
				error: action.payload.error,
				loading: action.payload.loading,
				messageError: action.payload.messageError
			}
		case CLEAR_STORAGE:
			return {
				token: action.payload.token
			}
		default:
			return state
	}
}
