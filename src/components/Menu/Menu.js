import React, { useCallback, useState, useEffect, useRef } from "react";

import { useHistory } from "react-router-dom";
import gsap from "gsap";

import styles from "./Menu.module.scss";

const Menu = ({ handleShowMenu }) => {
  const [description, setDescription] = useState();
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const history = useHistory();
  let menuContainerTimeline = useRef();

  const menuContainerRef = useRef();
  const closeMenuLeftRef = useRef();
  const closeMenuRightRef = useRef();
  const homeLabelRef = useRef();
  const homeLinkRef = useRef();
  const articleLabelRef = useRef();
  const articleLinkRef = useRef();
  const aboutLabelRef = useRef();
  const aboutLinkRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    menuContainerTimeline.current = gsap
      .timeline({ onReverseComplete: () => handleShowMenu() })
      // need to handleCloseMenu true
      .fromTo(
        menuContainerRef.current,
        { y: -2000 },
        { y: 0, duration: 1, ease: "power4.easeIn" }
      )
      .fromTo(
        [closeMenuLeftRef.current, closeMenuRightRef.current],
        {
          opacity: 0,
          width: 0,
        },
        { opacity: 1, width: "100%" },
        "+=.05"
      )
      .to(closeMenuLeftRef.current, {
        rotation: 135,
        duration: 0.4,
        ease: "power2.easeOut",
      })
      .to(
        closeMenuRightRef.current,
        { rotation: 225, opacity: 1, duration: 0.4, ease: "power2.easeOut" },
        "-=0.4"
      )
      .fromTo(
        [homeLinkRef.current, articleLinkRef.current, aboutLinkRef.current],
        { y: 40, opacity: 0, duration: 0.4 },
        { y: 0, opacity: 1 }
      )
      .fromTo(
        [homeLabelRef.current, articleLabelRef.current, aboutLabelRef.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.2"
      );
    // .fromTo(
    //   descriptionRef.current,
    //   { x: -500, opacity: 0 },
    //   { x: 0, opacity: 1, duration: 1 }
    // );
  }, []);

  useEffect(() => {
    if (isMenuClosing) {
      menuContainerTimeline.current.reverse();
    }
  }, [isMenuClosing]);

  const handleMouseEnter = (type, e) => {
    switch (type) {
      case "home":
        const homeText =
          "Explore Tokyo Traveler's home page where you can find articles and other services.";
        setDescription(homeText);
        break;
      case "articles":
        const articlesText =
          "Dive into Tokyo Traveler's articles where you can learn about the many different aspects of traveling in Japan";
        setDescription(articlesText);
        break;
      case "about":
        const aboutText =
          "Learn about our goal at Tokyo Traveler and how to use the platform to effectively plan your next trip to Japan";
        setDescription(aboutText);
        break;
      default:
        setDescription("Hello Future Tokyo Traveler");
    }
  };

  const handleLinkClick = (routePath) => {
    history.push(routePath);
    setIsMenuClosing(true);
  };

  const handleCloseMenu = () => {
    setIsMenuClosing(true);
  };

  return (
    <div className={styles.Menu} ref={menuContainerRef}>
      <div className={styles.closeBtnContainer} onClick={handleCloseMenu}>
        <div className={styles.closeBtnLeft} ref={closeMenuLeftRef}></div>
        <div className={styles.closeBtnRight} ref={closeMenuRightRef}></div>
      </div>
      <div className={styles.linksContainer}>
        <div
          className={styles.linkContainer}
          onMouseEnter={(e) => handleMouseEnter("home", e)}
        >
          <p className={styles.homelabel} ref={homeLabelRef}>
            Chapter 01
          </p>
          <h1
            className={styles.homeLink}
            ref={homeLinkRef}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </h1>
        </div>

        <div
          className={styles.linkContainer}
          onMouseEnter={(e) => handleMouseEnter("articles", e)}
        >
          <p className={styles.articleslabel} ref={articleLabelRef}>
            Chapter 02
          </p>
          <h1
            className={styles.articlesLink}
            ref={articleLinkRef}
            onClick={() => handleLinkClick("/all-articles")}
          >
            All Articles
          </h1>
        </div>

        <div
          className={styles.linkContainer}
          onMouseEnter={(e) => handleMouseEnter("about", e)}
        >
          <p className={styles.aboutlabel} ref={aboutLabelRef}>
            Chapter 03
          </p>
          <h1
            className={styles.aboutLink}
            ref={aboutLinkRef}
            onClick={() => handleLinkClick("/about")}
          >
            About the Project
          </h1>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        {description ? (
          <p useRef={descriptionRef}>{description}</p>
        ) : (
          <p useRef={descriptionRef}> Hello Future Tokyo Travelers </p>
        )}
      </div>
    </div>
  );
};

export default Menu;
