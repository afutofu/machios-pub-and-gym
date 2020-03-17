import React from "react";

import classes from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import ActionButton from "./ActionButton/ActionButton";

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      <Logo />
      <NavigationItems />
      <ActionButton text="RESERVE A SEAT" />
    </div>
  );
};

export default navbar;
