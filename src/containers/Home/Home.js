import React, { Component, Fragment } from "react";
import styles from "./Home.module.scss";
import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Articles from "../../components/Articles/Articles";
import Calculator from "../Calculator/Calculator";

/* 
  TODO
  [X] Find the inner height of the window
  [x] Change height of each row in grid-template-rows to be window.innerheight instead of 100vh
*/

const Home = () => {
  // GETTING THE WINDOW INNER HEIGHT
  const windowHeight = window.innerHeight + "px";
  // console.log("window height: " + windowHeight);

  // Get 90% of the window inner height
  const ninetyHeight = window.innerHeight * .95;
  // console.log("90%: " + ninetyHeight)

  // CHECK IS SCREEN IS MOBILE
  const isMobile = window.innerWidth < 426 ? true : false;
  // console.log({windowHeight, isMobile});

  // SETTING GRID ROWS TO BE THE HEIGHT OF INNER WINDOW
  const myStyles = {
    gridTemplateRows: `[nav] 5vh [landing] ${ninetyHeight + "px"} [about] minmax(100vh, max-content) [articles] ${windowHeight} [calculator] 100vh`
  }
  
  return (
    <div className={styles.Home} style={myStyles}>
      <Landing className={styles.Landing} />
      <About className={styles.About} />
      <Articles className={styles.Landing} />
      <Calculator className={styles.Calculator} />
    </div>
  );
};

// class Home extends Component {
//   render() {
//     return (
//       <div className={styles.Home}>
//         <Landing className={styles.Landing} />
//         <About className={styles.About} />
//         <Articles className={styles.Landing} />
//         <Calculator className={styles.Calculator} />
//       </div>
//     );
//   }
// }

export default Home;
