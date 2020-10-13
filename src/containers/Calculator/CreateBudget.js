import React from 'react';
import Styles from './CreateBudget.module.scss';
import BtnStyles from '../../components/UI/Button/Button.module.scss';
/* 
    when we create a budget plan, we want to know their {
        name,
        amount,
        days spent,
        priorities on {
            housing,
            food,
            transportation,
            recreation
        },

    }
    try destructuring, and use specific names
    function CreateBudget({name, amount, etc}) {
    {name}
*/
function CreateBudget(props) {
    return (
        <div className={Styles.CreateBudget}>
            <div className={Styles.CreateBudgetContainer}>
                <h1>This is the create a budget first step</h1>
                <p>If you're planning a trip to Tokyo, you should plan to spend about $146 USD per day. The rates will differ of course </p>
                <form action="" className={Styles.CreateBudgetForm}>
                    <div>
                        <label>Total Budget</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>asdasdasd</label>
                        <input type="text"/>
                    </div>
                    <button className={BtnStyles.btnUnderline} onClick={props.handleStateCount} >Move On</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBudget
