import React from "react";

import classes from "./Contact.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";

const contact = () => {
  return (
    <section id="contact" className={classes.Contact}>
      <SectionHeader title="contact" />
      <div className={classes.Container}>
        <p className={classes.Title}>FIND US</p>
        <div className={classes.Close}>
          <p>104 Diamond Block, Top Floor,</p>
          <p>Burj Khalifah, B9 BE8</p>
        </div>
        <hr />
        <p className={classes.Title}>RESERVATION</p>
        <div className={classes.Close}>
          <p>123.123.1234 or Book online here</p>
          <p>For any other information</p>
          <p>ask@machospubngym.com</p>
        </div>
        <hr />
        <p className={classes.Title}>SPECIAL OCCASIONS</p>
        <div className={classes.Close}>
          <p>All items on 50% discount on Black Friday</p>
          <p>Items containing eggs are 50% discount on Easter</p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default contact;
