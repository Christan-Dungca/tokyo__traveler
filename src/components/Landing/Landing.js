import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import styles from "./Landing.module.scss";

const Landing = ({ isAnimationComplete }) => {
  const imageRef = useRef();

  useEffect(() => {
    if (isAnimationComplete) {
      const mountingTimeline = gsap
        .timeline()
        // .set(imageRef.current, { transformOrigin: "0% 50%" })
        .fromTo(
          imageRef.current,
          { x: -40, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.8}
        );
    }
  }, [isAnimationComplete]);

  return (
    <div className={styles.Landing}>
      <div className={styles.imageContainer}>
        {isAnimationComplete && (
          <div className={styles.image} ref={imageRef}>
            <div className={styles.overlay} />
          </div>
        )}
      </div>

      <div className={styles.fullImageSection}></div>

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Tokyo Traveler</h1>
      </div>
    </div>
  );
};

export default Landing;
