import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = ({ toggleNavHandler }) => {
  return (
    <div className={styles.Menu}>
      <p onClick={toggleNavHandler} className={styles.closeBtn}>
        Close
      </p>
      <div className={styles.container}>
        <div className={styles.imageContainer}></div>
        <div className={styles.linksContainer}>
          <div className={styles.mainLinks}>
            <Link to='/' className={styles.mainLink} onClick={toggleNavHandler}>
              Home
            </Link>
            <Link to='/' className={styles.mainLink}>
              About
            </Link>
            <Link to='/' className={styles.mainLink}>
              Budget
            </Link>
          </div>
          <div className={styles.pageLinks}>
            <div>Airline Tickets</div>
            <div>When to Travel</div>
            <div>What to Pack</div>
            <div>Living Situation</div>
            <div>Exploring Foods</div>
            <div>Solo vs Group</div>
            <div>Things to do</div>
            <div>Transportation</div>
            <div>General Tips</div>
            <div>Japanese</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
