import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();
  const history = useHistory();

  const { signUp, currentUser } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== cpasswordRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/admin");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group" id="email">
                <label>Email</label>
                <input className="form-control"
                  type="email"
                  ref={emailRef}
                  required
                ></input>
              </div>
              <div className="form-group" id="password">
                <label>Password</label>
                <input className="form-control"
                  type="password"
                  ref={passwordRef}
                  required
                ></input>
              </div>
              <div className="form-group" id="password-confirm">
                <label>Confirm Password</label>
                <input className="form-control"
                  type="password"
                  ref={cpasswordRef}
                  required
                ></input>
              </div>
              <button disabled={loading} type="submit" className="w-100 btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="w-100 text-center mt-2">
          Already Have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
