import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./About.module.scss";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const bigTextRef = useRef();
  const aboutTextRef = useRef();
  const imageContainerRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: bigTextRef.current,
        start: "center bottom",
        // markers: true,
      },
    });
    t1.fromTo(
      [bigTextRef.current, aboutTextRef.current],
      {
        y: 70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }
    );

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: bigTextRef.current,
        start: "bottom center",
        // markers: true,
      },
    });

    t2.set([imageContainerRef.current, imageRef.current], {
      transformOrigin: "0% 50%",
    })
      .fromTo(
        imageContainerRef.current,
        { width: 0 },
        { width: "100%", duration: 0.5, ease: "power2.easeIn" }
      )
      .fromTo(imageRef.current, { width: 0 }, { width: "80%" }, "+=0.2");
  }, []);

  return (
    <div className={styles.About}>
      <div className={styles.textContainer}>
        <div className={styles.bigText} ref={bigTextRef}>
          <h2>About Us </h2>
        </div>
        <div className={styles.aboutTextContainer} ref={aboutTextRef}>
          <p>
            Tokyo Traveler is an online magazine with a simple goal - to help
            future travelers plan their dream trip to Japan. We write articles
            for those who want to know all the tips and tricks of traveling in
            Japan.
          </p>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.doubleImageContainer} ref={imageContainerRef}>
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontSize: "6rem",
              fontFamily: "var(--font-serif)",
              // textTransform: "uppercase",
              letterSpacing: "4px",
              width: "100%",
              textAlign: "center",
            }}
          >
            Discover Japan.
          </h1>
          {/* <div className={styles.doubleImage} ref={imageRef}></div> */}
        </div>
      </div>
      {/* <BeforeReading /> */}
    </div>
  );
};

export default About;
