import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <a href="#" className={styles.logo}> Tokyo Traveler </a>
            <div className={styles.navBtnContainer}> 
                <div className={styles.navBtn}></div>
            </div>
        </nav>
    )
}

export default Navigation;