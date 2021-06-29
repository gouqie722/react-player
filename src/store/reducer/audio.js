import { SET_AUDIO_INFO } from '../action/audioAction.js'

const initialState = {
  audioEle: null,
  currentIndex: 0,
  song: '',
  duration: '',
  lrc: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUDIO_INFO:
      return { ...state, ...payload }
    default:
      return state
  }
}

