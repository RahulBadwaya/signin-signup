import types from '../ActionTypes'
export const userDataReducer =(state=null , action)=>{
    switch(action.type){
        case types.USER_TYPE_USERDATA:
            return action.payload.userData
            default : return state
    }
}