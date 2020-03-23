import React from "react";

import classes from "./Main.module.css";

import ImageSlider from "../ImageSlider/ImageSlider";
import Menu from "../Menu/Menu";
import Gym from "../Gym/Gym";
import About from "../About/About";

const main = () => {
  return (
    <div className={classes.Main}>
      <ImageSlider />
      <Menu />
      <Gym />
      <About />
    </div>
  );
};

export default main;
