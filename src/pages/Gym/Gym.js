import React, { useState, useEffect, useRef } from "react";

import classes from "./Gym.module.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CardSection from "../../container/CardSection/CardSection";

import calisthenics from "../../assets/images/calisthenics.jpg";
import dumbbell from "../../assets/images/dumbbell.jpg";
import cardio from "../../assets/images/cardio.jpg";

const Gym = () => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if(myRef.current){
        const top = myRef.current.getBoundingClientRect().top;
        if (top <= window.screen.height * 0.2) {
          setOnScreen(true);
        } else if (top > window.screen.height * 0.5) {
          setOnScreen(false);
        }
      }
    }, 100);
  }, []);

  const renderContent = () => {
    let hrClasses = [];
    let titleClasses = [];
    let textClasses = [];

    if (onScreen) {
      hrClasses.push(classes.SlideIn);
      titleClasses.push(classes.FadeIn);
      textClasses.push(classes.SlideFadeIn);
    }

    return (
      <section id="gym" className={classes.Gym} ref={myRef}>
        <SectionHeader title="gym" />
        <div className={classes.Container}>
          <p className={classes.Available}>Available every day of the week</p>
          <div className={classes.Close}>
            <p>Gym opens at 7 a.m. and closes at 9 p.m.</p>
            <p>Trainers available from 9 a.m. to 6 p.m.</p>
          </div>
        </div>

        <div className={classes.Container}>
          <hr className={hrClasses.join(" ")} />
          <div className={classes.Close}>
            <div className={classes.GymContent}>
              <h3 className={titleClasses.join(" ")}>
                THE MACHIO'S GYM FITNESS EXPERIENCE
              </h3>
              <p className={textClasses.join(" ")}>
                Mollit esse in veniam occaecat. Sint ipsum qui aliquip officia
                tempor aliquip eu. Labore laborum ad sint elit tempor sunt est
                irure non. Officia ullamco ea deserunt laborum aliqua qui.
                Mollit culpa nostrud tempor deserunt culpa velit ex deserunt
                consectetur magna amet veniam sit. Laboris Lorem irure aliqua
                est laboris eu ut fugiat magna duis aliquip cupidatat veniam.
                Nisi nostrud esse veniam anim incididunt ullamco culpa do
                cillum.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.GymGallery}>
          <div className={classes.Transparent}></div>
        </div>
        <CardSection
          cards={[
            { title: "calisthenics", image: calisthenics },
            { title: "free weights", image: dumbbell },
            { title: "cardio", image: cardio },
          ]}
        />
      </section>
    );
  };

  return renderContent();
};

export default Gym;
