import {
	FETCH_ALBUMS_INIT,
	FETCH_ALBUMS_SUCCESS,
	FETCH_ALBUMS_ERROR
} from 'types/types-browser'

const initialState = {
	albums: [],
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
				albums: action.payload.albums,
				loading: action.payload.loading,
				error: action.payload.error
			}
		case FETCH_ALBUMS_ERROR:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		default:
			return state
	}
}
