import React from "react";

import classes from "./Navbar.module.css";
import Logo from "../Logo/Logo";

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      <Logo />
    </div>
  );
};

export default navbar;
