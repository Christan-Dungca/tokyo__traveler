import React, { createRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import createCarousel from "../../animations/carouselAnimation";
import styles from "./Carousel.module.scss";
import userEvent from "@testing-library/user-event";

const Carousel = ({ list, type }) => {
  const elemIsAtStart = useRef(true);
  const items = useRef(null);
  const moveX = useRef(7);
  let elementWidthRef = useRef(null);
  const articleRefs = useRef([]);
  let elementsRef;

  articleRefs.current = list.map((_, i) => articleRefs[i] ?? createRef());

  useEffect(() => {
    elementsRef = articleRefs.current.map((ref) => ref.current);
  }, []);

  useEffect(() => {
    if (elementsRef.length > 0) {
      elementWidthRef.current =
        elementsRef[0].getBoundingClientRect().width / 10;

      console.log(`firstElement: ${elementsRef[0].offsetLeft}`);
    }
  }, [elementsRef]);

  useEffect(() => {
    const slider = items.current;
    createCarousel({ slider });
  }, []);

  const goRight = () => {
    gsap.to(elementsRef, {
      x: `-=${elementWidthRef.current + moveX.current}rem`,
      // scrollTo: {x: `${elementWidthRef.current + moveX.current}rem`}
    });
  };

  const goLeft = () => {
    gsap.to(elementsRef, {
      x: `+=${elementWidthRef.current + moveX.current}rem`,
    });
  };

  return (
    <div className={styles.Carousel}>
      <div className={styles.images} ref={items}>
        {list.map((article, idx) => {
          return (
            <div
              className={styles.imageContainer}
              key={article._id}
              ref={articleRefs.current[idx]}
            >
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
      <div className={styles.btnContainer}>
        <button onClick={goLeft}>left</button>
        <button onClick={goRight}>right</button>
      </div>
    </div>
  );
};

export default Carousel;
