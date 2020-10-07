import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { login } from "../../Store/Action/ActionTask";
import { connect } from "react-redux";

const LabelInput = ({ props }) => {
  return (
    <>
      <label htmlFor={props.exampleInputEmail1}>{props.label}</label>
      <input
        type={props.type}
        className={props.className}
        id={props.id}
        aria-describedby={props.ariaDescribedby}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
};

function Login(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    if (e.target.type === "email")
      setCredentials({ ...credentials, email: e.target.value });
    else 
      setCredentials({ ...credentials, password: e.target.value });
  };

  const handleOnClick = () => {
    props.login(credentials);
  };

  return (
    console.log("Props data is ", props.loginData),
    (
      <div className="container-fluid">
        <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
          <div className="row-container justify-content-center rounded py-4">
            <h3 className="text-center text-dark mb-3">
              Please Log In, or Sign Up
            </h3>
            <div className="row flex-nowrap justify-content-center text-dark mx-0 row-3">
              <div>
                <div className="form-group">
                  <LabelInput
                    props={{
                      htmlFor: "exampleInputEmail1",
                      label: "Email Address",
                      type: "email",
                      className: "form-control",
                      id: "exampleInputEmail1",
                      ariaDescribedby: "emailHelp",
                      placeholder: "Enter email",
                      onChange: handleOnChange,
                    }}
                  />
                  <small id="emailHelp" className="form-text text-dark">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <LabelInput
                    props={{
                      htmlFor: "exampleInputPassword1",
                      label: "Password",
                      type: "password",
                      className: "form-control",
                      id: "exampleInputPassword1",
                      ariaDescribedby: "passwordHelp",
                      placeholder: "Password",
                      onChange: handleOnChange,
                    }}
                  />
                </div>
                <div className="mb-3">
                  <Link to="/forgotPassword">Forgot Password?</Link>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleOnClick}
                >
                  Login
                </button>
                <Link to="/registration">
                  <button
                    type="submit"
                    className="signup-button btn btn-primary float-right"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials)),
});

const mapStateToProps = (state) => {
  return {
    loginData: state.serviceReducer.loginData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
