import React, { createRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import createCarousel from "../../animations/carouselAnimation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "./Carousel.module.scss";

const Carousel = ({ list, type, title }) => {
  const items = useRef(null);
  const articleRefs = useRef([]);
  articleRefs.current = list.map((_, i) => articleRefs[i] ?? createRef());

  let elementsRef;
  useEffect(() => {
    elementsRef = articleRefs.current.map((ref) => ref.current);
  }, []);

  useEffect(() => {
    const slider = items.current;
    createCarousel({ slider });
  }, []);

  const goRight = () => {
    let elementWidth = elementsRef[0].getBoundingClientRect().width;
    let { marginRight } = getComputedStyle(elementsRef[0]);
    let elementMargin = parseInt(marginRight);

    let scrollNumber = elementMargin + elementWidth;

    items.current.scrollBy({
      top: 0,
      left: scrollNumber,
      behavior: "smooth",
    });
  };

  const goLeft = () => {
    let elementWidth = elementsRef[0].getBoundingClientRect().width;
    let { marginLeft } = getComputedStyle(elementsRef[0]);
    let elementMargin = parseInt(marginLeft);

    let scrollNumber = elementMargin + elementWidth;

    items.current.scrollBy({
      top: 0,
      left: `-${scrollNumber}`,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.Container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.CarouselContainer}>
        <div className={styles.Carousel} ref={items}>
          {list.map((article, idx) => {
            return (
              <div
                className={styles.item}
                key={article._id}
                ref={articleRefs.current[idx]}
              >
                <Link to={`/article/${article._id}`}>
                  <div className={styles.image}></div>
                  <div className={styles.overlay}></div>
                  <div className={styles.textContainer}>
                    <h4 className={styles.articleCreatedAt}>
                      {article.createdAtFormatted}
                    </h4>
                    <h3 className={styles.articleTitle}> {article.title} </h3>
                  </div>
                </Link>
              </div>
            );
          })}
          <div className={styles.item}>
            <Link to={`/all-articles`} className={styles.viewLink}>
              <p className={styles.viewAll}>
                View All Articles <BsArrowRight />
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.btnsContainer}>
        <div className={styles.btnContainer}>
          <BsArrowLeft
            onClick={goLeft}
            className={`${styles.arrowBtn} ${styles.arrowRight}`}
          />
        </div>
        <div className={styles.btnContainer}>
          <BsArrowRight
            onClick={goRight}
            className={`${styles.arrowBtn} ${styles.arrowLeft}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
