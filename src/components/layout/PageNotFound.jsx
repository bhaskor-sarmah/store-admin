import React from "react";
import {Link} from "react-router-dom"

export default function PageNotFound() {
 
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="w-100 text-center mt-2">
          404 ! Page not found.
          <br/>
          <Link to="/login">Click here</Link> to go to the Login Page
        </div>
      </div>
    </div>
  );
}
