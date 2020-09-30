import React from "react";

import classes from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import LogoText from "../Logo/LogoText";
import NavigationItems from "./NavigationItems/NavigationItems";
import Socials from "../Socials/Socials";
import ActionButton from "./ActionButton/ActionButton";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";

const Navbar = (props) => {
  let navigationItems = ["menu", "gym", "about", "gallery", "contact"];

  const onReserveModalOpen = () => {
    props.onReserveModalOpen();
  };

  return (
    <div className={classes.Navbar}>
      <HamburgerIcon />
      <Logo />
      <NavigationItems items={navigationItems} />
      <Socials />
      <ActionButton
        text="RESERVE A SEAT"
        onReserveModalOpen={onReserveModalOpen}
      />
    </div>
  );
};

export default Navbar;
