import React, { useEffect, useState } from "react";

import SearchModal from "./SearchModal";
import Articles from "./Articles";
import useHttpClient from "../../hooks/useHttp";
import styles from "./AllArticlesPage.module.scss";

const AllArticlesPage = () => {
  const [articles, setArticles] = useState(null);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [word, setWord] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const { sendRequest, isLoading, error } = useHttpClient();

  useEffect(() => {
    window.scrollTo(0, 0);
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

  useEffect(() => {
    console.log();
    if (showSearchModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSearchModal]);

  const handleToggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  const handleChange = (e) => {
    setWord(e);

    let oldList = articles.map((article) => {
      return {
        ...article,
      };
    });

    if (word !== "") {
      let newList = [];
      // var regex = new RegExp(word, "gi");

      newList = oldList.filter((article) => {
        if (article.title.toLowerCase().includes(word)) return true;
      });

      setSearchFilter(newList);
    } else {
      setSearchFilter(articles);
    }
  };

  return (
    <div className={styles.AllArticlesPage}>
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

      {/* All Articles Container */}
      {!isLoading && articles !== null && (
        <Articles
          articlesList={word.length < 1 ? articles : searchFilter}
          handleToggleSearchModal={handleToggleSearchModal}
        />
      )}

      {/* Search Container */}
      {showSearchModal && (
        <SearchModal
          value={word}
          handleChange={(e) => {
            handleChange(e.target.value);
          }}
          handleToggleSearchModal={handleToggleSearchModal}
          resultsNumber={searchFilter.length}
        />
      )}
    </div>
  );
};

export default AllArticlesPage;
