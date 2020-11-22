import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/security/PrivateRoute";
import PageNotFound from "./components/layout/PageNotFound";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route component={PageNotFound} />
          </Switch>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
