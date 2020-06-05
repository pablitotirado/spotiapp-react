import {
	SEARCH_ARTIST_INIT,
	SEARCH_ARTIST_SUCESS,
	SEARCH_ARTIST_ERROR,
	SEARCH_TRACK_INIT,
	SEARCH_TRACK_SUCESS,
	SEARCH_TRACK_ERROR
} from 'types/types-search'

const initialState = {
	searchArtist: '',
	searchTracks: '',
	loadingArtist: false,
	loadingTracks: false,
	errorArtist: false,
	errorTracks: false,
	errorMessageArtist: '',
	errorMessageTracks: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_ARTIST_INIT:
			return {
				...state,
				loadingArtist: action.payload.loadingArtist,
				errorArtist: action.payload.errorArtist
			}
		case SEARCH_ARTIST_SUCESS:
			return {
				...state,
				searchArtist: action.payload.searchArtist,
				loadingArtist: action.payload.loadingArtist,
				errorArtist: action.payload.errorArtist
			}
		case SEARCH_ARTIST_ERROR:
			return {
				...state,
				loadingArtist: action.payload.loadingArtist,
				errorArtist: action.payload.errorArtist,
				errorMessageArtist: action.payload.errorMessageArtist
			}
		case SEARCH_TRACK_INIT:
			return {
				...state,
				loadingTracks: action.payload.loadingTracks,
				errorTracks: action.payload.errorTracks
			}
		case SEARCH_TRACK_SUCESS:
			return {
				...state,
				searchTracks: action.payload.searchTracks,
				loadingTracks: action.payload.loadingTracks
			}
		case SEARCH_TRACK_ERROR:
			return {
				...state,
				loadingTracks: action.payload.loadingTracks,
				errorTracks: action.payload.errorTracks,
				errorMessageTracks: action.payload.errorMessageTracks
			}
		default:
			return state
	}
}
