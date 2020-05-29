import {
	FETCH_RECENTLY_PLAYER_INIT,
	FETCH_RECENTLY_PLAYER_SUCCESS,
	FETCH_RECENTLY_PLAYER_ERROR
} from 'types/types-recentlyplayed'

const initialState = {
	albums: [],
	loading: false,
	error: false,
	errorMessage: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}
