import React, { useEffect, useState } from "react";

import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Articles from "../../components/Articles/Articles";
import Calculator from "../Calculator/Calculator";
import styles from "./Home.module.scss";

const Home = ({ isAnimationComplete }) => {
  return (
    <div className={styles.Home}>
      <Landing isAnimationComplete={isAnimationComplete} />
      <About />
      <Articles />
      {/* <Calculator className={styles.Calculator} /> */}
    </div>
  );
};

export default Home;
