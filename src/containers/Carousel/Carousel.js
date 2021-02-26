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
      {list.map((image) => {
        return (
          <Link to={`/article/${image.id}`}>
            <div className={styles.imageContainer} key={image.id}>
              <div className={styles.image}></div>
              <div className={styles.overlay}></div>
              <div className={styles.textContainer}>
                <h4>24 February 2021 </h4>
                <h3>The best time of the year to travel to Japan </h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Carousel;
