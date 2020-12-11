import React from "react";
import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.AboutPage}>
      <section className={styles.mainContentWrapper}>
        <h1 className={styles.titleText}> What is Tokyo Traveler? </h1>
        <div className={styles.imageContainer}></div>

        <section className={styles.aboutSection}>
          <h3 className={styles.aboutUsTitle}> About. </h3>
          <p className={styles.aboutText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className={styles.aboutText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
