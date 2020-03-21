import React from "react";

import classes from "./Card.module.css";

const card = props => {
  return (
    <div className={classes.Card}>
      <img src={props.image}></img>
      <h5 className={classes.Title}>{props.title}</h5>
      <p className={classes.Desc}>{props.desc}</p>
    </div>
  );
};

export default card;
