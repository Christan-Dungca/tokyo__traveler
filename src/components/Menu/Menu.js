import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";

import styles from "./Menu.module.scss";

const Menu = ({ handleShowMenu }) => {
  const menuContainerRef = useRef();
  const closeMenuLeftRef = useRef();
  const closeMenuRightRef = useRef();

  useEffect(() => {
    const menuContainerTimeline = gsap.timeline();

    menuContainerTimeline
      .fromTo(
        menuContainerRef.current,
        { y: -2000 },
        { y: 0, duration: 1, ease: "power4.easeIn" }
      )
      .fromTo(
        closeMenuLeftRef.current,
        { opacity: 0 },
        { rotation: 315, opacity: 1, duration: 0.4 }
      )
      .fromTo(
        closeMenuRightRef.current,
        { opacity: 0 },
        { rotation: 45, opacity: 1, duration: 0.4 },
        "-=0.4"
      );
  }, []);

  return (
    <div className={styles.Menu} ref={menuContainerRef}>
      <div className={styles.closeBtnContainer} onClick={handleShowMenu}>
        <div className={styles.closeBtnLeft} ref={closeMenuLeftRef}></div>
        <div className={styles.closeBtnRight} ref={closeMenuRightRef}></div>
      </div>
    </div>
  );
};

export default Menu;
