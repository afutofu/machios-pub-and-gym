import React from "react";

import classes from "./Main.module.css";

import ReservationModal from "../../components/ReservationModal/ReservationModal";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Menu from "../../pages/Menu/Menu";
import Gym from "../../pages/Gym/Gym";
import About from "../../pages/About/About";
import Gallery from "../../pages/Gallery/Gallery";
import Contact from "../../pages/Contact/Contact";

const main = () => {
  return (
    <div className={classes.Main}>
      <ReservationModal />
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
