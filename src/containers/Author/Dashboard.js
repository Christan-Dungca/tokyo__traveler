import React, { useEffect, useContext, useState } from "react";
import {
  BiDotsHorizontalRounded,
  BiRightArrowAlt,
  BiPlus,
} from "react-icons/bi";
import { Link, useRouteMatch } from "react-router-dom";

import useHttpClient from "../../hooks/useHttp";
import AuthContext from "../../context/auth-context";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [articles, setArticles] = useState(null);
  const { sendRequest, error, isLoading } = useHttpClient();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("fetching...");
    const fetchArticles = async () => {
      const { data } = await sendRequest(
        `http://localhost:5000/api/articles/user/${user._id}?limit=4`
      );
      console.log(data);
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles.Dashboard}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}> Dashboard </h1>
        <CreateArticleBtn />
      </div>
      <div className={styles.recentArticlesSection}>
        <ul>
          <h2> Recently Published Articles </h2>
          {articles !== null &&
            articles.map((article, idx) => {
              return (
                <li key={`${article._id}`}>
                  <div className={styles.article}>
                    <p> {article._id} </p>
                    <p> {article.createdAtFormatted} </p>
                    <p> {article.title} </p>
                    <BiDotsHorizontalRounded />
                  </div>
                </li>
              );
            })}
          <li className={styles.viewAll}>
            <p> View All Articles </p> <BiRightArrowAlt />
          </li>
        </ul>
      </div>
      <div className={styles.recentActivity}></div>
    </div>
  );
};

const CreateArticleBtn = () => {
  let { url } = useRouteMatch();

  return (
    <Link to={`${url}/create-article`} className={styles.CreateArticleBtn}>
      <BiPlus />
      <p>Create An Article</p>
    </Link>
  );
};

export default Dashboard;
