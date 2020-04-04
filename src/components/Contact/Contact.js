import React, { Component } from "react";

import classes from "./Contact.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";

class Contact extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.setState({ yPosition: this.myRef.current.getBoundingClientRect().y });
    this.interval = setInterval(() => {
      if (
        window.pageYOffset + window.screen.height - window.screen.height * 0.2 <
        this.state.yPosition
      ) {
        this.setState({ onScreen: false });
      } else if (
        window.pageYOffset + window.screen.height - window.screen.height * 0.3 >
        this.state.yPosition
      ) {
        this.setState({ onScreen: true });
      }
    }, 1000);
  }

  renderContent = () => {
    let titleClasses = [classes.Title],
      textClasses = [classes.Close],
      hrClasses = [];

    if (this.state.onScreen) {
      titleClasses.push(classes.FadeIn);
      textClasses.push(classes.FadeIn);
      hrClasses.push(classes.SlideIn);
    }

    return (
      <section id="contact" className={classes.Contact} ref={this.myRef}>
        <SectionHeader title="contact" />
        <div className={classes.Container}>
          <p className={titleClasses.join(" ")}>FIND US</p>
          <div className={textClasses.join(" ")}>
            <p>104 Diamond Block, Top Floor,</p>
            <p>Burj Khalifah, B9 BE8</p>
          </div>
          <hr className={hrClasses.join(" ")} />
          <p className={titleClasses.join(" ")}>RESERVATION</p>
          <div className={textClasses.join(" ")}>
            <p>123.123.1234 or Book online here</p>
            <p>For any other information</p>
            <p>ask@machospubngym.com</p>
          </div>
          <hr className={hrClasses.join(" ")} />
          <p className={titleClasses.join(" ")}>SPECIAL OCCASIONS</p>
          <div className={textClasses.join(" ")}>
            <p>All items on 50% discount on Black Friday</p>
            <p>Items containing eggs are 50% discount on Easter</p>
            <p></p>
          </div>
        </div>
      </section>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default Contact;
