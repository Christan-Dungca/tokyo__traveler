import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";
import japanVideo from "../../assets/videos/japan.mp4";

const Menu = ({ toggleNavHandler }) => {
  return (
    <div className={styles.Menu}>
      <div className={styles.overlay}>
        <nav>
          <h3 className={styles.title}> Tokyo Travler </h3>
          <div onClick={toggleNavHandler} className={styles.closeBtnContainer}>
            <div className={styles.btnTop}></div>
            <div className={styles.btnBottom}></div>
          </div>
        </nav>
        <div className={styles.textContainer}>
          <div className={styles.links}>
            <Link to='/' onClick={toggleNavHandler}>
              Home
            </Link>
            <Link to='/' onClick={toggleNavHandler}> About Us </Link>
            <Link to='/' onClick={toggleNavHandler}>
              Articles
            </Link>
            <Link to='/' onClick={toggleNavHandler}> Spending Plan </Link>
          </div>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src={japanVideo} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default Menu;
