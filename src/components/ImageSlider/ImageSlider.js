import React from "react";

import classes from "./ImageSlider.module.css";

const imageSlider = () => {
  return (
    <section id="home" className={classes.ImageSlider}>
      <div className={classes.Images}>
        <div className={classes.Transparent} />
      </div>
    </section>
  );
};

export default imageSlider;
