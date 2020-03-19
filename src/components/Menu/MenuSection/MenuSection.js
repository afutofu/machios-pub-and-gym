import React from "react";

import classes from "./MenuSection.module.css";

import MenuItem from "../MenuItem/MenuItem";

const menuSection = props => {
  return (
    <div className={classes.MenuSection}>
      <p className={classes.MenuSectionTitle}>{props.title}</p>
      <hr />

      <MenuItem
        name="lorem"
        price="5"
        desc="Dolor est occaecat culpa qui irure et commodo laborum id ad."
      />
      <MenuItem
        name="lorem"
        price="5"
        desc="Dolor est occaecat culpa qui irure et commodo laborum id ad."
      />
      <MenuItem
        name="lorem"
        price="5"
        desc="Dolor est occaecat culpa qui irure et commodo laborum id ad."
      />
    </div>
  );
};

export default menuSection;
