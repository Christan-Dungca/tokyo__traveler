import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.scss";
import createCarousel from "../../animations/carouselAnimation";

const Carousel = ({ list, type }) => {
  const items = useRef(null);

  useEffect(() => {
    const slider = items.current;
    createCarousel({ slider });
  }, []);

  switch (type) {
    case "routing":
      return (
        <div className={styles.items} ref={items}>
          {list.map((article) => {
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
    case "images":
      return (
        <div className={styles.images} ref={items}>
          {list.map((image) => {
            return <div className={styles.image}></div>;
          })}
        </div>
      );
    default:
      return null;
  }
};

export default Carousel;
