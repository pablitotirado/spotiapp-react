import {
	FETCH_ALBUMS_INIT,
	FETCH_ALBUMS_SUCCESS,
	FETCH_ALBUMS_ERROR,
	NEXT_PAG,
	PREV_PAG,
	INIT_PAG,
	CHANGE_PAG_ERROR
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
				data: response.albums
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

export const PaginationAction = (url, type) => async dispatch => {
	dispatch({
		type: INIT_PAG,
		payload: {
			loading: true,
			error: false
		}
	})

	if (type === 'prev') {
		try {
			const response = await releases.pagination(url)
			dispatch({
				type: PREV_PAG,
				payload: {
					data: response.albums,
					loading: false,
					error: false
				}
			})
		} catch (error) {
			dispatch({
				type: CHANGE_PAG_ERROR,
				payload: {
					loading: false,
					error: true
				}
			})
		}
	}
	if (type === 'next') {
		try {
			const response = await releases.pagination(url)
			dispatch({
				type: NEXT_PAG,
				payload: {
					data: response.albums,
					loading: false,
					error: false
				}
			})
		} catch (error) {
			dispatch({
				type: CHANGE_PAG_ERROR,
				payload: {
					loading: false,
					error: true
				}
			})
		}
	}
}
