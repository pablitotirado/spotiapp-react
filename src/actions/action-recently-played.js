import {
	FETCH_RECENTLY_PLAYER_INIT,
	FETCH_RECENTLY_PLAYER_SUCCESS,
	FETCH_RECENTLY_PLAYER_ERROR
} from 'types/types-recentlyplayed.js'

import Http from 'api/client-http'

const song = new Http()

export const FetchRecently = () => {
	return async dispatch => {
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
					recently: response.items,
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
		}
	}
}
