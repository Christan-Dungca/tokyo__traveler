import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import styles from "./Navigation.module.scss";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Navigation = ({ handleShowMenu }) => {
  const navBtnTopRef = useRef();
  const navBtnBottomRef = useRef();

  const handleHamburgerAnimation = () => {
    const hamburgerTimeline = gsap.timeline({
      onComplete: async function () {
        handleShowMenu();
        await timeout(1000)
        this.time(0).kill();
      },
    });

    hamburgerTimeline
      .to(navBtnTopRef.current, { x: 50, duration: 0.8 })
      .to(navBtnBottomRef.current, { x: 50, duration: 0.8}, "-=0.8");
  };

  return (
    <nav className={styles.Navigation}>
      <Link to="/" className={styles.logo}>
        Tokyo Traveler
      </Link>
      <div className={styles.navContainer} onClick={handleHamburgerAnimation}>
        <div className={styles.navBtnTop} ref={navBtnTopRef}></div>
        <div className={styles.navBtnBottom} ref={navBtnBottomRef}></div>
      </div>
    </nav>
  );
};

export default Navigation;
