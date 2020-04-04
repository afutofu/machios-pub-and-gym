import React from "react";

import classes from "./CardSection.module.css";

import Card from "./Card/Card";

const cardSection = props => {
  const renderCards = () => {
    let cards = [];
    for (let i = 0; i < props.cards.length; i++) {
      cards.push(
        <Card
          key={i}
          title={props.cards[i].title}
          desc="Culpa duis excepteur aliqua consectetur officia et eiusmod officia cillum sunt eu laborum aliqua et."
          image={props.cards[i].image}
        />
      );
    }
    return cards;
  };

  return <div className={classes.CardSection}>{renderCards()}</div>;
};

export default cardSection;
