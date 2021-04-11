import { SELECTED_TRACK } from 'types/types-player.js'

export const getTrackAndAlbums = uri => dispatch => {
  dispatch({
    type: SELECTED_TRACK,
    payload: {
      uri,
      trackExist: true
    }
  })
}
