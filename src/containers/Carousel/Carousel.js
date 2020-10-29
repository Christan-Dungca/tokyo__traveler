import React from "react";
import { useEffect, useRef} from "react";
import styles from "./Carousel.module.scss";

const Carousel = () => {
    const items = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;
    
    useEffect(() => {
        const slider = items.current;
        // Listening to mousedown event on the carousel component
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
          });
        // Listening to mouseleave event on the carousel component
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        // Listening to mouseup event on the carousel component
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
          });
        // Listening to mousemove event on the carousel component
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
          });
    }, [])

  return (
    <div className={styles.items} ref={items}>
      <div className={styles.item}>Article</div>
      <div className={styles.item}>Article</div>
      <div className={styles.item}>Article</div>
      <div className={styles.item}>Article</div>
      <div className={styles.item}>Article</div>
      <div className={styles.item}>Article</div>
    </div>
  );
};

export default Carousel;
