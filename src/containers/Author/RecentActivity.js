import React from "react";

import styles from "./RecentActivity.module.scss";

const RecentActivity = () => {
  return (
    <div className={styles.RecentActivity}>
      <h2 className={styles.title}> Activity </h2>
      <hr />
      <ul>
        <li>
          <div className={styles.activity}>
            <p>
              <span> Brooklyn Simmons</span> commented on your post
            </p>
            <div className={styles.dot}>
              <div className={styles.innerDot}></div>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.activity}>
            <p>
              <span> Jane Coooper </span> liked your posts
            </p>
            <div className={styles.dot}>
              <div className={styles.innerDot}></div>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.activity}>
            <p>
              <span> Brooklyn Simmons</span> commented on your post
            </p>
            <div className={styles.dot}>
              <div className={styles.innerDot}></div>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.activity}>
            <p>
              <span> Jane Coooper </span> liked your posts
            </p>
            <div className={styles.dot}>
              <div className={styles.innerDot}></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecentActivity;
