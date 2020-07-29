import {
	FETCH_RECENTLY_PLAYER_INIT,
	FETCH_RECENTLY_PLAYER_SUCCESS,
	FETCH_RECENTLY_PLAYER_ERROR,
	NEXT_PAG_RECENTLY_PLAYED,
	PREV_PAG_RECENTLY_PLAYED,
	INIT_PAG_RECENTLY_PLAYED,
	CHANGE_PAG_RECENTLY_PLAYED_ERROR
} from 'types/types-recentlyplayed'
import { CLEAR_STORAGE } from 'types/types-auth.js'

import Http from 'api/client-http'

const song = new Http()

export const FetchRecently = () => async dispatch => {
	dispatch({
		type: FETCH_RECENTLY_PLAYER_INIT,
		payload: {
			loading: true,
			error: false
		}
	})
	try {
		const response = await song.getRecentlyPlayed()
		dispatch({
			type: FETCH_RECENTLY_PLAYER_SUCCESS,
			payload: {
				recently: response,
				loading: false,
				error: false
			}
		})
	} catch (error) {
		dispatch({
			type: FETCH_RECENTLY_PLAYER_ERROR,
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

export const PaginationActionRecently = (url, type) => async dispatch => {
	dispatch({
		type: INIT_PAG_RECENTLY_PLAYED,
		payload: {
			loading: true,
			error: false
		}
	})

	if (type === 'prev') {
		try {
			const response = await song.pagination(url)
			dispatch({
				type: PREV_PAG_RECENTLY_PLAYED,
				payload: {
					data: response,
					loading: false,
					error: false
				}
			})
		} catch (error) {
			dispatch({
				type: CHANGE_PAG_RECENTLY_PLAYED_ERROR,
				payload: {
					loading: false,
					error: true
				}
			})
		}
	}
	if (type === 'next') {
		try {
			const response = await song.pagination(url)
			dispatch({
				type: NEXT_PAG_RECENTLY_PLAYED,
				payload: {
					data: response,
					loading: false,
					error: false
				}
			})
		} catch (error) {
			dispatch({
				type: CHANGE_PAG_RECENTLY_PLAYED_ERROR,
				payload: {
					loading: false,
					error: true
				}
			})
		}
	}
}
