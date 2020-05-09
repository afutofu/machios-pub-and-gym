import React, { Component } from "react";

import classes from "./Menu.module.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import MenuChanger from "../../components/MenuChanger/MenuChanger";
import MenuCategory from "../../container/MenuCategory/MenuCategory";

class Menu extends Component {
  state = { foodCategory: "meals" };

  setFoodCategory = (foodCategory) => {
    this.setState({ foodCategory });
  };

  renderMenu = () => {
    let menuSections = [];

    switch (this.state.foodCategory) {
      case "meals":
        menuSections = [
          { title: "entrances", items: "6" },
          { title: "dishes", items: "9" },
          { title: "dessert", items: "3" },
        ];
        return <MenuCategory menuSections={menuSections} />;
      case "drinks":
        menuSections = [
          { title: "beers", items: "6" },
          { title: "cocktail", items: "9" },
          { title: "whites", items: "3" },
          { title: "red", items: "3" },
          { title: "other", items: "6" },
        ];
        return <MenuCategory menuSections={menuSections} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <section id="menu" className={classes.Menu}>
        <SectionHeader title="menu" />
        <MenuChanger setFoodCategory={this.setFoodCategory} />
        <div className={classes.Container}>
          <p>Available every weekends</p>
          <div id="menuStart" className={classes.Close}>
            <p>Pub opens at 8 a.m. and closes at 11 p.m.</p>
            <p>
              Visit the blackboard in the main hall to check discounted items
            </p>
          </div>
          {this.renderMenu()}
        </div>
      </section>
    );
  }
}

export default Menu;
