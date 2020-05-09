import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-scroll";

import classes from "./MenuChanger.module.css";

const MenuChanger = (props) => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const { top, bottom } = myRef.current.getBoundingClientRect();
      if (
        top <= window.screen.height * 0.2 &&
        bottom > window.screen.height * 0.5
      ) {
        setOnScreen(true);
      } else {
        setOnScreen(false);
      }
    }, 1000);
  }, []);

  const onDrinksClick = () => {
    props.setFoodCategory("drinks");
  };

  const onMealsClick = () => {
    props.setFoodCategory("meals");
  };

  const renderContent = () => {
    let menuChangerClasses = [classes.MenuChanger, classes.SlideOut];

    menuChangerClasses.pop();
    if (onScreen) {
      menuChangerClasses.push(classes.SlideIn);
    } else {
      menuChangerClasses.push(classes.SlideOut);
    }

    return (
      <div className={menuChangerClasses.join(" ")} ref={myRef}>
        <div className={classes.Options}>
          <Link
            className={classes.Drinks}
            onClick={onDrinksClick}
            to="menuStart"
            smooth={true}
            duration={1000}
          >
            <p>drinks</p>
          </Link>
          <Link
            className={classes.Meals}
            onClick={onMealsClick}
            to="menuStart"
            smooth={true}
            duration={1000}
          >
            <p>meals</p>
          </Link>
        </div>
      </div>
    );
  };

  return renderContent();
};

export default MenuChanger;
