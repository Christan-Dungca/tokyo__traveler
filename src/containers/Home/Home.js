import React, { Component } from "react";
import Styles from './Home.module.scss';

import Aux from '../../hoc/Aux/Aux';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Articles from '../../components/Articles/Articles';
import Calculator from '../Calculator/Calculator';


class Home extends Component {
  render() {
    return (
      <Aux>
        <Landing className={Styles.Landing} />
        <About className={Styles.About} />
        <Articles className={Styles.Landing} /> 
        <Calculator className={Styles.Calculator} />
      </Aux>
    );
  }
}

export default Home;
