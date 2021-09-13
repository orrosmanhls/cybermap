import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../features/example/pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <p>Login</p>
        </Route>
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
