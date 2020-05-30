import { SEARCH_INIT, SEARCH_SUCCESS, SEARCH_ERROR } from 'types/types-search'

const initialState = {
	search: '',
	loading: false,
	error: false,
	errorMessage: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_INIT:
			return {
				loading: action.payload.loading,
				error: action.payload.error
			}
		case SEARCH_SUCCESS:
			return {
				search: action.payload.search,
				loading: action.payload.loading,
				error: action.payload.error
			}
		case SEARCH_ERROR:
			return {
				loading: action.payload.loading,
				error: action.payload.error,
				errorMessage: action.payload.errorMessage
			}
		default:
			return state
	}
}
