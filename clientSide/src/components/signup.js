import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Store from "../ReduxData/Store";
import { connect } from "react-redux";
import { USER_SIGNUP } from "../ReduxData/actions/UserActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {signupApi} from '../apiCalling/ApiCall'

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const Signup = (props) => {
  const [user , setUser] = useState({
    name:'',
    email:"",
    phone:"",
    adress:"",
    pass:"",
    confirmpass:"",
    role:false
  })
  const navigate = useNavigate();

  const save = () => {
    Store.dispatch({
      ...USER_SIGNUP,
      payload: {
        user: user,
      },
    });
  };
  const signup = (event) => {
    async function userSignupApi (){
      if (props.user != null) {
        if(user.pass === user.confirmpass){
        const res = await signupApi(props.user)
         alert(res.data.message);
         navigate('/')
        }else{
              alert("Password Does Not Matched")
        }
     }
    }
    userSignupApi()
    event.preventDefault();
  };
  const changeHandler =(e)=>{
     setUser({
       ...user,
       [e.target.name]:e.target.value
     })
  }

  return (
    <>{console.log(user)}
      <div className="container-fluid login-signup">
        <div className="row">
          <div className="col-md-10 col-10 loginBOx">
            <form onSubmit={signup} method="post">
              <h1>Signup</h1>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="name"
                  onBlur={save}
                  onChange={changeHandler}
                  required
                />
                <i className="bi bi-person"></i>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onBlur={save}
                  onChange={changeHandler}
                  required
                />
                <i className="bi bi-envelope"></i>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Enter Phone"
                  name="phone"
                  onBlur={save}
                  onChange={changeHandler}
                  required
                />
                <i className="bi bi-telephone"></i>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Enter Address"
                  name="address"
                  onBlur={save}
                  onChange={changeHandler}
                  required
                />
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  placeholder="Create Password"
                  name="pass"
                  onBlur={save}
                  onChange={changeHandler}
                  required
                />
                <i className="bi bi-lock"></i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpass"
                  onBlur={save}
                  onChange={changeHandler}
                  required
                />
                <i className="bi bi-lock"></i>
              </div>
              <div className="inputBox">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  name="role"
                  onBlur={save}
                  onChange={(e)=>setUser({...user , [e.target.name]:e.target.checked})}
                  />
                <label
                  className="form-check-label text-white ms-3"
                  for="flexSwitchCheckDefault"
                >
                  Are You Admin
                </label>
              </div>
              </div>
              <div className="loginButtonBox">
                <input type="submit" value="Signup" />
                <i className="bi bi-arrow-right-short"></i>
              </div>
              <Link to="/" className="createLink">
                Already Have An Account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(Signup);
