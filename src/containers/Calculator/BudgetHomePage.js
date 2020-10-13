import React from 'react';
import Styles from './BudgetHomePage.module.scss';
import BtnStyles from '../../components/UI/Button/Button.module.scss';

function BudgetHomePage(props) {

    return (
        <div className={Styles.BudgetHome}>
            <h1>This is the homepage</h1>
            <h2>should be some example stuff with a button to find your own budget</h2>
            <button className={BtnStyles.btnUnderline} onClick={props.handleStateCount}>Create your budget</button>
        </div>
    )
}

export default BudgetHomePage
/* 
{stepsList.map((value, index) => {
        return <h4 key={index}>
                <span className={Styles.CalculatorStepsNum}>0{index + 1}. </span>
                <span className={Styles.CalculatorStepsPara}>{value}</span>
            </h4>
    })}
*/