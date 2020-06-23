import {
	FETCH_RECENTLY_PLAYER_INIT,
	FETCH_RECENTLY_PLAYER_SUCCESS,
	FETCH_RECENTLY_PLAYER_ERROR,
	NEXT_PAG_RECENTLY_PLAYED,
	PREV_PAG_RECENTLY_PLAYED,
	INIT_PAG_RECENTLY_PLAYED,
	CHANGE_PAG_RECENTLY_PLAYED_ERROR
} from 'types/types-recentlyplayed'

const initialState = {
	recently: [],
	loading: false,
	error: false,
	errorMessage: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_RECENTLY_PLAYER_INIT:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		case FETCH_RECENTLY_PLAYER_SUCCESS:
			return {
				recently: action.payload.recently,
				loading: action.payload.loading,
				error: action.payload.error
			}
		case FETCH_RECENTLY_PLAYER_ERROR:
			return {
				loading: action.payload.loading,
				error: action.payload.error,
				errorMessage: action.payload.errorMessage
			}
		case INIT_PAG_RECENTLY_PLAYED:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		case NEXT_PAG_RECENTLY_PLAYED:
		case PREV_PAG_RECENTLY_PLAYED:
			return {
				loading: action.payload.loading,
				error: action.payload.error,
				recently: action.payload.data
			}
		case CHANGE_PAG_RECENTLY_PLAYED_ERROR:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		default:
			return state
	}
}
