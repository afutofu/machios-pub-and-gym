import React from "react";

import classes from "./Gallery.module.css";

import pub1 from "../../assets/images/pub2.jpg";
import gym1 from "../../assets/images/gym3.jpg";

const gallery = () => {
  return (
    <section id="gallery" className={classes.Gallery}>
      <div className={classes.Slides}>
        <div className={classes.Slide}>
          <div className={classes.Image} />
        </div>
        <div className={classes.Slide}>
          <div className={classes.Image} />
        </div>
        <div className={classes.Slide}>
          <div className={classes.Image} />
        </div>
        <div className={classes.Slide}>
          <div className={classes.Image} />
        </div>
        <div className={classes.Slide}>
          <div className={classes.Image} />
        </div>
      </div>
    </section>
  );
};

export default gallery;
