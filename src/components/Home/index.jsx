import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { logoutUser } from "../../Store/Action/ActionTask";

function Home(props) {
  const logOut = () => {
    props.logoutUser();
    props.history.push("/");
  };

  return (
    <div className="container-fluid">
      <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="row-container justify-content-center rounded py-4">
          <h3 className="text-center text-dark mb-3">Hi, You are logged in</h3>
          <div className="text-center">
            <button className="signup-button btn btn-primary" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebaseAuthReducer,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
