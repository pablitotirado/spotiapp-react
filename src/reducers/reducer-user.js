import {
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from 'types/types-user.js'

const initialState = {
  user: [],
  loading: false,
  error: false,
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INIT:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      }
    case FETCH_USER_SUCCESS:
      return {
        user: action.payload.user,
        loading: action.payload.loading,
        error: action.payload.error
      }
    case FETCH_USER_ERROR:
      return {
        loading: action.payload.loading,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage
      }
    default:
      return state
  }
}
