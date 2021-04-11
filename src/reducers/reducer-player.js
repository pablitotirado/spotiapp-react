import { SELECTED_TRACK } from 'types/types-player'

const initialState = {
  uri: '',
  trackExist: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_TRACK:
      return {
        uri: action.payload.uri,
        trackExist: action.payload.trackExist
      }
    default:
      return state
  }
}
