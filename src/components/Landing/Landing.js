import React, { useState, useEffect } from "react";
import styles from "./Landing.module.scss";

/* 
    TODO:
    [x] Create two sections for larger viewports
    [] Two Section become one on screens smaller than 600, learn implicit grids
    [x] Turn existing landing component into the left portion of the screen
    [x] Take away text, This will be positioned absolute to the screen not relative to the left or right section
    [x] Find image for left side, with background
    [x] Find image for right side, for full background
    [x] Comment out opaque background text for now
*/

const Landing = () => {
  // State will keep track of which image to use from backgroundImage array
  const [background, updateBackground] = useState(0);

  // Component below render images from backgroundImage array
  const backgroundImages = ['smSmallWoman','smSunsetGirl', 'smSumoStadium', 'smTempleSakura'];

  // handleBackground Image is called from useEffect hook to change state
  const handleBackgroundChange = () => {
    // If at the end of the backgroundImage array, set count back to 0
    if (background === backgroundImages.length - 1) {
      updateBackground(0);
    } else {
      updateBackground(background + 1);
    }
  };

  //  DON'T UNCOMMENT WHEN TESTING
  // useEffect will call the handleBackgroundChange function every few seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleBackgroundChange();
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }); // [] will make it run once after mounting

  // ADD THIS TO CLASS: 

  return (
    <div className={styles.Landing}>
      {/* Left / Top Section of Landing Component */}
      <div className={`${styles.imageContainer}`}>
        <div className={styles.image}></div>
      </div>
      {/* Right / Bottom Section of Landing Component */}
      <div className={styles.fullImageSection}></div>
      {/* Title centered in middle of landing section*/}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Tokyo Traveler</h1>
      </div>
      {/* Opaque Background Text */}
      {/* <div className={styles.backgroundTextContainer}>
        <h2 className={styles.backgroundTextTop}>A Simple</h2>
        <h2 className={styles.backgroundTextBottom}>Travel Guide</h2>
      </div> */}
    </div>
  );
};

export default Landing;