import React from "react";

import classes from "./Socials.module.css";

const socials = () => {
  return (
    <div className={classes.Socials}>
      <a
        href="https://github.com/afutofu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-github"></i>
      </a>
      <i class="fa fa-youtube"></i>
      <i class="fa fa-facebook"></i>
    </div>
  );
};

export default socials;
