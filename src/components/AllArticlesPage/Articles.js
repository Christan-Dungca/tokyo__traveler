import React from "react";

import { BiSearch, BiHash } from "react-icons/bi";
import styles from "./Articles.module.scss";

const Articles = ({ articlesList, handleToggleSearchModal }) => {
  return (
    <div className={styles.Articles}>
      <div className={styles.gridContainer}>
        <div className={styles.articleHeader}>
          <h5 className={styles.articlesTitle}> Articles </h5>
          <div onClick={handleToggleSearchModal}>
            <BiSearch className={styles.searchIcon} />
            <p>Search For Anything </p>
          </div>
        </div>

        {articlesList.map((article) => {
          return (
            <div className={styles.article} key={article._id}>
              <div className={styles.imgContainer}></div>
              <div className={styles.topRow}>
                <p className={styles.title}>{article.title}</p>
                <p className={styles.date}>{article.createdAtFormatted}</p>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.bottomRow}>
                <div className={styles.author}>
                  <p> Written By: </p>
                  <p className={styles.authorName}>{article.author.name}</p>
                </div>
                <p className={styles.tag}>
                  <BiHash className={styles.hash} />
                  {article.tags}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
