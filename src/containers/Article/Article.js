import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ARTICLE_IMG from "../../assets/images/medium-shrine-girls.jpg";
import styles from "./Article.module.scss";

const Article = () => {
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/articles/${id}`
        );

        const fetchedArticle = data.data.article;

        if (!fetchArticle) {
          setLoading(false);
          setError(true);
        }

        setLoading(false);
        setArticle(fetchedArticle);
      } catch (err) {
        console.log(err);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading === true && error === false) {
    return (
      <div>
        <h1> Loading ...</h1>
      </div>
    );
  }

  if (loading === false && error === true) {
    return (
      <div>
        <h1> No Article Found </h1>
      </div>
    );
  }

  if (article && loading === false && error === false) {
    return (
      <div className={styles.Article}>
        <div className={styles.imageContainer}>
          <div className={styles.overlay}></div>
          <img src={ARTICLE_IMG} />
        </div>
        <div className={styles.content}>
          <h4 className={styles.createdAt}>{article.createdAt}</h4>
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.contentContainer}>
            {article.content.map((paragraph, idx) => {
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Article;
