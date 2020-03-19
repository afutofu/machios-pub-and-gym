import React from "react";

import classes from "./Menu.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";
import MenuChanger from "./MenuChanger/MenuChanger";
import MenuSection from "./MenuSection/MenuSection";

const menu = () => {
  return (
    <div className={classes.Menu}>
      <SectionHeader title="menu" />
      <MenuChanger />
      <div className={classes.Container}>
        <p>Available every weekends</p>
        <div className={classes.Close}>
          <p>Pub opens at 8 a.m. and closes at 12 p.m.</p>
          <p>Visit the blackboard in the main hall to check discounted items</p>
        </div>
        <MenuSection title="entrances" items={6} />
        <MenuSection title="dishes" items={9} />
        <MenuSection title="dessert" items={3} />
      </div>
    </div>
  );
};

export default menu;
