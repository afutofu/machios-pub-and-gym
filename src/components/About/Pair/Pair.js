import React, { Component } from "react";

import classes from "./Pair.module.css";

class Pair extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.setState({ yPosition: this.myRef.current.getBoundingClientRect().y });
    this.interval = setInterval(() => {
      if (
        window.pageYOffset +
          window.screen.height -
          window.screen.height * 0.95 >
        this.state.yPosition
      ) {
        this.setState({ onScreen: true });
      } else if (
        window.pageYOffset + window.screen.height - window.screen.height * 0.5 <
        this.state.yPosition
      ) {
        this.setState({ onScreen: false });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let orientation = classes.PairOdd;

    if (!this.props.isOdd) {
      orientation = classes.PairEven;
    }

    return (
      <div className={classes.Pair} ref={this.myRef}>
        <div className={orientation}>
          <div className={classes.Text}>
            <p>{this.props.text}</p>
          </div>
          <img src={this.props.image}></img>
        </div>
      </div>
    );
  }
}

export default Pair;
