import React from "react";

import classes from "./ActionButton.module.css";

const actionButton = props => {
  const onReserveSeat = () => {
    alert("You have reserved a seat");
  };

  return (
    <div className={classes.ActionButton}>
      <p onClick={onReserveSeat}>{props.text}</p>
    </div>
  );
};

export default actionButton;
