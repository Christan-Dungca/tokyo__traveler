import React, { useEffect, useState } from "react";

import { BiHash } from "react-icons/bi";
import useHttpClient from "../../hooks/useHttp";
import styles from "./AllArticlesPage.module.scss";

const AllArticlesPage = () => {
  const [articles, setArticles] = useState(null);
  const [word, setWord] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const { sendRequest, isLoading, error } = useHttpClient();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await sendRequest(
          `http://localhost:5000/api/articles`
        );

        console.log(response.data);
        setArticles(response.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchArticles();
  }, []);

  const handleChange = (e) => {
    setWord(e);

    // let oldList = 
  };

  return (
    <div className={styles.AllArticlesPage}>
      {/* <h1 className={styles.title}> Articles On Traveling In Japan </h1> */}
      <div className={styles.landingContainer}>
        <div className={styles.pageInfo}>
          <p className={styles.pageTitle}> All Articles</p>
          <p className={styles.pageDescription}>
            You may start out skimming the surface of the Japanese language, but
            at some point going deeper will pay dividends. The deeper you go
            with the fundamental components of Japanese, the more benefits you
            gain from study time. Start fortifying your foundation with our
            articles below. Each one you read is another step toward fluency.
          </p>
        </div>
      </div>

      {/* Search Container */}
      {/* <SearchBar
        value={word}
        handleChange={(e) => {
          handleChange(e.target.value);
        }}
      /> */}

      {/* All Articles Container */}
      {!isLoading && articles !== null && (
        <Articles articlesList={word.length < 1 ? articles : searchFilter} />
      )}
    </div>
  );
};

const SearchBar = ({ value, handleChange }) => {
  return (
    <div>
      Search: <input value={value} onChange={handleChange} />
    </div>
  );
};

const Articles = ({ articlesList }) => {
  console.log(`${articlesList}`);
  return (
    <div className={styles.Articles}>
      <div className={styles.gridContainer}>
        <h5 className={styles.articlesTitle}> Articles </h5>
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

export default AllArticlesPage;
