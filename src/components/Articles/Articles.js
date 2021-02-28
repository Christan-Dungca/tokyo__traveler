import React from "react";

import ARTICLES_DATA from "../../data/articles-data.json";
import Carousel from "../../containers/Carousel/Carousel";
import styles from "./Articles.module.scss";

const Articles = () => {
  return (
    <div className={styles.Articles}>
      <h2 className={styles.title}>Articles</h2>
      <Carousel list={ARTICLES_DATA} type={"images"} />
    </div>
  );
};

export default Articles;
