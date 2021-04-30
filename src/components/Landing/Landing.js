import React, { useEffect, useRef, useContext } from "react";

import gsap from "gsap";
import AnimationContext from "../../context/animation-context";
import styles from "./Landing.module.scss";

const Landing = () => {
  const imageRef = useRef();
  const { isAnimationComplete } = useContext(AnimationContext);

  useEffect(() => {
    if (isAnimationComplete) {
      const mountingTimeline = gsap
        .timeline()
        .fromTo(
          imageRef.current,
          { x: -40, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.8 },
          "+=0.6"
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
