import * as types from './action-types.js'


/**
 * 
 * @param {*} state 
 * @param {*} action { type: '描述类型', payload: '附加数据' }
 */
export default function reducer(state, action) {

  // 返回一个新的状态
  switch (action.type) {
    case types.SET_AUDIO_ELE:
      return { ...state, audioEle: action.ele }
    case types.SET_CURRENT_INDEX:
      return { ...state, currentIndex: action.currentIndex }
    default:
      return state
  }
}
