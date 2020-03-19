import React from "react";

import classes from "./Menu.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";
import MenuItem from "./MenuItem/MenuItem";

const menu = () => {
  return (
    <div className={classes.Menu}>
      <SectionHeader title="menu" />
      <div className={classes.Container}>
        <p>Available every weekends</p>
        <div className={classes.Close}>
          <p>Pub opens at 8 a.m. and closes at 12 p.m.</p>
          <p>
            Visit the blackboard in the main hall to check discounted items.
          </p>
        </div>

        <p className={classes.MenuSection}>ENTRANCES</p>
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
    </div>
  );
};

export default menu;
