import React from "react";

import { Link } from "react-scroll";

import classes from "./Logo.module.css";
import armIcon from "../../assets/icons/arm.png";

const logo = () => {
  return (
    <Link className={classes.Logo} to="home" smooth={true} duration={1000}>
      <img src={armIcon} width={70} height={70} alt="" />
      <h1 className={classes.Title}>MACHO'S</h1>
      <p className={classes.Type}>PUB & GYM</p>
    </Link>
  );
};

export default logo;
