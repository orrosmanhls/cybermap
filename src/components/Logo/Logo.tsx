import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { Img } from "./styles";

interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <Link to="/">
      <Img data-testid="logo" src={logo}></Img>
    </Link>
  );
};

export default Logo;
