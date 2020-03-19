import React from "react";

import classes from "./SectionHeader.module.css";

const sectionHeader = props => {
  return <div className={classes.SectionHeader}>{props.title}</div>;
};

export default sectionHeader;
