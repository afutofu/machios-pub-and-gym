import React from "react";

import classes from "./Gym.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";

const gym = () => {
  return (
    <div className={classes.Gym}>
      <SectionHeader title="gym" />
      <div className={classes.Container}>
        <p className={classes.Available}>Available every day of the week</p>
        <div className={classes.Close}>
          <p>Gym opens at 7 a.m. and closes at 9 p.m.</p>
          <p>Trainers available from 9 a.m. to 6 p.m.</p>
        </div>
        <div className={classes.Close}>
          <p>
            We present the best equipment and training experts from all over the
            world.{" "}
          </p>

          <p>Suited to any type of training.</p>
        </div>
      </div>
    </div>
  );
};

export default gym;
