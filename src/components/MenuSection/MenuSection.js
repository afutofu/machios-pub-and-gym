import React, { useState, useEffect, useRef } from "react";

import classes from "./MenuSection.module.css";

import MenuItem from "../MenuItem/MenuItem";

const MenuSection = (props) => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const top = myRef.current.getBoundingClientRect().top;
      if (top <= window.screen.height * 0.8) {
        setOnScreen(true);
      } else if (top > window.screen.height * 0.9) {
        setOnScreen(false);
      }
    }, 100);
  }, []);

  const renderMenuItems = () => {
    let menuItems = [];
    for (let i = 0; i < props.items; i++) {
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

  const renderContent = () => {
    let menuSectionTitleClasses = [classes.MenuSectionTitle, ""];
    let hrClasses = [""];

    menuSectionTitleClasses.pop();
    hrClasses.pop();

    if (onScreen) {
      menuSectionTitleClasses.push(classes.FadeIn);
      hrClasses.push(classes.SlideIn);
    } else {
      menuSectionTitleClasses.push("");
      hrClasses.push("");
    }

    return (
      <div className={classes.MenuSection} ref={myRef}>
        <p className={menuSectionTitleClasses.join(" ")}>{props.title}</p>
        <hr className={hrClasses} />
        <div className={classes.MenuItems}>{renderMenuItems()}</div>
      </div>
    );
  };

  return renderContent();
};

export default MenuSection;
