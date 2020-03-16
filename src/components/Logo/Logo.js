import React from "react";

import classes from "./Logo.module.css";
import armIcon from "../../assets/icons/arm.png";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={armIcon} width={50} height={50} />
      <h1>MACHO'S</h1>
      <p>PUB & GYM</p>
    </div>
  );
};

export default logo;
