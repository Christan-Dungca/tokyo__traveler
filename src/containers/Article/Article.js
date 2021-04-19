import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useHttpClient from "../../hooks/useHttp";
import styles from "./Article.module.scss";

const Article = () => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await sendRequest(
          `http://localhost:5000/api/articles/${id}`
        );

        console.log(response);
        setArticle(response.data.article);
      } catch (err) {}
    };

    fetchArticle();
  }, [id]);

  if (isLoading === true && error === false) {
    return (
      <div>
        <h1> Loading ...</h1>
      </div>
    );
  }

  if (isLoading === false && error === true) {
    return (
      <div>
        <h1> No Article Found </h1>
      </div>
    );
  }

  if (article !== null && isLoading === false && error === false) {
    return (
      <div className={styles.Article}>
        <div className={styles.landing}>
          <div className={styles.textContainer}>
            <div className={styles.title}>
              <h1>Finding airline tickets for the best price</h1>
            </div>

            <div className={styles.authorProfile}>
              <div className={styles.image}></div>
              <div className={styles.text}>
                <h4 className={styles.name}>Jordan Mackenzie </h4>
                <h4 className={styles.articleCreatedAt}>16 April 2020</h4>
              </div>
            </div>

            <p className={styles.intro}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              incidunt dolores ipsam tempora magnam alias, sit porro voluptatum
              sapiente aperiam eaque explicabo sunt id distinctio commodi
              necessitatibus aliquid in. Perferendis.
            </p>
            <p className={styles.continue}> Continue Reading </p>
          </div>
          <div className={styles.imageContainer}></div>
        </div>
      </div>
    );
  }

  return null;
};

export default Article;
