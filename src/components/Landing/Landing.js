import React from "react";
import styles from "./Landing.module.scss";

import smallHatMan from "../../assets/images/small-hat-man.jpg";
import mediumHatMan from "../../assets/images/medium-hat-man.jpg";
import largeHatMan from "../../assets/images/large-hat-man.jpg";

{
  /* <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`} onLoad={this.onLoad} /> */
}

const Landing = () => {
  return (
    <div className={styles.test}>
      <div className={styles.imgContainer}>
        <img
          src={smallHatMan}
          srcSet={`${smallHatMan} 640w, ${mediumHatMan} 1920w, ${largeHatMan} 2400w`}
          sizes="(min-width: 1000px) 2400px,
                 (min-width: 600px) 1920px,
                 (max-width: 400px) 640px"
        />
      </div>

      {/* <picture>
        <src media="(min-width:1000px)" srcSet={largeHatMan} />
        <src media="(min-width:600px)" srcSet={mediumHatMan} />
        <src media="(min-width:400px)" srcSet={smallHatMan} />
        <img src={largeHatMan}></img>
      </picture> */}
    </div>
  );
};

// const Landing = () => {
//   return (
//     <div className={styles.Landing}>
//       {/* Left side of page */}
//       <div className={styles.LandingLeft}>
//         {/* Large image  */}
//         <div className={styles.leftImageContainer}>
//           <img src={templeImage} alt="pink temple" className={styles.image} />
//         </div>
//         {/* Tokyo Traveler Text */}
//         <div className={styles.textContainer}>
//             <h1 className={styles.text}> Tokyo <span> Traveller </span></h1>
//         </div>
//       </div>
//       {/* Right side of page */}
//       <div className={styles.LandingRight}>
//         <div className={styles.contentContainer}>
//           {/* Small Image */}
//           <div className={styles.rightImageContainer}>
//             <img src={smallImage} alt="kimono girl"/>
//           </div>
//           {/* quote container */}
//           <div className={styles.quoteContainer}>
//             <p className={styles.quote}>"One doesn’t discover new lands without consenting to lose sight of the shore for a very long time."</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Landing;
