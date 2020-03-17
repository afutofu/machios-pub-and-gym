import React from "react";

import classes from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      <Logo />
      <NavigationItems />
    </div>
  );
};

export default navbar;
