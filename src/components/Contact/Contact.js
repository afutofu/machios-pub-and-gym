import React from "react";

import classes from "./Contact.module.css";

import SectionHeader from "../SectionHeader/SectionHeader";

const contact = () => {
  return (
    <div className={classes.Contact}>
      <SectionHeader title="contact" />
    </div>
  );
};

export default contact;
