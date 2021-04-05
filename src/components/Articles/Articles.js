import React, { useEffect, useState } from "react";

import axios from "axios";

import Carousel from "../../containers/Carousel/Carousel";
import styles from "./Articles.module.scss";

const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/articles`
        );
        const { status, data: articles, results } = data;

        if (articles.articles.length === 0) {
          setError(true);
          setLoading(false);
        } else {
          setLoading(false);
          setArticles(articles.articles);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getArticles();
  }, []);

  console.log(articles);

  if (loading === true && error === false) {
    return (
      <div>
        <h1> Loading ... </h1>
      </div>
    );
  }

  if (loading === false && error === true) {
    return (
      <div>
        <h1> An error has occurred! </h1>
      </div>
    );
  }

  if (articles && loading === false && error === false) {
    return (
      <div className={styles.Articles}>
        <h2 className={styles.title}>Articles</h2>
        <Carousel list={articles} type={"images"} />
      </div>
    );
  }

  return null;
};

export default Articles;
