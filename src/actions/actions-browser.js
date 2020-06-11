import {
	FETCH_ALBUMS_INIT,
	FETCH_ALBUMS_SUCCESS,
	FETCH_ALBUMS_ERROR
} from 'types/types-browser.js'
import { CLEAR_STORAGE } from 'types/types-auth.js'
import Http from 'api/client-http'

const releases = new Http()

export const FetchAlbumsActions = () => async dispatch => {
	dispatch({
		type: FETCH_ALBUMS_INIT,
		payload: {
			loading: true,
			error: false
		}
	})
	try {
		const response = await releases.newReleases()
		dispatch({
			type: FETCH_ALBUMS_SUCCESS,
			payload: {
				loading: false,
				error: false,
				albums: response.albums.items
			}
		})
	} catch (error) {
		dispatch({
			type: FETCH_ALBUMS_ERROR,
			payload: {
				loading: false,
				error: true,
				messageError: JSON.stringify(error.message)
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
