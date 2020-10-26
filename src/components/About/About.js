import React from "react";
import styles from "./About.module.scss";

/* 
  TODO
  [] Add one more section for the about: will give the full rundown on tokyo traveler, maybe a link to a separate page?
  [x] Create another component for the about section FullDetail Component
  [x] Container -> Left Container + Right Container
  [x] Left Container : 80vw 100% (width, height) -> about + image
  [x] Right Container : 100% 100% -> about text
  [] Create a Grid layout for About Section
*/

const About = () => {
  return (
    <div className={styles.About}>
      {/* Text Container */}
      <div className={styles.textContainer}>
        <div className={styles.bigText}>
          <h2>A Simple </h2>
          <h2>Travel Guide For</h2>
          <h2>Future Travelers </h2>
        </div>
        {/* About Tokyo Traveler Section */}
        <div className={styles.aboutTextContainer}>
          <p>
            Hello, future travelers! Tokyo Traveler is a guide with the goal of
            helping you effectivly plan you dream trip to Japan! The early
            stages of planning a trip can be exhilarating and have you eager to
            venture out and explore. However, poor planning can lead to an
            unpleasant experience. We can help you with that!
          </p>
        </div>
      </div> 
      {/* Double Image Component */}
      <div className={styles.imageSection}>
        <div className={styles.doubleImageContainer}>
          <div className={styles.doubleImage}></div>
        </div>
      </div>
      {/* FullDetail Component */}
      <div className={styles.FullDetail}>
        <div className={styles.leftContainer}>
          <div className={styles.leftAbout}> 
            <h1 className={styles.leftText}>About</h1>
          </div>
          <div className={styles.leftImage}> </div>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.rightText}>Hello, future travelers! Tokyo Traveler is a guide with the goal of
            helping you effectivly plan you dream trip to Japan! The early
            stages of planning a trip can be exhilarating and have you eager to
            venture out and explore. However, poor planning can lead to an
            unpleasant experience. We can help you with that!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
