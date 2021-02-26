import React from "react";


import ARTICLES_DATA from '../../data/articles-data.json';
import BeforeReading from '../BeforeReading/BeforeReading';
import Carousel from "../../containers/Carousel/Carousel";
import styles from "./Articles.module.scss";

const Articles = () => {
  return (
    <div className={styles.Articles}>
      <div className={styles.carouselContainer}>
        <Carousel list={ARTICLES_DATA} type={"images"} />
      </div>s
    </div>
  );
};

export default Articles;
