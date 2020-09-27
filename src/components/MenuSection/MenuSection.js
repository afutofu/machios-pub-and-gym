import React, { useState, useEffect, useRef } from "react";

import classes from "./MenuSection.module.css";

import MenuItem from "../MenuItem/MenuItem";

const MenuSection = (props) => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (myRef.current) {
        const top = myRef.current.getBoundingClientRect().top;
        if (top <= window.screen.height * 0.8) {
          setOnScreen(true);
        } else if (top > window.screen.height * 0.9) {
          setOnScreen(false);
        }
      }
    }, 100);
  }, []);

  const renderMenuItems = () => {
    let menuItems = [];
    props.items.forEach((item, i) => {
      menuItems.push(
        <MenuItem
          key={i}
          name={item.name}
          price={item.price}
          desc={item.desc}
        />
      );
    });
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
