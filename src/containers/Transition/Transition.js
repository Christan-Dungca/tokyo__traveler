import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import styles from "./Transition.module.scss";

const Transition = () => {
  const transitionRef = useRef(null);
  const headerRef = useRef(null);
  const extraRef = useRef(null);
  const timeline = gsap.timeline();

  useEffect(() => {
    setTimeout(() => {
      timeline
        .fromTo(extraRef.current, { y: -1000 }, { y: 0, duration: 1 })
        .fromTo(
          transitionRef.current,
          { y: -1000 },
          { y: 0, duration: 1, opacity: 1 },
          "-=.8"
        )
        // opacity set to 0 in .Transition Class
        .to(transitionRef.current, { opacity: 1 }, "-=1")
        .fromTo(
          headerRef.current,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 0.4 }
        );
    }, 500);

    return () => {
      console.log("reversed timeline");
      timeline.reverse();
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.Transition} ref={transitionRef}>
        <h1 ref={headerRef}>Tokyo Traveler</h1>
      </div>
      <div className={styles.extra} ref={extraRef}></div>
    </div>
  );
};

export default Transition;
