import React, { Component } from "react";

import classes from "./SectionHeader.module.css";

class sectionHeader extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.interval = setInterval(() => {
      const top = this.myRef.current.getBoundingClientRect().top;
      if (top < window.screen.height * 0.8) {
        this.setState({ onScreen: true });
      } else {
        this.setState({ onScreen: false });
      }
    }, 100);
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
