import React from "react";

import classes from "./CardSection.module.css";

import Card from "./Card/Card";

const cardSection = props => {
  const renderCards = () => {
    let cards = [];
    for (let i = 0; i < props.cards; i++) {
      cards.push(
        <Card
          title="lorem"
          desc="Culpa duis excepteur aliqua consectetur officia et eiusmod officia cillum sunt eu laborum aliqua et."
        />
      );
    }
    return cards;
  };

  return <div className={classes.CardSection}>{renderCards()}</div>;
};

export default cardSection;
