import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.About}>
    {/* LEFT SIDE CONTAINER FOR ABOUT INFORMATION */}
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <div className={styles.title}> 
                <h3> “Someone's sitting in the shade today because someone planted a tree a long time ago.”</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.contentImage}></div>
                <div className={styles.contentText}>
                    <p className={styles.text}>Poor planning can lead to an unpleasant travel experience. Tokyo Traveler's aim is to help readers know everything there is to know about travelling to Japan.Don't miss out on the opportunity to make your next trip to Japan, the one to remember. </p>
                    <a href="#" className={styles.link}>Read more &#8594; </a>
                </div>
            </div>
        </div>
      </div>
      {/* RIGHT SIDE PICTURE CONTAINER */}
      <div className={styles.pictureContainer}></div>
    </div>
  );
};

export default About;
