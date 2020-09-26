import React, { Component, Fragment} from "react";
import Styles from './Home.module.scss';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Articles from '../../components/Articles/Articles';
import Calculator from '../Calculator/Calculator';


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Landing className={Styles.Landing} />
        <About className={Styles.About} />
        <Articles className={Styles.Landing} /> 
        <Calculator className={Styles.Calculator} />
      </Fragment>
    );
  }
}

export default Home;
