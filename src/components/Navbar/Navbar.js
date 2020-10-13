import React, { useState, useEffect } from "react";

import classes from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import Socials from "../Socials/Socials";
import ActionButton from "./ActionButton/ActionButton";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";

let firstClick = true;
const Navbar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  let navigationItems = ["menu", "gym", "about", "gallery", "contact"];

  const getWidth = () => {
    if (window.innerWidth) {
      return window.innerWidth;
    }

    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }

    if (document.body) {
      return document.body.clientWidth;
    }
  };

  const onReserveModalOpen = () => {
    props.onReserveModalOpen();
  };

  const onToggleDropDown = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    } else {
      if (getWidth() < 992) {
        setIsNavOpen(true);
      }
    }
  };

  const onNavClose = () => {
    setIsNavOpen(false);
  };

  const renderContent = () => {
    let navClasses = [classes.Navbar2, classes.Invis];

    if (isNavOpen) {
      navClasses.push(classes.DropDown);
      firstClick = false;
    } else {
      if (!firstClick) {
        navClasses.push(classes.Retract);
      }
    }

    return (
      <>
        <div className={navClasses.join(" ")}>
          <NavigationItems
            items={navigationItems}
            onNavClose={onToggleDropDown}
          />
          <Socials />
          <ActionButton
            text="RESERVE A SEAT"
            onReserveModalOpen={onReserveModalOpen}
          />
        </div>
        <div className={classes.Navbar}>
          {getWidth() < 992 && <HamburgerIcon onClick={onToggleDropDown} />}
          <Logo onNavClose={onNavClose} />
          <NavigationItems
            items={navigationItems}
            onNavClose={onToggleDropDown}
          />
          <Socials />
          <ActionButton
            text="RESERVE A SEAT"
            onReserveModalOpen={onReserveModalOpen}
          />
        </div>
      </>
    );
  };

  return renderContent();
};

export default Navbar;
