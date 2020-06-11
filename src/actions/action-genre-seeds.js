import {
	FETCH_GENRE_SEEDS_INIT,
	FETCH_GENRE_SEEDS_SUCCESS,
	FETCH_GENRE_SEEDS_ERROR
} from 'types/types-genre-seeds.js'
import Http from 'api/client-http'

const genre = new Http()

export const FetchGenres = () => async dispatch => {
	dispatch({
		type: FETCH_GENRE_SEEDS_INIT,
		payload: {
			loading: true,
			error: false,
			errorMessage: false
		}
	})
	try {
		const response = await genre.GenreSeeds()
		dispatch({
			type: FETCH_GENRE_SEEDS_SUCCESS,
			payload: {
				genres: response.genres,
				loading: false,
				errorMessage: false
			}
		})
	} catch (error) {
		dispatch({
			type: FETCH_GENRE_SEEDS_ERROR,
			payload: {
				error: true,
				loading: false,
				errorMessage: JSON.stringify(error.message)
			}
		})
	}
}
