import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.scss";
import articlesList from "../../data/articles-data.json";
import createCarousel from "../../animations/carouselAnimation";

const Carousel = () => {
  const items = useRef(null);

  useEffect(() => {
    const slider = items.current;
    createCarousel({ slider});
  }, []);

  return (
    <div className={styles.items} ref={items}>
      {articlesList.map((article) => {
        return (
          <div className={styles.item} key={article.id}>
            <Link to={`/article/${article.id}`}>
              <h1>Article</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
