import types from '../ActionTypes'
let user = {
    name:"",
    email:"",
    pass:"",
    confirmpass:""
}
const signupReducer =(state=null , action)=>{
    switch(action.type){
     case types.USER_TYPE_SIGNUP:
         return action.payload.user
     default : return state
    }
}

export default signupReducer;