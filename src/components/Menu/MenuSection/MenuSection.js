import React from "react";

import classes from "./MenuSection.module.css";

import MenuItem from "../MenuItem/MenuItem";

const menuSection = props => {
  const renderMenuItems = () => {
    let menuItems = [];
    for (let i = 0; i < props.items; i++) {
      menuItems.push(
        <MenuItem
          name="lorem"
          price="5"
          desc="Dolor est occaecat culpa qui irure et commodo laborum id ad."
        />
      );
    }
    return menuItems;
  };

  return (
    <div className={classes.MenuSection}>
      <p className={classes.MenuSectionTitle}>{props.title}</p>
      <hr />
      <div className={classes.MenuItems}>{renderMenuItems()}</div>
    </div>
  );
};

export default menuSection;
