import types from '../ActionTypes'
export const USER_LOGIN = {
  type:types.USER_TYPE_LOGIN,
  payload:{
      userLogin:null
  }
}
export const USER_SIGNUP = {
  type:types.USER_TYPE_SIGNUP,
  payload:{
      user:null
  }
}
export const USER_DATA = {
  type:types.USER_TYPE_USERDATA,
  payload:{
      userData:null
  }
}

