import React from "react";

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
        <p className={classes.Drinks} onClick={onDrinksClick}>
          DRINKS
        </p>
        <p className={classes.Meals} onClick={onMealsClick}>
          MEALS
        </p>
      </div>
    </div>
  );
};

export default menuChanger;
