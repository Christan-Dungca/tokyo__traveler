import React from "react";
import styles from "./Articles.module.scss";
import Carousel from "../../containers/Carousel/Carousel";
import articlesList from "../../data/articles-data.json";



const Articles = () => {
  return (
    <div className={styles.Articles}>
      <div className={styles.textSection}>
        <div className={styles.textContainer}>
          <h2>Explore Our Articles</h2>
          <h2>And Dive Into The</h2>
          <h2>Different Aspects Of Traveling</h2>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <Carousel list={articlesList} type={"routing"} />
      </div>
        {/* <Carousel styles={{paddingLeft: "20%"}} /> */}
    </div>
  );
};

export default Articles;
