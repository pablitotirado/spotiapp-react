import { FETCH_TOKEN, CLEAR_STORAGE } from './types'

const initialState = {
	token: false
}
export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TOKEN:
			return {
				token: action.payload
			}
		case CLEAR_STORAGE:
			return {
				token: action.payload
			}
		default:
			return state
	}
}
