import React from "react";
import styles from './Carousel.module.scss'

const Carousel = () => {
  return (
      <div className={styles.items}>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
      </div>
  );
};

export default Carousel;
