import React, { Component } from "react";

import MenuSection from "../MenuSection/MenuSection";

class menuCategory extends Component {
  renderMenuSection = () => {
    let menuSections = [];
    for (let i = 0; i < this.props.menuSections.length; i++) {
      menuSections.push(
        <MenuSection
          key={this.props.menuSections[i].title}
          title={this.props.menuSections[i].title}
          items={this.props.menuSections[i].items}
        />
      );
    }
    return menuSections;
  };

  render() {
    return this.renderMenuSection();
  }
}

export default menuCategory;
