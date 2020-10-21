import React from "react";
import styles from "./About.module.scss";

/* 
  TODO
  [x] Create a container for the Text
  [x] Style container to be a flex container with large text centered in the middle of section
  [x] Create a container for double image art
  [x] Have containers each be 50% of the About section
  [] Creat a grid Layout to overlap the images, no need for the layout to change on smaller screens: it will just get smaller
  [] Have the big text and overlapping image sections next to each other then try below each other 
  [] Add additional styling elements to the grid and photos
  [] ? Add scaling on hover to make some sort of cool interactin
  [] ? Create a component to separate the About section and Article section
  [] Picture large left 50% ==> "hello, future travlers" ==> goal of tokyo traveler... etc
  [] Double Image Large Next to each other
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
      {/* Double Image Centered on Page */}
      <div className={styles.imageSection}>
        <div className={styles.doubleImageContainer}> 
          <div className={styles.doubleImage}></div>        
        </div>
      </div>
    </div>
  );
};

export default About;
