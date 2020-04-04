import React, { Component } from "react";

import classes from "./Card.module.css";

class card extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.setState({ yPosition: this.myRef.current.getBoundingClientRect().y });
    this.interval = setInterval(() => {
      if (
        window.pageYOffset + window.screen.height - window.screen.height * 0.4 >
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
    let cardClasses = [classes.Card];

    if (this.state.onScreen) {
      cardClasses.push(classes.SlideIn);
    }

    return (
      <div className={cardClasses.join(" ")} ref={this.myRef}>
        <img src={this.props.image} width="200px" height="130px" alt=""></img>
        <h5 className={classes.Title}>{this.props.title}</h5>
        <p className={classes.Desc}>{this.props.desc}</p>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default card;
