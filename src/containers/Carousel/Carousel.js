import React, { createRef, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import createCarousel from "../../animations/carouselAnimation";
import styles from "./Carousel.module.scss";
import userEvent from "@testing-library/user-event";

const Carousel = ({ list, type }) => {
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
      // console.log(elementsRef[0]);
      // console.log(elementWidthRef.current);
    }
  }, []);

  useEffect(() => {
    const slider = items.current;
    createCarousel({ slider });
  }, []);

  const goRight = () => {
    console.log(
      `elementWidthRef: ${elementWidthRef.current} -- moveX: ${moveX.current}`
    );
    console.log(`${elementWidthRef.current + moveX.current}`);
    gsap.to(elementsRef, {
      x: `-=${elementWidthRef.current + moveX.current}rem`,
    });
    // moveX.current += moveX.current;
  };

  const goLeft = () => {
    console.log(
      `elementWidthRef: ${elementWidthRef.current} -- moveX: ${moveX.current}`
    );
    console.log(`${elementWidthRef.current + moveX.current}`);
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
