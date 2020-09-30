import React from "react";

import { Link } from "react-scroll";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  return (
    <Link
      className={classes.NavigationItem}
      to={`${props.to}`}
      smooth={true}
      duration={1000}
      onClick={props.onNavClose}
    >
      {props.name}
    </Link>
  );
};

export default navigationItem;
