import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
  }, []);
  const loggedOut = () => {
    localStorage.clear();
    navigate("/");
    return;
  };
  return (
    <>
      <div className="dash-container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Zomato
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto  mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link to="/home" className="nav-link" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link" aria-current="page">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/restaurent"
                    className="nav-link"
                    aria-current="page"
                  >
                    Restaurent
                  </Link>
                </li>
                <li className="nav-item">
                  {(props.role?<Link to="/admin" className="nav-link" aria-current="page">
                    Admin
                  </Link>:null)}
                </li>

                <div className="btn-group userProfile">
                  <img
                    src="images/user1.jpg"
                    className=" dropdown-toggle userImg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      {" "}
                      <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={loggedOut}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <div className="banner-container">
          <div className="row">
            <div className="col-md-5 banner">
              <h1>Zomato</h1>
              <h2>Every Meal Matters</h2>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. <br /> The
                passage is attributed to an unknown ...
              </p>
            </div>
            <div className="col-md-5">
              <img src="images/home.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
