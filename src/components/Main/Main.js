import React from "react";

import classes from "./Main.module.css";

import ImageSlider from "../ImageSlider/ImageSlider";

const main = () => {
  return (
    <div className={classes.Main}>
      <ImageSlider />
    </div>
  );
};

export default main;
