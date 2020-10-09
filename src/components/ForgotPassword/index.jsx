import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForgotPassword.css";
import { connect } from "react-redux";
import { resetError, resetPassword } from "../../Store/Action/ActionTask";
import EmailValidator from "../../utils/emailValidator";
import ErrorTextMofifier from "../../utils/errorTextModifier";

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

function ForgotPassword(props) {
  useEffect(() => {
    if (props.auth.passwordResetData) {
      props.history.push("/passwordResetSuccess");
    }
  }, [props]);

  const [email, setEmail] = useState("");
  const [buttonClick, setButtonClick] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
    setButtonClick(false);
  };

  const handleOnClick = () => {
    props.resetError();
    if (EmailValidator(email)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
      props.resetPassword(email);
    }
    setButtonClick(true);
  };

  return (
    <div className="container-fluid">
      <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="row-container justify-content-center rounded py-4">
          <h3 className="text-center text-dark mb-3">
            Please Enter The Registered Email Address
          </h3>
          {buttonClick && props.errors.error !== undefined ? (
            <h5 className="text-center text-danger mb-3">
              {ErrorTextMofifier(props.errors.error.message)}
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
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleOnClick}
              >
                Confirm
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
  resetPassword: (email) => dispatch(resetPassword(email)),
  resetError: () => dispatch(resetError()),
});

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseAuthReducer,
    errors: state.firebaseErrorReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
