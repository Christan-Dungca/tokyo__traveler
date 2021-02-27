import React, { useState, useEffect } from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.Landing}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <div className={styles.overlay} />
        </div>
      </div>
      <div className={styles.fullImageSection}>
        {/* <div className={styles.overlay} /> */}
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Tokyo Traveler</h1>
      </div>
    </div>
  );
};

export default Landing;
