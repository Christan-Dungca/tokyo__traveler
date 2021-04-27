import React, { useEffect, useRef, useState } from "react";

import { BiHash, BiSearch, BiRightArrowAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import useHttpClient from "../../hooks/useHttp";
import styles from "./AllArticlesPage.module.scss";

const AllArticlesPage = () => {
  const [articles, setArticles] = useState(null);
  const [showSearchModal, setShowSearchModal] = useState(false);
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

const SearchModal = ({
  value,
  handleChange,
  handleToggleSearchModal,
  resultsNumber,
}) => {
  // When component mounts point to input
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.SearchModal}>
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <input
            value={value}
            onChange={handleChange}
            placeholder="Search"
            ref={inputRef}
          />
          <BsArrowRight className={styles.arrowRightIcon} />
        </div>

        {/* Suggestions */}

        {/* See Results */}
        <div className={styles.results}>
          {value.length > 1 ? (
            <p>
              See the {resultsNumber} results for "{value}"
            </p>
          ) : (
            <p>See All Results </p>
          )}

          <BiRightArrowAlt className={styles.arrowRightIcon} />
        </div>
      </div>
      <div className={styles.overlay} onClick={handleToggleSearchModal}></div>
    </div>
  );
};

const Articles = ({ articlesList, handleToggleSearchModal }) => {
  // console.log(`${articlesList}`);
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

export default AllArticlesPage;
