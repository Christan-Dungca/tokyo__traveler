import React from "react";

import BeforeReading from "../BeforeReading/BeforeReading";
import styles from "./About.module.scss";

const About = () => {
  const windowHeight = window.innerHeight;
  const isTabletSize =
    window.innerWidth <= 768 && window.innerWidth > 350 ? true : false;

  return (
    <div className={styles.About}>
      <div className={styles.textContainer}>
        <div className={styles.bigText}>
          <h2>A Simple</h2>
          <h2>Guide For</h2>
          <h2>Travelers</h2>
        </div>
        <div className={styles.aboutTextContainer}>
          <p>
            Tokyo Traveler is a guide with the goal of helping you effectivly
            plan you dream trip to Japan! The early stages of planning a trip
            can be exhilarating and have you eager to venture out and explore.
          </p>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.doubleImageContainer}>
          <div className={styles.doubleImage}></div>
        </div>
      </div>
      {/* <BeforeReading /> */}
    </div>
  );
};

export default About;
