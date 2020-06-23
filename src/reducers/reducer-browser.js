import {
	FETCH_ALBUMS_INIT,
	FETCH_ALBUMS_SUCCESS,
	FETCH_ALBUMS_ERROR,
	NEXT_PAG_NEW_RELEASES,
	PREV_PAG_NEW_RELEASES,
	INIT_PAG_NEW_RELEASES,
	CHANGE_PAG_NEW_RELEASES_ERROR
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
		case INIT_PAG_NEW_RELEASES:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		case NEXT_PAG_NEW_RELEASES:
		case PREV_PAG_NEW_RELEASES:
			return {
				loading: action.payload.loading,
				error: action.payload.error,
				data: action.payload.data
			}
		case CHANGE_PAG_NEW_RELEASES_ERROR:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		default:
			return state
	}
}
