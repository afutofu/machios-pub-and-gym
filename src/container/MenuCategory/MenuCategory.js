import React from "react";

import MenuSection from "../../components/MenuSection/MenuSection";

const menuCategory = (props) => {
  const renderMenuSection = () => {
    let menuSections = [];
    for (let i = 0; i < props.menuSections.length; i++) {
      menuSections.push(
        <MenuSection
          key={props.menuSections[i].title}
          title={props.menuSections[i].title}
          items={props.menuSections[i].items}
        />
      );
    }
    return menuSections;
  };

  return renderMenuSection();
};

export default menuCategory;
