import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../features/map/pages/Home/Home";

import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modal/Modal";

const AppRouter: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
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
