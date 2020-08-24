import React, { useState, useEffect, useRef } from "react";

import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (myRef.current){
        const top = myRef.current.getBoundingClientRect().top;
        if (top <= window.screen.height * 0.85) {
          setOnScreen(true);
        } else if (top > window.screen.height * 0.88) {
          setOnScreen(false);
        }
      }
    }, 100);
  });

  const renderContent = () => {
    let menuItemClasses = [classes.MenuItem, ""];

    menuItemClasses.pop();

    if (onScreen) {
      menuItemClasses.push(classes.SlideIn);
    } else {
      menuItemClasses.push("");
    }

    return (
      <div className={menuItemClasses.join(" ")} ref={myRef}>
        <div className={classes.NamePrice}>
          <p className={classes.Name}>{props.name}</p>
          <p className={classes.Price}>${props.price}</p>
        </div>
        <p className={classes.Desc}>{props.desc}</p>
      </div>
    );
  };

  return renderContent();
};

export default MenuItem;
