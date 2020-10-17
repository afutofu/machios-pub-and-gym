import React from "react";

import classes from "./HamburgerIcon.module.css";

const HamburgerIcon = (props) => {
  const onIconClick = () => {
    props.onClick();
  };

  return (
    <div className={classes.HamburgerIcon} onClick={onIconClick}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default HamburgerIcon;
