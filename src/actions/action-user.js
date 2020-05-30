import { FETCH_USER_INIT, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from 'types/types-user'
import Http from 'api/client-http'

const user = new Http()

export const FetchUser = () => {
	return async dispatch => {
		dispatch({
			type: FETCH_USER_INIT,
			payload: {
				loading: true,
				error: false
			}
		})
		try {
			const response = await user.getProfile()
			dispatch({
				type: FETCH_USER_SUCCESS,
				payload: {
					user: response,
					loading: false,
					error: false
				}
			})
		} catch (error) {
			dispatch({
				type: FETCH_USER_ERROR,
				payload: {
					loading: false,
					error: true,
					errorMessage: JSON.stringify(error.message)
				}
			})
		}
	}
}
