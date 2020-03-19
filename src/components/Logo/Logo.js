import React from "react";

import classes from "./Logo.module.css";
import armIcon from "../../assets/icons/arm.png";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={armIcon} width={70} height={70} alt="" />
      <h1 className={classes.Title}>MACHO'S</h1>
      <p className={classes.Type}>PUB & GYM</p>
    </div>
  );
};

export default logo;
