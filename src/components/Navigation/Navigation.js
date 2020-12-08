import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = ({ toggleNavHandler }) => {
  return (
    <nav className={styles.Navigation}>
      <Link to="/" className={styles.logo}>
        Tokyo Traveler
      </Link>
      <div className={styles.navContainer} onClick={toggleNavHandler}>
        <div className={styles.navBtn}></div>
      </div>
    </nav>
  );
};

export default Navigation;