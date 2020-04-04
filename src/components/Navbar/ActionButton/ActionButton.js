import React from "react";

import classes from "./ActionButton.module.css";

const actionButton = props => {
  const onReserveSeat = () => {
    alert("You have reserved a seat");
  };

  return (
    <p
      className={classes.ActionButton}
      href="https://github.com/afutofu"
      target="_blank"
      onClick={onReserveSeat}
    >
      {props.text}
    </p>
  );
};

export default actionButton;
