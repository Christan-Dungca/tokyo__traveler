import React from "react";
import styles from "./Articles.module.scss";
import Carousel from "../../containers/Carousel/Carousel";
import articlesList from "../../data/articles-data.json";

const Articles = () => {
  return (
    <div className={styles.Articles}>
      <div className={styles.textSection}>
        <div className={styles.textContainer}>
          <h2>Explore the different aspects of traveling in Japan</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            consequuntur temporibus neque suscipit reiciendis. Fuga sed mollitia
            unde obcaecati quam odio laudantium tempore, exercitationem
            explicabo facilis, accusantium quasi saepe! Iusto!
          </p>
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
