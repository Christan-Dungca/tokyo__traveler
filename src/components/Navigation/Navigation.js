import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = (props) => {
    return (
        <nav className={styles.Navigation}>
            <a href="#" 
                className={styles.logo} 
                // style={ props.showNav === true ? {color: "black"} : {color: "black"}}
            > Tokyo Traveler </a>
            {/* <div className={styles.navBtnContainer} onClick={props.toggleNavHandler}> 
                <div className={styles.navBtn}></div>  
            </div> */}
            <div className={styles.navContainer}>
                <div className={styles.navBtn}></div>
            </div>
        </nav>
    )
}

export default Navigation;

/* 
    TODO:
        
    [x] Change sizing of the navigation
    [x] Change color of navigation background
    [x] Change positioning of the navigation to be fixed or absolute?
    [ ] Change positioning of elements within the navigation on smaller screens
    [x] Switch the menu to be a hamburger menu icon
    [x] Add a drop shadow to the navigation
    [] The Navigation is the same colour as the Landing section to begin with, then onScroll it turns white
*/