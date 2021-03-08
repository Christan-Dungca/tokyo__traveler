import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import createCarousel from "../../animations/carouselAnimation";
import styles from "./Carousel.module.scss";

const Carousel = ({ list, type }) => {
  const items = useRef(null);

  useEffect(() => {
    const slider = items.current;
    console.log(slider);
    createCarousel({ slider });
  }, []);

  return (
    <div className={styles.images} ref={items}>
      {list.map((article) => {
        return (
          <div className={styles.imageContainer} key={article._id}>
            <Link to={`/article/${article._id}`}>
              <div className={styles.image}></div>
              <div className={styles.overlay}></div>
              <div className={styles.textContainer}>
                <h4> {article.createdAt} </h4>
                <h3> {article.title} </h3>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
