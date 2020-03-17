import React from "react";

import classes from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <div className={classes.NavigationItems}>
      <a>MENU</a>
      <a>GYM</a>
      <a>ABOUT</a>
      <a>GALLERY</a>
      <a>CONTACT</a>
    </div>
  );
};

export default navigationItems;
