import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import styles from "./Navigation.module.scss";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Navigation = ({ handleShowMenu, menuColor }) => {
  const { left, right } = menuColor;
  const navBtnTopRef = useRef();
  const navBtnBottomRef = useRef();
  const navigationRef = useRef();

  useEffect(() => {
    const mountingTimeline = gsap
      .timeline()
      .fromTo(
        navigationRef.current,
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1 }
      );
  }, []);

  const handleHamburgerAnimation = () => {
    const hamburgerTimeline = gsap.timeline({
      onComplete: async function () {
        handleShowMenu();
        await timeout(1000);
        this.time(0).kill();
      },
    });

    hamburgerTimeline
      .to(navBtnTopRef.current, { x: 50, duration: 0.9 })
      .to(navBtnBottomRef.current, { x: 50, duration: 0.8 }, "-=0.8");
  };

  return (
    <nav className={styles.Navigation} ref={navigationRef}>
      <Link to="/" className={styles.logo} style={{ color: left }}>
        Tokyo Traveler
      </Link>

      <div className={styles.navContainer} onClick={handleHamburgerAnimation}>
        <div
          className={styles.navBtnTop}
          ref={navBtnTopRef}
          style={{ background: right }}
        ></div>

        <div
          className={styles.navBtnBottom}
          ref={navBtnBottomRef}
          style={{ background: right }}
        ></div>
      </div>
    </nav>
  );
};

export default Navigation;
