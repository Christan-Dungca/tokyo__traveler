import React, { useState, useEffect, useRef } from "react";
import Styles from './Calculator.module.scss';
import CustomizeBudget from './CustomizeBudgetPlan';
import BudgetHomePage from './BudgetHomePage';
import BudgetResultsPage from './BudgetResultsPage';
import CreateBudget from './CreateBudget';
import CalculatorHeader from './CalculatorHeader';

/*
state goes in containers non state in components
*/

const Calculator = () => {
    //count state to keep track of which page to render
    const [count, setState] = useState(0);
    //form state to gather data from the form
    const [amount, setAmount] = useState({
        name: '',
        bal: 0
    });
    //function CreateBudget(props) {
    //props.name || props.bal
    //destruturing would just be name, bal

    const handleStateCount = () => {
        if(count>3) {count = 0;}
        return setState(count + 1);
    }
    const handleAmount = () => {
        let showAmount = 0;
        console.log(`this is showAmount: ${showAmount}`);
        console.log(`this is amount: ${amount}`);
        return setAmount(showAmount += amount)
    }
    const stepsList = ['Get a thing', 'enter a thing', 'view a thing']
    // const textInput = useRef(null);
    // console.log(count)
    if(count === 0) {
        // console.log(`homepage count ${count}`)
        return (
            <div className={Styles.Calculator}>
                <BudgetHomePage setState={count} handleStateCount={handleStateCount}/>
            </div>
        )
    } else if(count===1) {
        console.log(`budget create state ${count}`)
        return (
            <div className={Styles.Calculator}>
                <CalculatorHeader />
                <CreateBudget setState={count} handleStateCount={handleStateCount} setAmount={amount} handleAmount={handleAmount}/>
            </div>
        )
    } else if(count===2) {
        console.log(`Customize budget state ${count}`)
        return (
            <div className={Styles.Calculator}>
                <CalculatorHeader />
                <CustomizeBudget setState={count} handleStateCount={handleStateCount} />
            </div>
        )
    } else if(count === 3) {
        console.log(`Results state ${count}`)
        return (
            <div className={Styles.Calculator}>
                <CalculatorHeader />
                <BudgetResultsPage setState={count} handleStateCount={handleStateCount} />
            </div>
        )
    } else {
        return (
            console.log(`state is higher than 3, or less than 0`)
        )
    }
}

export default Calculator; 