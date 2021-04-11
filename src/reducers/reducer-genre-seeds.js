import {
  FETCH_GENRE_SEEDS_INIT,
  FETCH_GENRE_SEEDS_SUCCESS,
  FETCH_GENRE_SEEDS_ERROR
} from 'types/types-genre-seeds'

const initialState = {
  genres: [],
  loading: false,
  error: false,
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRE_SEEDS_INIT:
      return {
        loading: action.payload.loading,
        error: action.payload.error,
        errorMessage: action.payload.error
      }
    case FETCH_GENRE_SEEDS_SUCCESS:
      return {
        genres: action.payload.genres,
        loading: action.payload.loading,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage
      }
    case FETCH_GENRE_SEEDS_ERROR:
      return {
        loading: action.payload.loading,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage
      }
    default:
      return state
  }
}
