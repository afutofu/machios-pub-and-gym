import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const onNavClose = () => {
    props.onNavClose();
  };

  const renderItems = () => {
    return props.items.map((itemName) => {
      return (
        <NavigationItem
          key={itemName}
          name={itemName}
          to={itemName}
          onNavClose={onNavClose}
        />
      );
    });
  };

  return <div className={classes.NavigationItems}>{renderItems()}</div>;
};

export default navigationItems;
