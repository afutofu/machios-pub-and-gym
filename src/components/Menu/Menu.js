import React, { Component } from "react";

import classes from "./Menu.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";
import MenuChanger from "./MenuChanger/MenuChanger";
import MenuSection from "./MenuSection/MenuSection";

class Menu extends Component {
  state = { foodCategory: "meals" };

  setFoodCategory = foodCategory => {
    this.setState({ foodCategory });
  };

  renderMenu = () => {
    switch (this.state.foodCategory) {
      case "meals":
        return (
          <React.Fragment>
            <MenuSection title="entrances" items={6} />
            <MenuSection title="dishes" items={9} />
            <MenuSection title="dessert" items={3} />
          </React.Fragment>
        );
      case "drinks":
        return (
          <React.Fragment>
            <MenuSection title="beers" items={9} />
            <MenuSection title="cocktail" items={6} />
            <MenuSection title="whites" items={3} />
            <MenuSection title="red" items={3} />
            <MenuSection title="other" items={6} />
          </React.Fragment>
        );
    }
  };

  render() {
    console.log(this.state.foodCategory);
    return (
      <section id="menu" className={classes.Menu}>
        <SectionHeader title="menu" />
        <MenuChanger setFoodCategory={this.setFoodCategory} />
        <div className={classes.Container}>
          <p>Available every weekends</p>
          <div className={classes.Close}>
            <p>Pub opens at 8 a.m. and closes at 11 p.m.</p>
            <p>
              Visit the blackboard in the main hall to check discounted items
            </p>
          </div>
          <div id="menuStart">{this.renderMenu()}</div>
        </div>
      </section>
    );
  }
}

export default Menu;
