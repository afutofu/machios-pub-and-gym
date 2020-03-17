import React from "react";

import classes from "./NavigationItem.module.css";

const navigationItem = props => {
  console.log(props.name);
  return <a className={classes.NavigationItem}>{props.name}</a>;
};

export default navigationItem;
