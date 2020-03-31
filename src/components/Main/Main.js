import React from "react";

import classes from "./Main.module.css";

import ImageSlider from "../ImageSlider/ImageSlider";
import Menu from "../Menu/Menu";
import Gym from "../Gym/Gym";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";

const main = () => {
  return (
    <div className={classes.Main}>
      <ImageSlider />
      <div className={classes.Margin}>
        <Menu />
        <Gym />
        <About />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
};

export default main;
