import React from "react";

import classes from "./Main.module.css";

import ImageSlider from "../ImageSlider/ImageSlider";
import Menu from "../Menu/Menu";

const main = () => {
  return (
    <div className={classes.Main}>
      <ImageSlider />
      <Menu />
    </div>
  );
};

export default main;
