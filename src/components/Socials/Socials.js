import React from "react";

import classes from "./Socials.module.css";

const socials = () => {
  return (
    <div className={classes.Socials}>
      <a
        href="https://github.com/afutofu/machios-pub-and-gym"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github"></i>
      </a>
      <i className="fa fa-youtube"></i>
      <i className="fa fa-facebook"></i>
    </div>
  );
};

export default socials;
