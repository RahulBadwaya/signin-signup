import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import Store from '../ReduxData/Store'
import { USER_LOGIN} from '../ReduxData/actions/UserActions'

const mapStateToProps =(state)=>{
    console.log(state.userLogin)
  return {
      userLogin:state.userLogin
  }
}
const Login =(props)=>{
    const [email , setEmail] = useState(null)
    const [pass , setPass] = useState(null)
    
     const save =()=>{
        Store.dispatch({
            ...USER_LOGIN,
            payload:{
                userLogin:{email , pass}
            }
        })
     }

    const login =(event)=>{
        if(props.userLogin!=null){
            axios.post(`http://localhost:4000/login` ,props.userLogin)
            .then(res=>{
                alert(res.data.message)
                props.setLoginUser(res.data.user)
            })
        }
        event.preventDefault()
    }
    return( 
         <>
         <div className="container-fluid" method="post">
                 <div className="row">
                     <div className="col-md-10 col-sm-8 loginBOx">
                         <form onSubmit={login}>
                             <h1>Signin</h1>
                             <div className="inputBox"><input type="email" placeholder="Enter Your Email" name="email" onBlur={save} required onChange={(e)=>setEmail(e.target.value)}/><i className="bi bi-envelope"></i></div>
                            <div className="inputBox"><input type="password" placeholder="Enter Your Password" name="pass" onBlur={save}  required onChange={e=>setPass(e.target.value)}/><i className="bi bi-lock"></i></div> 
                             <div className="loginButtonBox"><input type="submit" value="Login"/><i className="bi bi-arrow-right-short"></i></div>
                             <Link to='/signup' className='createLink'>Create An Account</Link>
                         </form>
                     </div>
                 </div>
         </div>
    </>
    )
}

export default connect(mapStateToProps)(Login);