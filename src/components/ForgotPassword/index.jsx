import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForgotPassword.css";

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

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnClick = () => {
    console.log("Data is ", email);
  };

  return (
    <div className="container-fluid">
      <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="row-container justify-content-center rounded py-4">
          <h3 className="text-center text-dark mb-3">
            Please Enter The Registered Email Address
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
