import React from "react";

import classes from "./Gallery.module.css";

const gallery = () => {
  const firstSlide = [classes.Slide, classes.FirstSlide];

  return (
    <section id="gallery" className={classes.Gallery}>
      <div className={classes.Slides}>
        <input type="radio" name="r" id="r1" className={classes.R1} />
        <input type="radio" name="r" id="r2" className={classes.R2} />
        <input type="radio" name="r" id="r3" className={classes.R3} />
        <input type="radio" name="r" id="r4" className={classes.R4} />
        <input type="radio" name="r" id="r5" className={classes.R5} />
        <div className={firstSlide.join(" ")}>
          <div className={classes.Image1} />
        </div>
        <div className={classes.Slide}>
          <div className={classes.Image2} />
        </div>
        <div className={classes.Slide}>
          <div className={classes.Image3} />
        </div>
        <div className={classes.Slide}>
          <div className={classes.Image4} />
        </div>
        <div className={classes.Slide}>
          <div className={classes.Image5} />
        </div>
      </div>

      <div className={classes.Navigation}>
        <label htmlFor="r1" className={classes.Bar}></label>
        <label htmlFor="r2" className={classes.Bar}></label>
        <label htmlFor="r3" className={classes.Bar}></label>
        <label htmlFor="r4" className={classes.Bar}></label>
        <label htmlFor="r5" className={classes.Bar}></label>
      </div>
    </section>
  );
};

export default gallery;
