import React, { useEffect, useState } from "react";

import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Articles from "../../components/Articles/Articles";
import Calculator from "../Calculator/Calculator";
import Transition from "../../containers/Transition/Transition";
import styles from "./Home.module.scss";

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  }, [isAnimating]);

  if (isAnimating) {
    return <Transition />;
  } else {
    return (
      <div className={styles.Home}>
        <Landing />
        <About />
        <Articles />
        {/* <Calculator className={styles.Calculator} /> */}
      </div>
    );
  }
};

export default Home;
