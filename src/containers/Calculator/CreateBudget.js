import React from 'react'
import Styles from './CreateBudget.module.scss';

function CreateBudget(props) {
    return (
        <div className={Styles.CreateBudget}>
            <h1>This is the create a budget first step</h1>
            <button onClick={props.handleCountState}>Customize your priorities</button>
        </div>
    )
}

export default CreateBudget
