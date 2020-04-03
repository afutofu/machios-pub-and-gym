import React, { Component } from "react";

import classes from "./Gym.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";
import CardSection from "../CardSection/CardSection";

class Gym extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.setState({ yPosition: this.myRef.current.getBoundingClientRect().y });

    this.interval = setInterval(() => {
      if (
        window.pageYOffset + window.screen.height - window.screen.height * 0.8 >
        this.state.yPosition
      ) {
        this.setState({ onScreen: true });
      } else if (
        window.pageYOffset + window.screen.height - window.screen.height * 0.1 <
        this.state.yPosition
      ) {
        this.setState({ onScreen: false });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderContent() {
    let hrClasses = [];
    let titleClasses = [];
    let textClasses = [];

    hrClasses.pop();
    titleClasses.pop();
    textClasses.pop();

    if (this.state.onScreen) {
      hrClasses.push(classes.SlideIn);
      titleClasses.push(classes.FadeIn);
      textClasses.push(classes.SlideFadeIn);
    } else {
      hrClasses.push("");
      titleClasses.push("");
      textClasses.push("");
    }

    return (
      <section id="gym" className={classes.Gym} ref={this.myRef}>
        <SectionHeader title="gym" />
        <div className={classes.Container}>
          <p className={classes.Available}>Available every day of the week</p>
          <div className={classes.Close}>
            <p>Gym opens at 7 a.m. and closes at 9 p.m.</p>
            <p>Trainers available from 9 a.m. to 6 p.m.</p>
          </div>
        </div>

        <div className={classes.Container}>
          <hr className={hrClasses.join(" ")} />
          <div className={classes.Close}>
            <div className={classes.GymContent}>
              <h3 className={titleClasses.join(" ")}>
                THE MACHO'S GYM FITNESS EXPERIENCE
              </h3>
              <p className={textClasses.join(" ")}>
                Mollit esse in veniam occaecat. Sint ipsum qui aliquip officia
                tempor aliquip eu. Labore laborum ad sint elit tempor sunt est
                irure non. Officia ullamco ea deserunt laborum aliqua qui.
                Mollit culpa nostrud tempor deserunt culpa velit ex deserunt
                consectetur magna amet veniam sit. Laboris Lorem irure aliqua
                est laboris eu ut fugiat magna duis aliquip cupidatat veniam.
                Nisi nostrud esse veniam anim incididunt ullamco culpa do
                cillum.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.GymGallery}>
          <div className={classes.Transparent}></div>
        </div>
        <CardSection cards={3} />
      </section>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default Gym;
