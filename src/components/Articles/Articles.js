import React from 'react';
import Styles from './Articles.module.scss';
import Carousel from '../../containers/Carousel/Carousel';

const Articles = () => {
    return (
        <div className={Styles.Articles}>
            <h3>Articles placeholder from Home</h3>
            <Carousel /> 
        </div>
    )
}

export default Articles;