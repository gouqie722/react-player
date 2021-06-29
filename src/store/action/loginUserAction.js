export const SET_LOGIN_USER = 'SET_LOGIN_USER'


export const setLoginUserAction = (user) => ({
  type: SET_LOGIN_USER,
  payload: user
})

// action创建函数快捷键
// rxaction