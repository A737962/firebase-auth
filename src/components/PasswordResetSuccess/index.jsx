import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function PasswordResetSuccess() {
  return (
    <div className="container-fluid">
      <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="row-container justify-content-center rounded py-4">
          <h3 className="text-center text-dark mb-3">Password Reset E-Mail Sent To your registered E-mail Address. Please Check Your E-Mail</h3>
          <div className="text-center">
          <Link to="/">
            <button className="signup-button btn btn-primary">Go Back To Login</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
