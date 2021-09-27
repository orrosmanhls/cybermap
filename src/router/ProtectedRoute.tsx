import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

const ProtectedRoute: React.FC<RouteProps> = (props) => {
  // TODO: replace with authentication logic
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
