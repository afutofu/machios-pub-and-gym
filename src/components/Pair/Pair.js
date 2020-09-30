import React, { useState, useEffect, useRef } from "react";

import classes from "./Pair.module.css";

const Pair = (props) => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (myRef.current) {
        const top = myRef.current.getBoundingClientRect().top;
        if (top <= window.screen.height * 0.7) {
          setOnScreen(true);
        } else if (top > window.screen.height * 1) {
          setOnScreen(false);
        }
      }
    }, 100);
  });

  const renderContent = () => {
    let textClasses = [classes.Text],
      imageClasses = [];

    if (onScreen) {
      textClasses.push(classes.FadeIn);

      if (props.isOdd) {
        imageClasses.push(classes.SlideInFromRight);
      } else {
        imageClasses.push(classes.SlideInFromLeft);
      }
    }

    let orientation = classes.PairOdd;

    if (!props.isOdd) {
      orientation = classes.PairEven;
      imageClasses.push(classes.ImageEven);
    } else {
      imageClasses.push(classes.ImageOdd);
    }

    return (
      <div className={classes.Pair} ref={myRef}>
        <div className={orientation}>
          <div className={textClasses.join(" ")}>
            <p>{props.text}</p>
          </div>
          <img
            className={imageClasses.join(" ")}
            src={props.image}
            alt=""
          ></img>
        </div>
      </div>
    );
  };

  return renderContent();
};

export default Pair;
