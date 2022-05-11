import types from '../ActionTypes'

const loginReducer =(state=null , action)=>{
    switch(action.type){
     case types.USER_TYPE_LOGIN:
         return action.payload.userLogin
     default : return state
    }
}

export default loginReducer