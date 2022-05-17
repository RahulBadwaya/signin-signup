import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import Store from "../ReduxData/Store";
import { USER_LOGIN } from "../ReduxData/actions/UserActions";

const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
  };
};
const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      navigate("/dashboard");
      return;
    }
  }, []);
  const save = () => {
    Store.dispatch({
      ...USER_LOGIN,
      payload: {
        userLogin: { email, pass },
      },
    });
  };

  const login = (event) => {
    if (props.userLogin) {
      axios.post(`http://localhost:4000/login`, props.userLogin).then((res) => {
        alert(res.data.message);
        // props.setRole(res.user)
        props.setRole(res.data.user.role)
        localStorage.setItem("id" ,res.data.user._id)
        localStorage.setItem("token", res.data.auth);
        if (res.data.auth) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      });
    } else {
      alert("not authorized");
    }
    event.preventDefault();
  };
  return (
    <>
      <div className="container-fluidc login-signup" method="post">
        <div className="row">
          <div className="col-md-10 col-sm-8 loginBOx">
            <form onSubmit={login}>
              <h1>Signin</h1>
              <div className="inputBox">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onBlur={save}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i className="bi bi-envelope"></i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="pass"
                  onBlur={save}
                  required
                  onChange={(e) => setPass(e.target.value)}
                />
                <i className="bi bi-lock"></i>
              </div>
              <div className="loginButtonBox">
                <input type="submit" value="Login" />
                <i className="bi bi-arrow-right-short"></i>
              </div>
              <Link to="/signup" className="createLink">
                Create An Account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(Login);
