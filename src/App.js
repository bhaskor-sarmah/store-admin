import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/security/SignUp";
import { Switch, Route } from "react-router-dom";
import Login from "./components/security/Login";
import PrivateRoute from "./components/security/PrivateRoute";
import PageNotFound from "./components/layout/PageNotFound";
import RootRoutes from "./components/layout/RootRoutes";
import { ConfirmationDialogProvider } from "./contexts/ConfirmDialogContext";

function App() {
  return (
    <AuthProvider>
      <ConfirmationDialogProvider>
      <Switch>
        <PrivateRoute path="/admin" component={RootRoutes} />
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={PageNotFound} />
      </Switch>
      </ConfirmationDialogProvider>
    </AuthProvider>
  );
}

export default App;
