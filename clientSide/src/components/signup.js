import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Store from "../ReduxData/Store";
import { connect } from "react-redux";
import { USER_SIGNUP } from "../ReduxData/actions/UserActions";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const Signup = (props) => {
  let [name, setName] = useState(null);
  let [email, setEmail] = useState(null);
  let [pass, setPass] = useState(null);
  let [confirmpass, setConfirmpass] = useState(null);
  let [phone, setPhone] = useState(null);
  let [address, setAddress] = useState(null);
  let [role, setRole] = useState(false);
  const navigate = useNavigate();

  const save = () => {
    Store.dispatch({
      ...USER_SIGNUP,
      payload: {
        user: { name, email, pass, confirmpass, phone, address ,role },
      },
    });
  };
  const signup = (event) => {
    if (props.user != null) {
      if (name && email && pass && pass === confirmpass) {
        axios.post(`http://localhost:4000/signup`, props.user).then((res) => {
          console.log(res.data.auth);
          alert(res.data.message);
          navigate("/");
        });
      }
      if (pass !== confirmpass) {
        alert("password does not matched!");
      }
    }
    event.preventDefault();
  };

  return (
    <>{console.log(props.user)}
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPhone(e.target.value)}
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
                  onChange={(e) => setAddress(e.target.value)}
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
                  onChange={(e) => setPass(e.target.value)}
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
                  onChange={(e) => setConfirmpass(e.target.value)}
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
                  onChange={(e) => setRole(e.target.checked)}
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
