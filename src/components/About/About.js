import React, { Component } from "react";

import classes from "./About.module.css";

import Pair from "./Pair/Pair";

import pub1 from "../../assets/images/pub1.jpg";
import gym2 from "../../assets/images/gym2.jpg";

class about extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.interval = setInterval(() => {
      const top = Math.round(this.myRef.current.getBoundingClientRect().top);
      if (top < window.screen.height * 0.05) {
        this.setState({ onScreen: true });
      } else if (top > window.screen.height * 0.45) {
        this.setState({ onScreen: false });
      }
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderContent() {
    let firstPhrase = [],
      secondPhrase = [],
      thirdPhrase = [];

    if (this.state.onScreen) {
      firstPhrase.push(classes.SlideIn1);
      secondPhrase.push(classes.SlideIn2);
      thirdPhrase.push(classes.SlideIn3);
    }

    return (
      <section id="about" className={classes.About} ref={this.myRef}>
        <div className={classes.Container}>
          <h1 className={classes.Title}>
            <span className={firstPhrase.join(" ")}>We serve the best,</span>
            <span className={secondPhrase.join(" ")}>for the best,</span>
            <span className={thirdPhrase.join(" ")}>by the best</span>
          </h1>
          <Pair
            text="Fresh tenderloin steak, mashed potatoes with homemade special
                sauce, a healthy salad and finish it off with a jug full of low
                calorie beer while hanging out with the boys in the warm night of
                a Friday evening after a long day of effort."
            image={pub1}
            isOdd={true}
          />
          <Pair
            text="Tons of cardio and strength equipment. Unlimited fitness training
                for our members. Comfortable, clean gym and the home of the
                friendliest staff."
            image={gym2}
          />
        </div>
      </section>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default about;
