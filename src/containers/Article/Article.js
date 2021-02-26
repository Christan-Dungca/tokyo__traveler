import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ARTICLE_IMG from "../../assets/images/medium-woman-in-white.jpg";
import ARTICLE_DATA from "../../data/articles-data.json";
import styles from "./Article.module.scss";

const Article = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchArticle = async () => {
      try {
        const fetchedArticle = ARTICLE_DATA.find(
          (article) => article.id === id
        );

        if (!fetchedArticle) {
          throw Error("Article not found");
        }
        console.log(fetchedArticle);
        setLoading(false);
        setArticle(fetchedArticle);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    fetchArticle();
  }, []);

  if (article === null) {
    return (
      <div>
        <h1> Loading ...</h1>
      </div>
    );
  } else if (error === true) {
    return (
      <div>
        <h1> {error} </h1>
      </div>
    );
  } else if (article !== null && loading === false) {
    return (
      <div className={styles.Article}>
        <div className={styles.imageContainer}>
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
};

export default Article;
