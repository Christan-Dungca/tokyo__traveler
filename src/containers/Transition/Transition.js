import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import styles from "./Transition.module.scss";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Transition = ({ handleAnimation }) => {
  const [isUnmounting, setIsUnmounting] = useState(false);

  const transitionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const mountTimeline = gsap.timeline();
    let timer;
    const animateOnMount = async () => {
      await mountTimeline.fromTo(
        headerRef.current,
        { y: 400, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power2.out" }
      );

      timer = await timeout(1000);
      setIsUnmounting(true);
    };
    animateOnMount();
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer;

    const animateOnDismount = async () => {
      const unmountTimeline = gsap.timeline({
        onComplete: () => handleAnimation(),
      });
      timer = await timeout(2000);

      unmountTimeline
        .to(headerRef.current, { y: -400, opacity: 0, duration: 1 })
        .to(transitionRef.current, { y: -1000 }, "+=.3");
    };
    animateOnDismount();

    return () => clearTimeout(timer);
  }, [setIsUnmounting, handleAnimation]);

  return (
    <div className={styles.container}>
      <div className={styles.Transition} ref={transitionRef}>
        <h1 ref={headerRef}>Tokyo Traveler</h1>
      </div>
    </div>
  );
};

export default Transition;
