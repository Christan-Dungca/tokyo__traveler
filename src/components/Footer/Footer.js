import React from "react";

import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.linksGrid}>
        <h4 className={styles.title}> Tokyo Traveler </h4>
        <ul>
          <li className={styles.linkTitle}> Navigation </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/all-articles">All Articles</Link>
          </li>
          <li>
            <Link to="/budget">Budget Calculator </Link>
          </li>
        </ul>
        <ul>
          <li className={styles.linkTitle}> Authentication </li>
          <li>
            <Link to="/login">Login / Signup </Link>
          </li>
          <li>
            <Link to="/me"> Your Account </Link>
          </li>
        </ul>
        <ul>
          <li className={styles.linkTitle}> Follow Us </li>
          <li>
            <a href="http://instagram.com"> Instagram </a>
          </li>
          <li>
            <a href="http://twitter.com"> Twitter </a>
          </li>
          <li>
            <a href="http://gmail.com"> Email </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
