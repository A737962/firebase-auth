import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Registration.css";
import {register} from "../../Store/Action/ActionTask";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleOnChange = (e) => {
    if (e.target.name === "name")
      setCredentials({ ...credentials, name: e.target.value });
    else if (e.target.name === "email")
      setCredentials({ ...credentials, email: e.target.value });
    else if (e.target.name === "password1")
      setCredentials({ ...credentials, password1: e.target.value });
    else if (e.target.name === "password2")
      setCredentials({ ...credentials, password2: e.target.value });
  };

  const handleOnClick = () => {
    props.register(credentials)
  };

  return (
    <div className="container-fluid">
      <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="row-container justify-content-center rounded py-4">
          <h3 className="text-center text-dark mb-3">Sign Up Here</h3>
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
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleOnClick}
              >
                Register
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
  register: (credentials) => dispatch(register(credentials))
});

const mapStateToProps = (state) => {
  return {
    registerData: state.serviceReducer.registerData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);