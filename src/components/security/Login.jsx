import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const { login, currentUser } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/admin");
    } catch {
      setError("Invalid Username or Password");
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
            <h2 className="text-center mb-4">Log In</h2>
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
              <button disabled={loading} type="submit" className="w-100 btn btn-primary">
                Log In
              </button>
            </form>
          </div>
        </div>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
