import React from "react";

import classes from "./Main.module.css";

import ImageSlider from "../ImageSlider/ImageSlider";
import Menu from "../Menu/Menu";
import Gym from "../Gym/Gym";

const main = () => {
  return (
    <div className={classes.Main}>
      <ImageSlider />
      <Menu />
      <Gym />
    </div>
  );
};

export default main;
