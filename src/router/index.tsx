import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../features/map/pages/Home/Home";

import Navbar from "../components/Navbar/Navbar";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login">
          <p>Login</p>
        </Route>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
