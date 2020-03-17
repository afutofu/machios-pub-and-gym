import React from "react";

import classes from "./ActionButton.module.css";

const actionButton = props => {
  return <a className={classes.ActionButton}>{props.text}</a>;
};

export default actionButton;
