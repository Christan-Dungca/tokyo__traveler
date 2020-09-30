import React from "react";
import styles from "./Landing.module.scss";
import templeImage from "../../assets/images/temple-pink-left.jpg";
import smallImage from "../../assets/images/green-kimono.jpg"

const Landing = () => {
  return (
    <div className={styles.Landing}>
      {/* Left side of page */}
      <div className={styles.LandingLeft}>
        {/* Large image  */}
        <div className={styles.leftImageContainer}>
          <img src={templeImage} alt="pink temple" className={styles.image} />
        </div>
        {/* Tokyo Traveler Text */}
        <div className={styles.textContainer}>
            <h1 className={styles.text}> Tokyo <span> Traveller </span></h1>
        </div>
      </div>
      {/* Right side of page */}
      <div className={styles.LandingRight}>
        <div className={styles.contentContainer}>
          {/* Small Image */}
          <div className={styles.rightImageContainer}>
            <img src={smallImage} alt="kimono girl"/>
          </div>
          {/* quote container */}
          <div className={styles.quoteContainer}>
            <p className={styles.quote}>"One doesn’t discover new lands without consenting to lose sight of the shore for a very long time."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;


