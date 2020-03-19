import React from "react";

import classes from "./MenuChanger.module.css";

const menuChanger = () => {
  return (
    <div className={classes.MenuChanger}>
      <div className={classes.Options}>
        <p className={classes.Meals}>MEALS</p>
        <p className={classes.Drinks}>DRINKS</p>
      </div>
    </div>
  );
};

export default menuChanger;
