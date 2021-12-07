import React from "react";
import { useHistory } from "react-router-dom";

import "../style/404.css";

const Page404 = () => {
  const history = useHistory();
  const navigateToHomepage = () => {
    history.push("/");
  };

  return (
    <div className="page-404">
      <h1 className="title">Page not found</h1>
      <button className="button btn" onClick={navigateToHomepage}>
        Back to homepage
      </button>
    </div>
  );
};

export default Page404;
