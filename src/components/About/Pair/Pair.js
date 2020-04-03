import React, { Component } from "react";

import classes from "./Pair.module.css";

class Pair extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.setState({ yPosition: this.myRef.current.getBoundingClientRect().y });
    this.interval = setInterval(() => {
      if (
        window.pageYOffset + window.screen.height - window.screen.height * 0 <
          this.state.yPosition ||
        window.pageYOffset >
          this.state.yPosition +
            this.myRef.current.getBoundingClientRect().height
      ) {
        this.setState({ onScreen: false });
      } else if (
        window.pageYOffset +
          window.screen.height -
          window.screen.height * 0.55 >
          this.state.yPosition &&
        window.pageYOffset + window.screen.height - window.screen.height * 0.8 <
          this.state.yPosition
      ) {
        this.setState({ onScreen: true });
      }
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderContent() {
    let textClasses = [classes.Text],
      imageClasses = [];

    if (this.state.onScreen) {
      textClasses.push(classes.FadeIn);

      if (this.props.isOdd) {
        imageClasses.push(classes.SlideInFromRight);
      } else {
        imageClasses.push(classes.SlideInFromLeft);
      }
    }

    let orientation = classes.PairOdd;

    if (!this.props.isOdd) {
      orientation = classes.PairEven;
      imageClasses.push(classes.ImageEven);
    } else {
      imageClasses.push(classes.ImageOdd);
    }

    return (
      <div className={classes.Pair} ref={this.myRef}>
        <div className={orientation}>
          <div className={textClasses.join(" ")}>
            <p>{this.props.text}</p>
          </div>
          <img
            className={imageClasses.join(" ")}
            src={this.props.image}
            alt=""
          ></img>
        </div>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default Pair;
