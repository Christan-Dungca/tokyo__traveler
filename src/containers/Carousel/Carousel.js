import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.scss";
import articlesList from "../../articles-data.json";

console.log(articlesList);

const Carousel = () => {
  const items = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const slider = items.current;
    // Listening to mousedown event on the carousel component
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    // Listening to mouseleave event on the carousel component
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    // Listening to mouseup event on the carousel component
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    // Listening to mousemove event on the carousel component
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      // console.log(walk);
    });
  }, []);

  return (
    <div className={styles.items} ref={items}>
      {articlesList.map((article) => {
        return(
        <div className={styles.item} key={article.id}>
          <Link to={`/article/${article.id}`}>
            <h1>Article</h1>
          </Link>
        </div>
        )
      })}
    </div>
  );

  // return (
  //   <div className={styles.items} ref={items}>
  //     <div className={styles.item}>
  //       <Link to="/article">
  //         <h1>Article</h1>
  //       </Link>
  //     </div>
  //     <div className={styles.item}>
  //       <Link to="/article">
  //         <h1>Article</h1>
  //       </Link>
  //     </div>
  //     <div className={styles.item}>
  //       <Link to="/article">
  //         <h1>Article</h1>
  //       </Link>
  //     </div>
  //     <div className={styles.item}>
  //       <Link to="/article">
  //         <h1>Article</h1>
  //       </Link>
  //     </div>
  //     <div className={styles.item}>
  //       <Link to="/article">
  //         <h1>Article</h1>
  //       </Link>
  //     </div>
  //   </div>
  // );
};

export default Carousel;
