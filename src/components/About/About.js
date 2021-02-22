import React from "react";
import styles from "./About.module.scss";
import smGinzaImg from "../../assets/images/small-ginza-building.jpg";
import mdWithinSakura from "../../assets/images/medium-within-sakura-tree.jpg";
import mdWomanRedBG from "../../assets/images/medium-woman-red-background.jpg";

const About = () => {
  const windowHeight = window.innerHeight;
  const isTabletSize =
    window.innerWidth <= 768 && window.innerWidth > 350 ? true : false;

  return (
    <div className={styles.About}>
      <div className={styles.textContainer}>
        <div className={styles.bigText}>
          <h2>
            A Simple
            <br />
            Guide For
            <br />
            Travelers
          </h2>
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
      {/* <div className={styles.stacked}>
        <div className={styles.stackedGridContainer}>
          <div className={styles.topImage}>
            <img src={smGinzaImg} alt="img" />
          </div>
          <div className={styles.bottomImage}>
            <img src={mdWithinSakura} alt="img"></img>
          </div>
        </div> */}
      {/* </div>  */}
    </div>
  );
};

export default About;
