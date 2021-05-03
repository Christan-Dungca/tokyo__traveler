import React, { useRef, useState } from "react";
import { Link, NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import {
  BiHomeAlt,
  BiBook,
  BiLineChart,
  BiUser,
  BiDotsHorizontalRounded,
  BiRightArrowAlt,
  BiPlus,
  BiFolder,
  BiComment,
  BiHeart,
} from "react-icons/bi";
import { useForm } from "react-hook-form";

import styles from "./Author.module.scss";

const ArticleFormSection = () => {
  // const [sections, setSections] = useState({});
  const imageInputRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  const handleImagePicker = () => {
    imageInputRef.current.click();
  };

  return (
    <div className={styles.ArticleFormSection}>
      <h1> Create A New Article </h1>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label for="title">Title</label>
        <input name="title" {...register("title", { required: true })} />

        <div className={styles.imageSection}>
          <p>Upload an Image</p>
          <p>File should be PNG, JPG, JPEG</p>
          <div className={styles.imageUpload} onClick={handleImagePicker}>
            BiFolder
          </div>
          <div className={styles.imagePreview}></div>
          <input
            type="file"
            name="image"
            className={styles.imageInput}
            ref={imageInputRef}
          />
        </div>

        <p>Choose a Tag</p>
        <input
          type="radio"
          name="before-you-go"
          {...register("before-you-go", { required: true })}
        />
        <label for="before-you-go">Before You Go</label>
        <input
          type="radio"
          name="during-your-trip"
          {...register("during-your-trip", { required: true })}
        />
        <label for="Tag">During Your Trip</label>

        <p>Sections</p>
        <label for="section-1-title">Section 1 Title</label>
        <input
          name="section-1-title"
          {...register("section-1-title", { required: true })}
        />
        <label for="section-1-paragraph">Section 1 paragraph</label>
        <textarea
          name="section-1-paragraph"
          {...register("section-1-paragraph", { required: true })}
        />
      </form>
    </div>
  );
};

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

const routes = [
  {
    path: "/me",
    exact: "true",
    component: <Dashboard />,
  },
  {
    path: "/me/articles",
    exact: "true",
    component: () => <div> Articles Section </div>,
  },
  {
    path: "/me/activity",
    exact: "true",
    component: () => <div> Activity Section </div>,
  },
  {
    path: "/me/profile",
    exact: "true",
    component: () => <div> Profile Section </div>,
  },
  {
    path: "/me/create-article",
    exact: "true",
    component: () => <ArticleFormSection />,
  },
];

const Author = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className={styles.AuthorPage}>
      <nav className={styles.SideBar}>
        <h5 className={styles.Logo}>Tokyo Traveler</h5>
        <ul>
          <li>
            <NavLink
              exact
              to={`${path}`}
              activeStyle={{
                fontWeight: "bold",
                color: "#000",
              }}
            >
              <BiHomeAlt />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={`${path}/articles`}
              activeStyle={{
                fontWeight: "bold",
                color: "#000",
              }}
            >
              <BiBook />
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={`${path}/activity`}
              activeStyle={{
                fontWeight: "bold",
                color: "#000",
              }}
            >
              <BiLineChart />
              Activity
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={`${path}/profile`}
              activeStyle={{
                fontWeight: "bold",
                color: "#000",
              }}
            >
              <BiUser />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className={styles.Main}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              <Route exact key={idx} path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      </main>

      <div className={styles.profileSection}>
        <Profile />
        <RecentActivity />
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <div className={styles.userProfile}>
        <div className={styles.userImg}> </div>
        <div className={styles.profile}>
          <p className={styles.userName}> Alejandro Cortez </p>
          <p className={styles.userRole}> Author </p>
        </div>
      </div>
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

const RecentActivity = () => {
  return (
    <div className={styles.RecentActivity}>
      <h2 className={styles.title}> Activity </h2>
      <hr />
      <ul>
        <li>
          <div className={styles.activity}>
            <p>
              <span> Brooklyn Simmons</span> commented on your post
            </p>
            <div className={styles.dot}>
              <div className={styles.innerDot}></div>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.activity}>
            <p>
              <span> Jane Coooper </span> liked your posts
            </p>
            <div className={styles.dot}>
              <div className={styles.innerDot}></div>
            </div>
          </div>
        </li>
        <li>
          <li>
            <div className={styles.activity}>
              <p>
                <span> Brooklyn Simmons</span> commented on your post
              </p>
              <div className={styles.dot}>
                <div className={styles.innerDot}></div>
              </div>
            </div>
          </li>
          <div className={styles.activity}>
            <p>
              <span> Jane Coooper </span> liked your posts
            </p>
            <div className={styles.dot}>
              <div className={styles.innerDot}></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Author;
