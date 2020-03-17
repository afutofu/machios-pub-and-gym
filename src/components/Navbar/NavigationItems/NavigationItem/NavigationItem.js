import React from "react";

import classes from "./NavigationItem.module.css";

const navigationItem = props => {
  return <a className={classes.NavigationItem}>{props.name}</a>;
};

export default navigationItem;
