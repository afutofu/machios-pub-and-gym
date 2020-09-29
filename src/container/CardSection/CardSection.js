import React from "react";

import classes from "./CardSection.module.css";

import Card from "../../components/Card/Card";

const cardSection = (props) => {
  const renderCards = () => {
    let cards = [];
    for (let i = 0; i < props.cards.length; i++) {
      cards.push(
        <Card
          key={i}
          title={props.cards[i].title}
          desc={props.cards[i].desc}
          image={props.cards[i].image}
        />
      );
    }
    return cards;
  };

  return <div className={classes.CardSection}>{renderCards()}</div>;
};

export default cardSection;
