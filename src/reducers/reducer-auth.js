import { FETCH_TOKEN_SUCCESS, CLEAR_STORAGE } from 'types/types-auth'

const initialState = {
	token: localStorage.getItem('access_token') ? true : false,
	error: false,
	loading: false
}
export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TOKEN_SUCCESS:
			return {
				token: action.payload.token,
				error: action.payload.error,
				loading: action.payload.loading
			}
		case CLEAR_STORAGE:
			localStorage.clear()
			return {
				token: action.payload.token
			}
		default:
			return state
	}
}
