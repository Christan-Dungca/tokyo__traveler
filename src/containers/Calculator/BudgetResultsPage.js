import React from 'react';
import Styles from './BudgetResultsPage.module.scss';

function BudgetResultsPage(props) {
    return (
        <div className={Styles.BudgetResults}>
            <h1>this is to see your results</h1>
            <button onClick={props.handleCountState}>Should set the user back to the calc homepage</button>
        </div>
    )
}

export default BudgetResultsPage
