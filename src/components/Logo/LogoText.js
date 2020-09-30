import React from "react";

import { Link } from "react-scroll";

import classes from "./LogoText.module.css";

const logo = () => {
  return (
    <Link className={classes.LogoText} to="home" smooth={true} duration={1000}>
      <h1 className={classes.Title}>
        MACHIO'S <span className={classes.Type}>PUB & GYM</span>
      </h1>
    </Link>
  );
};

export default logo;
