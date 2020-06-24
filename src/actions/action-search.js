import {
	SEARCH_ARTIST_INIT,
	SEARCH_ARTIST_SUCESS,
	SEARCH_ARTIST_ERROR,
	SEARCH_TRACK_INIT,
	SEARCH_TRACK_SUCESS,
	SEARCH_TRACK_ERROR,
	NEXT_PAG_ARTIST,
	PREV_PAG_ARTIST,
	INIT_PAG_ARTIST,
	CHANGE_PAG_ARTIST_ERROR
} from 'types/types-search.js'
import { CLEAR_STORAGE } from 'types/types-auth.js'
import Http from 'api/client-http'

const search = new Http()

export const FetchSearchArtist = params => async dispatch => {
	dispatch({
		type: SEARCH_ARTIST_INIT,
		payload: {
			loadingArtist: true,
			errorArtist: false
		}
	})
	try {
		const response = await search.getSearch(params)
		dispatch({
			type: SEARCH_ARTIST_SUCESS,
			payload: {
				searchArtist: response.artists.items,
				loadingArtist: false,
				errorArtist: false
			}
		})
	} catch (error) {
		dispatch({
			type: SEARCH_ARTIST_ERROR,
			payload: {
				loadingArtist: false,
				errorArtist: true,
				errorMessageArtist: JSON.stringify(error.message)
			}
		})
		dispatch({
			type: CLEAR_STORAGE,
			payload: {
				token: false
			}
		})
	}
}

export const PaginationActionArtist = (url, type) => async dispatch => {
	dispatch({
		type: INIT_PAG_ARTIST,
		payload: {
			loading: true,
			error: false
		}
	})

	if (type === 'prev') {
		try {
			const response = await search.pagination(url)
			dispatch({
				type: PREV_PAG_ARTIST,
				payload: {
					data: response.albums,
					loading: false,
					error: false
				}
			})
		} catch (error) {
			dispatch({
				type: CHANGE_PAG_ARTIST_ERROR,
				payload: {
					loading: false,
					error: true
				}
			})
		}
	}
	if (type === 'next') {
		try {
			const response = await search.pagination(url)
			dispatch({
				type: NEXT_PAG_ARTIST,
				payload: {
					data: response.albums,
					loading: false,
					error: false
				}
			})
		} catch (error) {
			dispatch({
				type: CHANGE_PAG_ARTIST_ERROR,
				payload: {
					loading: false,
					error: true
				}
			})
		}
	}
}

export const FetchSearchTracks = params => async dispatch => {
	dispatch({
		type: SEARCH_TRACK_INIT,
		payload: {
			loadingTracks: true,
			errorTracks: false
		}
	})
	try {
		const response = await search.getSearch(params, 'track')
		dispatch({
			type: SEARCH_TRACK_SUCESS,
			payload: {
				searchTracks: response.tracks,
				loadingTracks: false,
				errorTracks: false
			}
		})
	} catch (error) {
		dispatch({
			type: SEARCH_TRACK_ERROR,
			payload: {
				loadingTracks: false,
				errorTracks: true,
				errorMessageTracks: JSON.stringify(error.message)
			}
		})
		dispatch({
			type: CLEAR_STORAGE,
			payload: {
				token: false
			}
		})
	}
}
