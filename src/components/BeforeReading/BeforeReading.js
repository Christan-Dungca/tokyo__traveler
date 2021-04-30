import React from "react";

import styles from "./BeforeReading.module.scss";

const BeforeReading = () => {
  return (
    <div className={styles.BeforeReading}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.topText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              sapiente quod maxime omnis, neque quos libero illo ipsa
              repudiandae sit numquam consectetur? Minima architecto ad ab,
              voluptatum odio suscipit nesciunt?
            </p>
            <p>
              Labore, accusamus. Corrupti nihil ducimus, optio iste cumque
              similique accusamus laudantium sapiente architecto dignissimos
              autem eveniet explicabo ipsam illo quos rem at ipsum debitis
              aliquam beatae quo! Voluptatibus, molestiae omnis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              vel laboriosam optio. Cumque maxime excepturi quam aspernatur
              provident atque quod odit odio hic perspiciatis perferendis, nam
              sed magni ipsum in!
            </p>
          </div>
        </div>
        <blockquote>
          <span>&#8220;</span>
          Twenty Years From Now You Will Be More Disappointed By The Things You
          Didn’t Do Than By The Ones You Did Do
          <span>&#8221;</span>
        </blockquote>
      </div>
    </div>
  );
};

export default BeforeReading;
