import React from "react";

import classes from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import ActionButton from "./ActionButton/ActionButton";

const navbar = () => {
  let navigationItems = ["menu", "gym", "about", "gallery", "contact"];

  return (
    <div className={classes.Navbar}>
      <Logo />
      <NavigationItems items={navigationItems} />
      <ActionButton text="RESERVE A SEAT" />
    </div>
  );
};

export default navbar;
