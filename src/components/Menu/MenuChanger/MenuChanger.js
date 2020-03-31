import React from "react";

import { Link } from "react-scroll";

import classes from "./MenuChanger.module.css";

const menuChanger = props => {
  const onDrinksClick = () => {
    props.setFoodCategory("drinks");
  };

  const onMealsClick = () => {
    props.setFoodCategory("meals");
  };

  return (
    <div className={classes.MenuChanger}>
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

export default menuChanger;
