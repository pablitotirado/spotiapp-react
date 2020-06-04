import {
	SEARCH_INIT,
	SEARCH_SUCCESS,
	SEARCH_ERROR
} from 'types/types-search.js'
import { CLEAR_STORAGE } from 'types/types-auth.js'
import Http from 'api/client-http'

const search = new Http()

export const FetchSearchArtist = params => {
	return async dispatch => {
		dispatch({
			type: SEARCH_INIT,
			payload: {
				loading: true,
				error: false
			}
		})
		try {
			const response = await search.getSearch(params)
			dispatch({
				type: SEARCH_SUCCESS,
				payload: {
					search: response.artists.items,
					loading: false,
					error: false
				}
			})
		} catch (error) {
			dispatch({
				type: SEARCH_ERROR,
				payload: {
					loading: false,
					error: true,
					errorMessage: JSON.stringify(error.message)
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
}
