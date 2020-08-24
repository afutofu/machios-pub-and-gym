import React from "react";

import classes from "./ActionButton.module.css";

const actionButton = props => {
  const onReserveSeat = () => {
    alert("You have reserved a seat");
  };

  return (
    <div className={classes.ActionButton} onClick={onReserveSeat}>
      <p >{props.text}</p>
    </div>
  );
};

export default actionButton;
