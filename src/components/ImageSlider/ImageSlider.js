import React from "react";

import classes from "./ImageSlider.module.css";

import luxurybar1 from "../../assets/backgrounds/luxurybar1.jpg";

const imageSlider = () => {
  return (
    <div id="home" className={classes.ImageSlider}>
      <div className={classes.Images}>
        <div className={classes.Transparent} />
      </div>
    </div>
  );
};

export default imageSlider;
