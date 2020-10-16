import React, { useState, useEffect } from "react";
import styles from "./Landing.module.scss";

/* 
    TODO:
        
    [x] Create Landing Container > Image Container 
    [] Change colour of landing to be #212529
    [x] Add white text Tokyo Traveler across image in uppercase or lowercase?
    [x] Change the background every second to the three pictures from the array
    [] Add opaque text in the background
    [] Add vertical explore with arrow pointing downwards
    [] On screens smaller 1000, the image will be 60% the width
    [] On screens smaller than 600, the image will be 100% the width
*/

const Landing = () => {
  // State will keep track of which image to use from backgroundImage array
  const [background, updateBackground] = useState(0);

  // Component below render images from backgroundImage array
  // const backgroundImages = ['green', 'pink', 'blue'];
  const backgroundImages = ['smSmallWoman','smSunsetGirl', 'smSumoStadium', 'smTempleSakura'];

  // handleBackground Image is called from useEffect hook to change state
  const handleBackgroundChange = () => {
    // If at the end of the backgroundImage array, set count back to 0
    if (background === backgroundImages.length - 1) {
      updateBackground(0);
    } else {
      updateBackground(background + 1);
    }
  };

  //  DON'T UNCOMMENT WHEN TESTING
  // useEffect will call the handleBackgroundChange function every few seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleBackgroundChange();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }); // [] will make it run once after mounting

  return (
    <div className={styles.Landing}>
      {/* Image Centered in the middle of landing Section */}
      <div className={`${styles.imgContainer} ${styles[backgroundImages[background]]}`}></div>
      {/* Title centered in middle of landing section*/}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Tokyo Traveler</h1>
      </div>
    </div>
  );
};

export default Landing;
// <div className={styles.Landing}>
// {/* Background Image */}
//  <div className={`${styles.imgContainer}`}></div>
//  {/* Title Container */}
// <div className={styles.titleContainer}>
//   <h1 className={styles.title}>Tokyo Traveler</h1>
//  <p className={styles.subTitle}>A simple travel guide</p>
//</div>
// </div>

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

{
  /* <img
  src={smallHatMan}
  srcSet={`${smallHatMan} 640w, ${mediumHatMan} 1920w, ${largeHatMan} 2400w`}
  sizes="(min-width: 1000px) 2400px,
         (min-width: 600px) 1920px,
         (max-width: 400px) 640px"
/> */
}

{
  /* <picture>
  <src media="(min-width:1000px)" srcSet={largeHatMan} />
  <src media="(min-width:600px)" srcSet={mediumHatMan} />
  <src media="(min-width:400px)" srcSet={smallHatMan} />
  <img src={largeHatMan}></img>
</picture> */
}

{
  /* <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`} onLoad={this.onLoad} /> */
}
