import {
	BROW_CATEGORIES_INIT,
	BROW_CATEGORIES_SUCCESS,
	BROW_CATEGORIES_ERROR
} from 'types/types-browser-categories'

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
