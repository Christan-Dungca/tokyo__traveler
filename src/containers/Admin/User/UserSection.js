import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";

import AuthContext from "../../../context/auth-context";
import styles from "./UserSection.module.scss";

const UserSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(true);
  const [user, setUser] = useState(null);

  const history = useHistory();
  const { userId } = useParams();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const res = await axios({
          method: "get",
          url: `http://127.0.0.1:5000/api/users/${userId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [token, userId]);

  const backBtnHandler = () => {
    history.goBack();
  };

  if (!user) {
    return (
      <div className={styles.UserSection}>
        <button onClick={backBtnHandler}> Back </button>
        <h1> Loading... </h1>
      </div>
    );
  } else {
    return (
      <div className={styles.UserSection}>
        <div className={styles.header}>
          <button onClick={backBtnHandler} className={styles.backBtn}>
            <BiArrowBack className={styles.arrowBackLogo} />
            Back
          </button>
        </div>

        <hr className={styles.hr} />

        <div className={styles.userNameSection}>
          <div className={styles.userImg}>
            <p className={styles.userInitials}>
              {" "}
              {`${user.name[0]}${user.name[1]}`}{" "}
            </p>
          </div>
          <h1 className={styles.userName}> {user.name} </h1>
        </div>

        <hr className={styles.hr} />

        <div className={styles.userInformation}>
          <h3 className={styles.informationTitle}> General Information </h3>
          <ul className={styles.informationGrid}>
            <li className={styles.gridItem}>
              <p className={styles.userIdLabel}>User ID</p>
              <h4 className={styles.userId}>#{user._id}</h4>
            </li>
            <li className={styles.gridItem}>
              <p className={styles.userEmailLabel}>Email Address</p>
              <h4 className={styles.userEmail}>{user.email}</h4>
            </li>
            <li className={styles.gridItem}>
              <p className={styles.userRoleLabel}>User Role</p>
              <h4 className={styles.userRole}>{user.role}</h4>
            </li>
            <li className={styles.gridItem}>
              <p className={styles.userActiveLabel}>Active</p>
              {user.active ? (
                <h4 className={styles.userActive}>{user.active}</h4>
              ) : (
                <h4> True </h4>
              )}
            </li>
            <li className={styles.gridItem}>
              <p className={styles.userNameLabel}>Username</p>
              <h4 className={styles.userName}>{user.name} </h4>
            </li>
          </ul>
        </div>

        <div className={styles.userArticles}>
          <h3 className={styles.articlesHeader}> Articles (3) </h3>
          <div className={styles.articlesContainer}>
            <div className={styles.article}>
              <p className={styles.articleTitle}> The article title </p>
              <p className={styles.articleDate}>
                Date Published: <span>April 6, 2020</span>
              </p>
              <button className={styles.articleViewBtn}> View </button>
            </div>
            <div className={styles.article}>
              <p className={styles.articleTitle}> The article title </p>
              <p className={styles.articleDate}>
                Date Published: <span>April 6, 2020</span>
              </p>
              <button className={styles.articleViewBtn}> View </button>
            </div>
            <div className={styles.article}>
              <p className={styles.articleTitle}> The article title </p>
              <p className={styles.articleDate}>
                Date Published: <span>April 6, 2020</span>
              </p>
              <button className={styles.articleViewBtn}> View </button>
            </div>
            <div className={styles.article}>
              <p className={styles.articleTitle}> The article title </p>
              <p className={styles.articleDate}>
                Date Published: <span>April 6, 2020</span>
              </p>
              <button className={styles.articleViewBtn}> View </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserSection;
