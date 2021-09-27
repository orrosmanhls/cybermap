import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../features/map/pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modal/Modal";
import Analytics from "../features/analytics/pages/Analytics";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Modal />
      <Switch>
        <Route path="/login">
          <p>Login</p>
        </Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/analytics" component={Analytics} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
