import React, { Component } from "react";

import classes from "./MenuSection.module.css";

import MenuItem from "../MenuItem/MenuItem";

class menuSection extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.setState({ yPosition: this.myRef.current.getBoundingClientRect().y });

    this.interval = setInterval(() => {
      if (
        window.pageYOffset + window.screen.height - window.screen.height * 0.2 >
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

  renderMenuItems = () => {
    let menuItems = [];
    for (let i = 0; i < this.props.items; i++) {
      menuItems.push(
        <MenuItem
          key={i}
          name="lorem"
          price="5"
          desc="Dolor est occaecat culpa qui irure et commodo laborum id ad."
        />
      );
    }
    return menuItems;
  };

  renderContent = () => {
    let menuSectionTitleClasses = [classes.MenuSectionTitle, ""];
    let hrClasses = [""];

    menuSectionTitleClasses.pop();
    hrClasses.pop();

    if (this.state.onScreen) {
      menuSectionTitleClasses.push(classes.FadeIn);
      hrClasses.push(classes.SlideIn);
    } else {
      menuSectionTitleClasses.push("");
      hrClasses.push("");
    }

    return (
      <div className={classes.MenuSection} ref={this.myRef}>
        <p className={menuSectionTitleClasses.join(" ")}>{this.props.title}</p>
        <hr className={hrClasses} />
        <div className={classes.MenuItems}>{this.renderMenuItems()}</div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default menuSection;
