import React, { Component } from "react";

import classes from "./MenuItem.module.css";

class MenuItem extends Component {
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
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderContent = () => {
    let menuItemClasses = [classes.MenuItem, ""];

    menuItemClasses.pop();

    if (this.state.onScreen) {
      menuItemClasses.push(classes.SlideIn);
    } else {
      menuItemClasses.push("");
    }

    return (
      <div className={menuItemClasses.join(" ")} ref={this.myRef}>
        <div className={classes.NamePrice}>
          <p className={classes.Name}>{this.props.name}</p>
          <p className={classes.Price}>${this.props.price}</p>
        </div>
        <p className={classes.Desc}>{this.props.desc}</p>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default MenuItem;
