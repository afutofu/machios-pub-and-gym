import React from "react";

import bar1 from "../../assets/images/luxurybar1.jpg";
import bar2 from "../../assets/images/luxurybar1.jpg";
import bar3 from "../../assets/images/luxurybar1.jpg";

import classes from "./ImageSlider.module.css";

class imageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [bar1, bar2, bar3] };
  }

  render() {
    return (
      <section id="home" className={classes.ImageSlider}>
        <div className={classes.Images}>
          <div className={classes.Transparent} />
        </div>
      </section>
    );
  }
}

export default imageSlider;
