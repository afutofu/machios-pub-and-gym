import React from "react";

import classes from "./ActionButton.module.css";

const actionButton = (props) => {
  const onReserveModalOpen = () => {
    // alert("You have reserved a seat");
    props.onReserveModalOpen();
  };

  return (
    <div className={classes.ActionButton} onClick={onReserveModalOpen}>
      <p>{props.text}</p>
    </div>
  );
};

export default actionButton;
