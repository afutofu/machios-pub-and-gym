import React, { useState, useEffect, useRef } from "react";

import classes from "./Contact.module.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Contact = () => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (myRef.current) {
        const top = myRef.current.getBoundingClientRect().top;
        if (top <= window.screen.height * 0.7) {
          setOnScreen(true);
        } else if (top > window.screen.height * 0.8) {
          setOnScreen(false);
        }
      }
    }, 100);
  }, []);

  const renderContent = () => {
    let titleClasses = [classes.Title],
      textClasses = [classes.Close],
      hrClasses = [];

    if (onScreen) {
      titleClasses.push(classes.FadeIn);
      textClasses.push(classes.FadeIn);
      hrClasses.push(classes.ScaleOut);
    }

    return (
      <section id="contact" className={classes.Contact} ref={myRef}>
        {/* <SectionHeader title="contact" /> */}
        <div className={classes.Container}>
          <p className={titleClasses.join(" ")}>FIND US</p>
          <div className={textClasses.join(" ")}>
            <p>104 Diamond Block, Top Floor,</p>
            <p>White Gold Tower, B9 BE8</p>
          </div>
          <hr className={hrClasses.join(" ")} />
          <p className={titleClasses.join(" ")}>RESERVATION</p>
          <div className={textClasses.join(" ")}>
            <p>123.123.1234 or Book online here</p>
            <p>For any other information</p>
            <p>ask@machiospubngym.com</p>
          </div>
          <hr className={hrClasses.join(" ")} />
          <p className={titleClasses.join(" ")}>SPECIAL OCCASIONS</p>
          <div className={textClasses.join(" ")}>
            <p>All items on 50% discount on Black Friday</p>
            <p>Items containing eggs are 50% discount on Easter</p>
            <p></p>
          </div>
        </div>
      </section>
    );
  };

  return renderContent();
};

export default Contact;
