import React from "react";
import {
  BiDotsHorizontalRounded,
  BiRightArrowAlt,
  BiPlus,
} from "react-icons/bi";
import { Link, useRouteMatch } from "react-router-dom";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}> Dashboard </h1>
        <CreateArticleBtn />
      </div>
      <div className={styles.recentArticlesSection}>
        <ul>
          <h2> Recently Published Articles </h2>
          <li>
            <div className={styles.article}>
              <p> Article ID </p>
              <p> Article Published </p>
              <p> Article Title </p>
              <BiDotsHorizontalRounded />
            </div>
          </li>
          <li>
            <div className={styles.article}>
              <p> Article ID </p>
              <p> Article Published </p>
              <p> Article Title </p>
              <BiDotsHorizontalRounded />
            </div>
          </li>
          <li>
            <div className={styles.article}>
              <p> Article ID </p>
              <p> Article Published </p>
              <p> Article Title </p>
              <BiDotsHorizontalRounded />
            </div>
          </li>
          <li>
            <div className={styles.article}>
              <p> Article ID </p>
              <p> Article Published </p>
              <p> Article Title </p>
              <BiDotsHorizontalRounded />
            </div>
          </li>
          <li>
            <div className={styles.article}>
              <p> Article ID </p>
              <p> Article Published </p>
              <p> Article Title </p>
              <BiDotsHorizontalRounded />
            </div>
          </li>
          <li className={styles.viewAll}>
            <p> View All Articles</p> <BiRightArrowAlt />
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
