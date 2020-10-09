import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Registration.css";
import { register, resetError } from "../../Store/Action/ActionTask";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EmailValidator from "../../utils/emailValidator";
import ErrorTextModifier from "../../utils/errorTextModifier";

const LabelInput = ({ props }) => {
  return (
    <>
      <label htmlFor={props.exampleInputEmail1}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        className={props.className}
        id={props.id}
        aria-describedby={props.ariaDescribedby}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
};

function Registration(props) {
  useEffect(() => {
    if (props.auth.registered || localStorage.getItem("token")) {
      props.history.push("/");
    }
  }, [props]);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.name === "name")
      setCredentials({ ...credentials, name: e.target.value });
    else if (e.target.name === "email")
      setCredentials({ ...credentials, email: e.target.value });
    else if (e.target.name === "password1") {
      setCredentials({ ...credentials, password1: e.target.value });
      setConfirmPasswordError(false);
    } else if (e.target.name === "password2") {
      setCredentials({ ...credentials, password2: e.target.value });
      setConfirmPasswordError(false);
    }
    setButtonClick(false);
  };

  const handleOnClick = () => {
    props.resetError();
    if (
      EmailValidator(credentials.email) ||
      credentials.password1 !== credentials.password2
    ) {
      if (EmailValidator(credentials.email)) {
        setConfirmPasswordError(false);
        setInvalidEmail(true);
      } else {
        setConfirmPasswordError(true);
        setInvalidEmail(false);
      }
    } else {
      props.register(credentials);
      setInvalidEmail(false);
    }
    setButtonClick(true);
  };

  return (
    <div className="container-fluid">
      <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="row-container justify-content-center rounded py-4">
          <h3 className="text-center text-dark mb-3">Sign Up Here</h3>
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
                    htmlFor: "name",
                    label: "Name",
                    type: "text",
                    name: "name",
                    className: "form-control",
                    id: "exampleInputName1",
                    ariaDescribedby: "NameHelp",
                    placeholder: "Enter Name",
                    onChange: handleOnChange,
                  }}
                />
              </div>
              <div className="form-group">
                <LabelInput
                  props={{
                    htmlFor: "exampleInputEmail1",
                    label: "Email Address",
                    type: "email",
                    name: "email",
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
                    htmlFor: "exampleInputPassword",
                    label: "Password",
                    type: "password",
                    name: "password1",
                    className: "form-control",
                    id: "exampleInputPassword1",
                    ariaDescribedby: "PasswordHelp",
                    placeholder: "Enter Password",
                    onChange: handleOnChange,
                  }}
                />
              </div>
              <div className="form-group">
                <LabelInput
                  props={{
                    htmlFor: "exampleInputPassword1",
                    label: "Confirm Password",
                    type: "password",
                    name: "password2",
                    className: "form-control",
                    id: "exampleInputPassword1",
                    ariaDescribedby: "passwordHelp",
                    placeholder: "Enter Password",
                    onChange: handleOnChange,
                  }}
                />
                {buttonClick && confirmPasswordError ? (
                  <small id="emailHelp" className="form-text text-danger">
                    Password should be same
                  </small>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleOnClick}
              >
                Sign Up
              </button>
              <Link className="float-right" to="/">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  register: (credentials) => dispatch(register(credentials)),
  resetError: () => dispatch(resetError()),
});

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseAuthReducer, //this act as auth
    errors: state.firebaseErrorReducer,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Registration));
