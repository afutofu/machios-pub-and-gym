import React, { Component } from "react";

import classes from "./SectionHeader.module.css";

class sectionHeader extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.setState({ yPosition: this.myRef.current.getBoundingClientRect().y });
    this.interval = setInterval(() => {
      if (
        window.pageYOffset + window.screen.height - 500 >
        this.state.yPosition
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
    let sectionHeaderClasses = [classes.SectionHeader, classes.SlideOut];
    let textClasses = [];

    sectionHeaderClasses.pop();
    textClasses.pop();

    if (this.state.onScreen) {
      sectionHeaderClasses.push(classes.SlideIn);
      textClasses.push(classes.FadeIn);
    } else {
      sectionHeaderClasses.push(classes.SlideOut);
      textClasses.push(classes.FadeOut);
    }

    return (
      <div className={sectionHeaderClasses.join(" ")} ref={this.myRef}>
        <p className={textClasses}>{this.props.title}</p>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default sectionHeader;
