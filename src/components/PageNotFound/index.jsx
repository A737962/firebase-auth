import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="container-fluid">
      <div className="main-container d-flex min-vh-100 align-items-center justify-content-center">
        <div className="row-container justify-content-center rounded py-4">
          <h3 className="text-center text-dark mb-3">404, Page Not Found..!!</h3>
          <div className="text-center">
          <Link to="/">
            <button className="signup-button btn btn-primary">Go Back</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
