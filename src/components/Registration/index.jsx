import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Registration.css";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="container-fluid">
      <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="row-container justify-content-center rounded py-4">
          <h3 className="text-center text-dark mb-3">Sign Up Here</h3>
          <div className="row flex-nowrap justify-content-center text-dark mx-0 row-3">
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Name"
                />
              </div>
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
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link className="float-right" to="/">Back to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
