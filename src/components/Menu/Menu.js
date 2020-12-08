import React from 'react';
import styles from './Menu.module.scss';

const Menu = ({toggleNavHandler}) => {
    return (
        <div className={styles.Menu}>
            <p onClick={toggleNavHandler}> Close</p>
            <p> Link </p>
            <p> Link </p>
            <p> Link </p>
            <p> Link </p>
        </div>
    )
}

export default Menu;

