import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.textContainer}>
        <p>
          Let us help you effectivly plan you dream trip to Japan! The early
          stages of planning a trip can be exhilarating and have you eager to
          venture out and explore. We can help you with that!
        </p>
      </div>

      <div className={styles.linksGrid}>
        <h3> Tokyo Traveler </h3>
        <ul>
          <li> go </li>
          <li> Home </li>
          <li> About Us </li>
          <li> Articles </li>
          <li> Budget </li>
        </ul>
        <ul>
          <li> social </li>
          <li> instagram </li>
          <li> email </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
