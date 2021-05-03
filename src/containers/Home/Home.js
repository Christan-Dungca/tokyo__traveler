import React, { useEffect } from "react";

import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Articles from "../../components/Articles/Articles";
import Calculator from "../Calculator/Calculator";
import styles from "./Home.module.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.Home}>
      <Landing />
      <About />
      <Articles />
      <div className={styles.CalculatorSection}>
        <div>
          <h2>
            Find Out The Best Way <br />
            to Spend Your Money.
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            impedit quia magnam magni voluptatum doloribus minima possimus vel
            corporis voluptatibus. Qui, porro?
          </p>
        </div>
        {/* <div className={styles.btn}>
          <p> Get Started </p>
        </div> */}
      </div>
      {/* <Calculator className={styles.Calculator} /> */}
    </div>
  );
};

export default Home;
