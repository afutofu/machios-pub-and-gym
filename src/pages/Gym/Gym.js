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
      if (myRef.current) {
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
                Experience the highest quality level of fitness in Machio's gym.
                Complete with all forms of exercise equipment, ranging from
                calisthenic equipments such as pull up bars, the obvious free
                weights like dumbbells and barbells, and cardio equipments like
                treadmills and jump ropes. Our trainers are veteran athletes
                with up to 30 years of experience, present to ensure customers
                are given the best possible fitness advice and training in the
                world.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.GymGallery}>
          <div className={classes.Transparent}></div>
        </div>
        <CardSection
          cards={[
            {
              title: "calisthenics",
              image: calisthenics,
              desc:
                "Calisthenics is a form of fitness which utilises gravity and bodyweight leverage to challenge your fitness level",
            },
            {
              title: "free weights",
              image: dumbbell,
              desc:
                "Free weights include any weight you can pick up and move around, such as dumbbells, barbells, and kettlebells.",
            },
            {
              title: "cardio",
              image: cardio,
              desc:
                "Cardio refers to any exercise that creates an energy demand on your body to elevates your heart rate and gets your blood pumping faster",
            },
          ]}
        />
      </section>
    );
  };

  return renderContent();
};

export default Gym;
