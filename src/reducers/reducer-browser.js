import {
	FETCH_ALBUMS_INIT,
	FETCH_ALBUMS_SUCCESS,
	FETCH_ALBUMS_ERROR,
	NEXT_PAG,
	PREV_PAG,
	INIT_PAG,
	CHANGE_PAG_ERROR
} from 'types/types-browser'

const initialState = {
	data: [],
	loading: false,
	error: false,
	errorMessage: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALBUMS_INIT:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		case FETCH_ALBUMS_SUCCESS:
			return {
				data: action.payload.data,
				loading: action.payload.loading,
				error: action.payload.error
			}
		case FETCH_ALBUMS_ERROR:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		case INIT_PAG:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		case NEXT_PAG:
		case PREV_PAG:
			return {
				loading: action.payload.loading,
				error: action.payload.error,
				data: action.payload.data
			}
		case CHANGE_PAG_ERROR:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		default:
			return state
	}
}
