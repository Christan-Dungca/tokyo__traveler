import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import { BiHomeAlt, BiBook, BiLineChart, BiUser } from "react-icons/bi";

import RecentActivity from "./RecentActivity";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import ArticleFormSection from "./ArticleFormSection";
import styles from "./Author.module.scss";

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
  let { path } = useRouteMatch();

  return (
    <div className={styles.AuthorPage}>
      {/* {Conditionally render <ArticleFormSection />} */}
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

export default Author;
