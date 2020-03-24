import React from "react";

import classes from "./Contact.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";

const contact = () => {
  return (
    <section id="contact" className={classes.Contact}>
      <SectionHeader title="contact" />
    </section>
  );
};

export default contact;
