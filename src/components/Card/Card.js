import React, { useState, useEffect, useRef } from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const top = myRef.current.getBoundingClientRect().top;
      if (top <= window.screen.height * 0.7) {
        setOnScreen(true);
      } else if (top > window.screen.height * 0.9) {
        setOnScreen(false);
      }
    }, 100);
  }, []);

  const renderContent = () => {
    let cardClasses = [classes.Card];

    if (onScreen) {
      cardClasses.push(classes.SlideIn);
    }

    return (
      <div className={cardClasses.join(" ")} ref={myRef}>
        <img src={props.image} width="200px" height="130px" alt=""></img>
        <h5 className={classes.Title}>{props.title}</h5>
        <p className={classes.Desc}>{props.desc}</p>
      </div>
    );
  };

  return renderContent();
};

export default Card;
