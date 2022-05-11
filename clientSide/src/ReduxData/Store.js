import { createStore , combineReducers} from "redux";
import loginReducer from '../ReduxData/reducers/LoginReducer'
import signupReducer from '../ReduxData/reducers/SignupReducer'
 var Store = createStore(combineReducers({
       userLogin:loginReducer,
       user:signupReducer
 }))

 export default Store;