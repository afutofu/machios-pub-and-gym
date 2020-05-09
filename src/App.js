import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Main from "./container/Main/Main";

const app = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
    </React.Fragment>
  );
};

export default app;
