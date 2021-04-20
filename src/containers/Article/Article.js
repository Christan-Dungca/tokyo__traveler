import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiHash } from "react-icons/bi";

import useHttpClient from "../../hooks/useHttp";
import styles from "./Article.module.scss";

const Article = ({ handleMenuColor }) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    handleMenuColor({ left: "#000", right: "#000" });
    const fetchArticle = async () => {
      try {
        const response = await sendRequest(
          `http://localhost:5000/api/articles/${id}`
        );

        console.log(response);
        setArticle(response.data.article);
      } catch (err) {}
    };

    fetchArticle();
  }, [id]);

  if (isLoading === true && error === false) {
    return (
      <div>
        <h1> Loading ...</h1>
      </div>
    );
  }

  if (isLoading === false && error === true) {
    return (
      <div>
        <h1> No Article Found </h1>
      </div>
    );
  }

  if (article !== null && isLoading === false && error === false) {
    return (
      <div className={styles.Article}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Finding airline tickets for the best price
            </h1>
            <div className={styles.divider}></div>
            <h2 className={styles.tag}>
              <BiHash />
              Before You Go
            </h2>
            <div className={styles.articleInfo}>
              <div className={styles.authorImg}></div>
              <div className={styles.info}>
                <p>Jessica Robert</p>
                <p>March 18, 2021</p>
              </div>
            </div>
            <div className={styles.imgContainer}></div>
          </div>

          <div className={styles.content}>
            <p className={styles.intro}>
              Combined with the complexity of modern websites and the way
              browsers process CSS, even a moderate amount of CSS can become a
              bottleneck for people who deal with constrained devices, network
              latency, bandwidth, or data limits. Because performance is a vital
              part of the user experience, it’s essential to make sure you
              deliver a consistent, high-quality experience across devices of
              all shapes and sizes and that requires optimising your CSS too.
            </p>

            <div className={styles.tableContainer}>
              <div className={styles.overlay}></div>
              <h3 className={styles.tableTitle}>Table of Contents</h3>
              <ol>
                <li>
                  <a href="#How-does-CSS-work?">How does CSS work?</a>
                </li>
                <li>
                  <a href="#Watch-the-size-of-CSS">Watch the size of CSS</a>
                </li>
                <li>
                  <a href="#Prioritise-Critical-CSS">Prioritise critical CSS</a>
                </li>
              </ol>
            </div>

            <div className={styles.section} id="How-does-CSS-work?">
              <h3>How does CSS work?</h3>
              <p>
                When there is CSS available for a page, whether it’s inline or
                an external stylesheet, the browser delays rendering until the
                CSS is parsed. This is because pages without CSS are often
                unusable. If a browser showed you a messy page without CSS, then
                a few moments later snapped into a styled page, the shifting
                content and sudden visual changes would make a turbulent user
                experience. That poor user experience has a name–Flash of
                Unstyled Content (FOUC):
              </p>
              <p>
                Even though the browser won’t display content until it’s done
                parsing the CSS, it will work through the rest of the HTML.
                However, scripts block the parser unless they are marked as
                defer or async. A script can potentially manipulate the page and
                the rest of the code, so the browser must be careful about when
                that script executes.
              </p>
              <p>
                Because scripts can affect the styles that apply to the page, if
                the browser is still processing some CSS, it will wait until
                that’s finished before it runs the script. Since it won’t
                continue parsing the document until the script has run, that
                means that CSS is no longer just blocking rendering—depending on
                the order of external stylesheets and scripts in the document
                may also stop HTML parsing.
              </p>
            </div>

            <div className={styles.section} id="Watch-the-size-of-CSS">
              <h3>Watch the size of CSS</h3>
              <p>
                When there is CSS available for a page, whether it’s inline or
                an external stylesheet, the browser delays rendering until the
                CSS is parsed. This is because pages without CSS are often
                unusable. If a browser showed you a messy page without CSS, then
                a few moments later snapped into a styled page, the shifting
                content and sudden visual changes would make a turbulent user
                experience. That poor user experience has a name–Flash of
                Unstyled Content (FOUC):
              </p>
              <p>
                Even though the browser won’t display content until it’s done
                parsing the CSS, it will work through the rest of the HTML.
                However, scripts block the parser unless they are marked as
                defer or async. A script can potentially manipulate the page and
                the rest of the code, so the browser must be careful about when
                that script executes.
              </p>
            </div>

            <div className={styles.section} id="Prioritise-Critical-CSS">
              <h3>Prioritise Critical CSS</h3>
              <p>
                When there is CSS available for a page, whether it’s inline or
                an external stylesheet, the browser delays rendering until the
                CSS is parsed. This is because pages without CSS are often
                unusable. If a browser showed you a messy page without CSS, then
                a few moments later snapped into a styled page, the shifting
                content and sudden visual changes would make a turbulent user
                experience. That poor user experience has a name–Flash of
                Unstyled Content (FOUC):
              </p>
              <p>
                Even though the browser won’t display content until it’s done
                parsing the CSS, it will work through the rest of the HTML.
                However, scripts block the parser unless they are marked as
                defer or async. A script can potentially manipulate the page and
                the rest of the code, so the browser must be careful about when
                that script executes.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Article;
