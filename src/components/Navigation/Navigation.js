import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = (props) => {
    return (
        <nav className={styles.Navigation}>
            <a href="#" 
                className={styles.logo} 
                style={ props.showNav === true ? {color: "white"} : {}}> Tokyo Traveler </a>
            {/* <div className={styles.navBtnContainer} onClick={props.toggleNavHandler}> 
                <div className={styles.navBtn}></div>  
            </div> */}
            <div className={styles.navBtnContainer} >
                {
                    props.showNav === false 
                    ? <p className={styles.open} onClick={props.toggleNavHandler}> Menu </p> 
                    : <p className={styles.close} onClick={props.toggleNavHandler}> Close </p>
                }
            </div>
        </nav>
    )
}

export default Navigation;