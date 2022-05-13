import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import Store from "../ReduxData/Store";
import { USER_DATA } from "../ReduxData/actions/UserActions";
const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

const Profile = (props) => {
  const _id = localStorage.getItem("id");
  useEffect(() => {
    axios.get(`http://localhost:4000/user/${_id}`).then((data) => {
      Store.dispatch({
        ...USER_DATA,
        payload: {
          userData: data,
        },
      });
    });
  }, []);
  if (props.userData) {
    {
      console.log(props.userData.data);
    }
    return (
      <>
        <div className="profile-container">
          <div className="container-fluid">
            <h1>User's Details</h1>
            <div className="row">
              <div className="col-md-5 userDetailBox">
                <i class="bi bi-person"></i>
                <input type="text" value={props.userData.data.name} />
              </div>
              <div className="col-md-5 userDetailBox">
                <i class="bi bi-envelope"></i>
                <input type="text" value={props.userData.data.email} />
              </div>
              <div className="col-md-5 userDetailBox">
                <i class="bi bi-telephone"></i>
                <input type="text" value={props.userData.data.phone} />
              </div>
              <div className="col-md-5 userDetailBox">
                <i class="bi bi-geo-alt"></i>
                <input type="text" value={props.userData.data.address} />
              </div>

              <button className="btn btn-dark editbtn">Edit User</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    <img src="images/loader1.gif" />;
  }
};
export default connect(mapStateToProps)(Profile);
