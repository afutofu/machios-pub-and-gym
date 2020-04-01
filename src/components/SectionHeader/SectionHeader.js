import React, { Component } from "react";

import classes from "./SectionHeader.module.css";

class sectionHeader extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.setState({ yPosition: this.myRef.current.getBoundingClientRect().y });
    this.interval = setInterval(() => {
      if (
        this.state.yPosition <
        window.pageYOffset + window.screen.height * 0.6
      ) {
        this.setState({ onScreen: true });
      } else {
        this.setState({ onScreen: false });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderContent = () => {
    {
      if (this.state.onScreen) {
        return (
          <div className={classes.SlideInSectionHeader} ref={this.myRef}>
            <p>{this.props.title}</p>
          </div>
        );
      } else {
        return (
          <div className={classes.SlideOutSectionHeader} ref={this.myRef}>
            <p>{this.props.title}</p>
          </div>
        );
      }
    }
  };

  render() {
    return this.renderContent();
  }
}

export default sectionHeader;
