import React, { useState, useEffect, useRef } from "react";

import classes from "./About.module.css";

import Pair from "../../components/Pair/Pair";

import pub1 from "../../assets/images/pub1.jpg";
import gym2 from "../../assets/images/gym2.jpg";

const About = () => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const top = Math.round(myRef.current.getBoundingClientRect().top);
      if (top < window.screen.height * 0.05) {
        setOnScreen(true);
      } else if (top > window.screen.height * 0.45) {
        setOnScreen(false);
      }
    }, 100);
  }, []);

  const renderContent = () => {
    let firstPhrase = [],
      secondPhrase = [],
      thirdPhrase = [];

    if (onScreen) {
      firstPhrase.push(classes.SlideIn1);
      secondPhrase.push(classes.SlideIn2);
      thirdPhrase.push(classes.SlideIn3);
    }

    return (
      <section id="about" className={classes.About} ref={myRef}>
        <div className={classes.Container}>
          <h1 className={classes.Title}>
            <span className={firstPhrase.join(" ")}>We serve the best,</span>
            <span className={secondPhrase.join(" ")}>for the best,</span>
            <span className={thirdPhrase.join(" ")}>by the best</span>
          </h1>
          <Pair
            text="Fresh tenderloin steak, mashed potatoes with homemade special
                sauce, a healthy salad and finish it off with a jug full of low
                calorie beer on a Friday evening."
            image={pub1}
            isOdd={true}
          />
          <Pair
            text="Tons of cardio and strength equipment. Unlimited fitness training
                for our members. Comfortable, clean gym and the home of the
                friendliest staff."
            image={gym2}
          />
        </div>
      </section>
    );
  };

  return renderContent();
};

export default About;
