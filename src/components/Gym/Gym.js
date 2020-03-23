import React from "react";

import classes from "./Gym.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";
import CardSection from "../CardSection/CardSection";

const gym = () => {
  return (
    <section id="gym" className={classes.Gym}>
      <SectionHeader title="gym" />
      <div className={classes.Container}>
        <p className={classes.Available}>Available every day of the week</p>
        <div className={classes.Close}>
          <p>Gym opens at 7 a.m. and closes at 9 p.m.</p>
          <p>Trainers available from 9 a.m. to 6 p.m.</p>
        </div>
      </div>

      <div className={classes.Container}>
        <hr />
        <div className={classes.Close}>
          <div className={classes.GymContent}>
            <h3>THE MACHO'S GYM FITNESS EXPERIENCE</h3>
            <p>
              Mollit esse in veniam occaecat. Sint ipsum qui aliquip officia
              tempor aliquip eu. Labore laborum ad sint elit tempor sunt est
              irure non. Officia ullamco ea deserunt laborum aliqua qui. Mollit
              culpa nostrud tempor deserunt culpa velit ex deserunt consectetur
              magna amet veniam sit. Laboris Lorem irure aliqua est laboris eu
              ut fugiat magna duis aliquip cupidatat veniam. Nisi nostrud esse
              veniam anim incididunt ullamco culpa do cillum.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.GymGallery}>
        <div className={classes.Transparent}></div>
      </div>
      <CardSection cards={3} />
    </section>
  );
};

export default gym;
