import React, { Component, Fragment} from "react";
import styles from './Home.module.scss';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Articles from '../../components/Articles/Articles';
import Calculator from '../Calculator/Calculator';


class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        <Landing className={styles.Landing} />
        <About className={styles.About} />
        <Articles className={styles.Landing} /> 
        <Calculator className={styles.Calculator} />
      </div>
    );
  }
}

export default Home;
