import React from "react";

import bar1 from "../../assets/images/luxurybar1.jpg";
import bar2 from "../../assets/images/luxurybar2.jpg";
import bar3 from "../../assets/images/luxurybar3.jpg";

import classes from "./ImageSlider.module.css";

class imageSlider extends React.Component {
  state = { imageIndex: 0, images: [bar1, bar2, bar3] };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.slideImages();
    }, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  slideImages = () => {
    const { imageIndex, images } = this.state;
    if (imageIndex === images.length - 1) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: imageIndex + 1 });
    }
  };

  render() {
    return (
      <section id="home" className={classes.ImageSlider}>
        <div
          className={classes.Slider}
          style={{ left: `-${this.state.imageIndex}00%` }}
        >
          {this.state.images.map((imageLink) => {
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
  }
}

export default imageSlider;
