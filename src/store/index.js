import { createStore } from 'redux'

const defaultState = {
  audioEle: null,
  currentIndex: 0
}

/**
 * 
 * @param {*} state 
 * @param {*} action { type: '描述类型', payload: '附加数据' }
 */
function reducer(state, action) {

  // 返回一个新的状态
  switch (action.type) {
    case 'SET_AUDIO_ELE':
      return { ...state, audioEle: action.ele }
  
    default:
      return state
  }
}

export const setAudio = ele => ({
  type: 'SET_AUDIO_ELE',
  ele
})

const store = createStore(reducer, defaultState)

export default store