import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";

import styles from "./Menu.module.scss";

const Menu = ({ handleShowMenu }) => {
  const menuContainerRef = useRef();

  useEffect(() => {
    const menuContainerTimeline = gsap.timeline();
    menuContainerTimeline.fromTo(
      menuContainerRef.current,
      { y: -2000 },
      { y: 0, duration: 1, ease: "power4.easeIn" }
    );
  }, []);

  return (
    <div className={styles.Menu} ref={menuContainerRef}>
      <h1 onClick={handleShowMenu}> Menu </h1>
    </div>
  );
};

export default Menu;
