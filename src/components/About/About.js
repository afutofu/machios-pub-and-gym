import React from "react";

import classes from "./About.module.css";

import pub1 from "../../assets/images/pub1.jpg";
import gym2 from "../../assets/images/gym2.jpg";

const about = () => {
  return (
    <section id="about" className={classes.About}>
      <div className={classes.Container}>
        <h1 className={classes.Title}>
          We serve the best, for the best, by the best
        </h1>
        <div className={classes.Pair}>
          <div className={classes.Text}>
            {" "}
            <p>
              Fresh tenderloin steak, mashed potatoes with homemade special
              sauce, a healthy salad and finish it off with a jug full of low
              calorie beer while hanging out with the boys in the warm night of
              a Friday evening after a long day of effort.
            </p>
          </div>
          <img src={pub1}></img>
        </div>
        <div className={classes.Pair}>
          <div className={classes.Text}>
            {" "}
            <p>
              Tons of cardio and strength equipment. Unlimited fitness training
              for our members. Comfortable, clean gym and the home of the
              friendliest staff.
            </p>
          </div>
          <img src={gym2}></img>
        </div>
      </div>
    </section>
  );
};

export default about;
