import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForgotPassword.css";

export default function ForgotPassword() {
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
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-dark">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Confirm
              </button>
              <Link className="float-right" to="/">Back to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
