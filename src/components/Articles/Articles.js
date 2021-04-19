import React, { useEffect, useState } from "react";

import Carousel from "../../containers/Carousel/Carousel";
import useHttpClient from "../../hooks/useHttp";
import styles from "./Articles.module.scss";

const Articles = () => {
  const [articles, setArticles] = useState();
  const { isLoading, error, sendRequest } = useHttpClient();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response  = await sendRequest(
          `http://localhost:5000/api/articles`
        );
        
        setArticles(response.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    getArticles();
  }, []);

  if (isLoading === true && error === false) {
    return (
      <div>
        <h1> Loading ... </h1>
      </div>
    );
  }

  if (isLoading === false && error === true) {
    return (
      <div>
        <h1> An error has occurred! </h1>
      </div>
    );
  }

  if (articles && isLoading === false && error === false) {
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
