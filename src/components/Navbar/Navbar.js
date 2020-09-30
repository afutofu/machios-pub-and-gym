import React from "react";

import classes from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import Socials from "../Socials/Socials";
import ActionButton from "./ActionButton/ActionButton";

const Navbar = (props) => {
  let navigationItems = ["menu", "gym", "about", "gallery", "contact"];

  const onReserveModalOpen = () => {
    props.onReserveModalOpen();
  };

  return (
    <div className={classes.Navbar}>
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
