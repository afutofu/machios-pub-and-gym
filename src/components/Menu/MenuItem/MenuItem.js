import React from "react";

import classes from "./MenuItem.module.css";

const menuItem = props => {
  return (
    <div className={classes.MenuItem}>
      <div className={classes.NamePrice}>
        <p className={classes.Name}>{props.name}</p>
        <p className={classes.Price}>${props.price}</p>
      </div>
      <p className={classes.Desc}>{props.desc}</p>
    </div>
  );
};

export default menuItem;
