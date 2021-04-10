import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import styles from "./Transition.module.scss";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Transition = ({ handleAnimation }) => {
  const [isUnmounting, setIsUnmounting] = useState(false);

  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const mountTimeline = gsap.timeline({ onComplete: setIsUnmounting(true) });

    mountTimeline.fromTo(
      headerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (isUnmounting) {
      const unmountTimeline = gsap.timeline({
        onComplete: handleAnimation,
      });

      unmountTimeline
        .set(maskRef.current, { transformOrigin: "100% 50%" })
        .to(maskRef.current, { width: "0%", duration: 1 }, "+=1")
        .to(headerRef.current, { x: 900, duration: .9 }, "-=1");
    }
  }, [isUnmounting, handleAnimation]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.mask} ref={maskRef}>
        <h1 className={styles.title} ref={headerRef}>
          Tokyo Traveler
        </h1>
      </div>
    </div>
  );
};

export default Transition;
