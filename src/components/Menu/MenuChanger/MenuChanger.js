import React, { Component } from "react";

import { Link } from "react-scroll";

import classes from "./MenuChanger.module.css";

class menuChanger extends Component {
  myRef = React.createRef();

  state = { yPosition: 0, onScreen: false };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { top, bottom } = this.myRef.current.getBoundingClientRect();
      if (
        top <= window.screen.height * 0.2 &&
        bottom > window.screen.height * 0.5
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

  onDrinksClick = () => {
    this.props.setFoodCategory("drinks");
  };

  onMealsClick = () => {
    this.props.setFoodCategory("meals");
  };

  renderContent = () => {
    let menuChangerClasses = [classes.MenuChanger, classes.SlideOut];

    menuChangerClasses.pop();
    if (this.state.onScreen) {
      menuChangerClasses.push(classes.SlideIn);
    } else {
      menuChangerClasses.push(classes.SlideOut);
    }

    return (
      <div className={menuChangerClasses.join(" ")} ref={this.myRef}>
        <div className={classes.Options}>
          <Link
            className={classes.Drinks}
            onClick={this.onDrinksClick}
            to="menuStart"
            smooth={true}
            duration={1000}
          >
            <p>drinks</p>
          </Link>
          <Link
            className={classes.Meals}
            onClick={this.onMealsClick}
            to="menuStart"
            smooth={true}
            duration={1000}
          >
            <p>meals</p>
          </Link>
        </div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default menuChanger;
