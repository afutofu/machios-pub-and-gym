import React from "react";

import classes from "./Menu.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";

const menu = () => {
  return (
    <div className={classes.Menu}>
      <SectionHeader title="menu" />
      <div className={classes.Container}>
        <h6>Available every day bruhhh</h6>
      </div>
    </div>
  );
};

export default menu;
