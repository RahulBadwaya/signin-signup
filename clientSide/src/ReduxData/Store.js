import { createStore , combineReducers} from "redux";
import loginReducer from '../ReduxData/reducers/LoginReducer'
import signupReducer from '../ReduxData/reducers/SignupReducer'
import { userDataReducer } from "./reducers/userDataReducer";
 var Store = createStore(combineReducers({
       userLogin:loginReducer,
       user:signupReducer,
       userData:userDataReducer
 }))

 export default Store;