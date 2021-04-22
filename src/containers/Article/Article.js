import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiHash } from "react-icons/bi";

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

        console.log(response.data.article);
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
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.divider}></div>
            <h2 className={styles.tag}>
              <BiHash />
              {article.tags}
            </h2>
            <div className={styles.articleInfo}>
              <div className={styles.authorImg}></div>
              <div className={styles.info}>
                <p>{article.author.name}</p>
                <p>{article.createdAtFormatted}</p>
              </div>
            </div>
            <div className={styles.imgContainer}></div>
          </div>

          <div className={styles.content}>
            <p className={styles.intro}>{article.introduction}</p>

            <div className={styles.tableContainer}>
              <div className={styles.overlay}></div>
              <h3 className={styles.tableTitle}>Table of Contents</h3>
              <ol>
                {article.tableOfContents.map((heading) => {
                  return (
                    <li key={heading}>
                      <a href={`#${heading}`}>{heading}</a>
                    </li>
                  );
                })}
              </ol>
            </div>

            {article.sections.map((section) => {
              return (
                <div
                  className={styles.section}
                  id={`${section.heading.split(" ").join("-")}`}
                  key={`${section.heading}`}
                >
                  <h3>{section.heading}</h3>
                  {section.content.map((paragraph, idx) => {
                    return <p key={`paragraph-${idx}`}> {paragraph} </p>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Article;
