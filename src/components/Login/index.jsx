import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { login, resetError } from "../../Store/Action/ActionTask";
import { connect } from "react-redux";
import EmailValidator from "../../utils/emailValidator";
import ErrorTextModifier from "../../utils/errorTextModifier";

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
  useEffect(() => {
    if (props.auth.isAuthenticated || localStorage.getItem("token")) {
      props.history.push("/home");
    }
  }, [props]);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [buttonClick, setButtonClick] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.type === "email")
      setCredentials({ ...credentials, email: e.target.value });
    else setCredentials({ ...credentials, password: e.target.value });
    setButtonClick(false);
  };

  const handleOnClick = () => {
    props.resetError();
    if (EmailValidator(credentials.email)) {
      setInvalidEmail(true);
    } else {
      props.login(credentials);
      setInvalidEmail(false);
    }
    setButtonClick(true);
  };

  return (
    <div className="container-fluid">
      <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="row-container justify-content-center rounded py-4">
          <h3 className="text-center text-dark mb-3">
            Please Log In, or Sign Up
          </h3>
          {buttonClick && props.errors.error !== undefined ? (
            <h5 className="text-center text-danger mb-3">
              {ErrorTextModifier(props.errors.error.message)}
            </h5>
          ) : null}
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
                {buttonClick && invalidEmail ? (
                  <small id="emailHelp" className="form-text text-danger">
                    Invalid Email address
                  </small>
                ) : null}
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
  );
}

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials)),
  resetError: () => dispatch(resetError()),
});

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseAuthReducer,
    errors: state.firebaseErrorReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
