import { SET_LOGIN_USER } from '../action/loginUserAction.js'

export default function (state = null, action) {
  switch (action.type) {
    case SET_LOGIN_USER:
      return action.payload
    default:
      return state
  }
}

// reducer函数创建快捷键
// rxreducer

