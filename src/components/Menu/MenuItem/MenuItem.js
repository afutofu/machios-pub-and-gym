import React from "react";

import classes from "./MenuItem.module.css";

const menuItem = props => {
  return (
    <div className={classes.MenuItem}>
      <h6 className={classes.Name}>{props.name}</h6>
      <p className={classes.Price}>{props.price}</p>
      <p className={classes.Desc}>{props.description}</p>
    </div>
  );
};

export default menuItem;
