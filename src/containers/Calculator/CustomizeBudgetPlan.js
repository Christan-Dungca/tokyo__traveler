import React, { useState } from 'react';
import Styles from './CustomzieBudgetPlan.module.scss';

function CustomizeBudgetPlan(props) {
    return (
        <div className={Styles.CustomizeBudget}>
            <h1>This is the page to customize your results</h1>
            <button onClick={props.handleStateCount}>Try this</button>
        </div>
    )
}

export default CustomizeBudgetPlan
