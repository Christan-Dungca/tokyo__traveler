import React from "react";
import styles from "./Profile.module.scss"

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

export default Profile;
