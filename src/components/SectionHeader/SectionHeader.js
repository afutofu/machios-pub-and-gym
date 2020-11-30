import React, { useState, useEffect, useRef } from "react";

import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  const myRef = useRef(null);

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (myRef.current) {
        const top = myRef.current.getBoundingClientRect().top;
        if (top < window.screen.height * 0.8) {
          setOnScreen(true);
        } else {
          setOnScreen(false);
        }
      }
    }, 100);
  }, []);

  const renderContent = () => {
    let sectionHeaderClasses = [classes.SectionHeader, classes.SlideOut];
    let textClasses = [];

    if (props.title === "gym") {
      sectionHeaderClasses = [
        classes.SectionHeaderLessPadding,
        classes.SlideOut,
      ];
    }

    sectionHeaderClasses.pop();
    textClasses.pop();

    if (onScreen) {
      sectionHeaderClasses.push(classes.SlideIn);
      textClasses.push(classes.FadeIn);
    } else {
      sectionHeaderClasses.push(classes.SlideOut);
      textClasses.push(classes.FadeOut);
    }

    return (
      <div className={sectionHeaderClasses.join(" ")} ref={myRef}>
        <p className={textClasses}>{props.title}</p>
      </div>
    );
  };

  return renderContent();
};

export default SectionHeader;
