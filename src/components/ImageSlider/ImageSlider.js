import React, { useState, useEffect } from "react";

import bar1 from "../../assets/images/luxurybar1.jpg";
import bar2 from "../../assets/images/luxurybar2.jpg";
import bar3 from "../../assets/images/luxurybar3.jpg";

import classes from "./ImageSlider.module.css";

let counter = 0;

const ImageSlider = () => {
  const images = [bar1, bar2, bar3];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      slideImages();
    }, 7000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slideImages = () => {
    if (counter === images.length - 1) {
      counter = 0;
    } else {
      counter += 1;
    }
    setImageIndex(counter);
  };

  return (
    <section id="home" className={classes.ImageSlider}>
      <div className={classes.Slider} style={{ left: `-${imageIndex}00%` }}>
        {images.map((imageLink) => {
          return (
            <img
              key={imageLink}
              src={imageLink}
              alt="failed to load"
              className={classes.Image}
            />
          );
        })}
      </div>
      <div className={classes.Transparent} />
    </section>
  );
};

export default ImageSlider;
