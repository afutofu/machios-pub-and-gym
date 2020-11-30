import React, { useState, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import classes from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import Socials from "../Socials/Socials";
import ActionButton from "./ActionButton/ActionButton";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";

let firstClick = true;
const Navbar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

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
      enableBodyScroll(document.querySelector("#root"));
      enableBodyScroll(document.querySelector("body"));
      enableBodyScroll(document.querySelector("html"));
      setIsNavOpen(false);
    } else {
      if (getWidth() < 992) {
        disableBodyScroll(document.querySelector("#root"));
        disableBodyScroll(document.querySelector("body"));
        disableBodyScroll(document.querySelector("html"));
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

    console.log(width);

    if (width < 992) {
      return (
        <div className={navClasses.join(" ")}>
          <div className={classes.Container}>
            <HamburgerIcon onClick={onToggleDropDown} />
            <Logo />
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
        </div>
      );
    }

    return (
      <>
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
