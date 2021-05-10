import React, { useContext } from "react";

import AuthContext from "../../context/auth-context";
import styles from "./Profile.module.scss";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return (
      <div className={styles.Profile}>
        <div className={styles.userProfile}>
          <div className={styles.userImg}></div>
          <div className={styles.profile}>
            <p className={styles.userName}> {user.name} </p>
            <p className={styles.userRole}> {user.role} </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.Profile}>
        <div className={styles.userProfile}>
          <div className={styles.userImg}></div>
          <div className={styles.profile}>
            <p className={styles.userName}> Anonymous </p>
            <p className={styles.userRole}> None </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
