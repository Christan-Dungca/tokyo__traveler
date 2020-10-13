import React from 'react';
import Styles from './CalculatorHeader.module.scss';

function CalculatorHeader(props) {
    return (
        <div className={Styles.CalculatorHeader}>
            <h1>this is the header</h1>
            should contain the steps you're on to completing the budgeting.
            should also contain the name of the process.
        </div>
    )
}

export default CalculatorHeader
