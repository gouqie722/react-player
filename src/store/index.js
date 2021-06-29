import { createStore, bindActionCreators } from 'redux'
import * as types from './action-types.js'
import reducer from './reducer.js'
const defaultState = {
  audioEle: null,
  currentIndex: 0
}


export const setAudio = ele => ({
  type: types.SET_AUDIO_ELE,
  ele
})
export const setCurrentIndex = index => ({
  type: types.SET_CURRENT_INDEX,
  currentIndex: index
})

const store = createStore(reducer, defaultState)


const bindAction = bindActionCreators({ setAudio, setCurrentIndex }, store.dispatch)
// console.log(bindAction)
console.log(store.getState())
bindAction.setCurrentIndex(7)
console.log(store.getState())
export default store