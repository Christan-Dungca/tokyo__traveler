import React, {useState} from 'react';
import Styles from './Calculator.module.scss';
import CustomizeBudget from './CustomizeBudgetPlan';
import BudgetHomePage from './BudgetHomePage';
import BudgetResultsPage from './BudgetResultsPage';
import CreateBudget from './CreateBudget';

//state goes in containers non state in components
/*
    planning on making a container for the budget functionality
    the background could change per stage of the calc
    the header and status bar could either change dynamically, or be change with the page
    so one way would be on submit of one part of the page, the next page pops up with new info
    therefore there would have to be a button that changes the state but doesn't submit the form
    ~~The other option would be the header of the calc function is a comonent that stays but changes dynamically
    based on when a button is clicked.

    first section should contain simple things like how much money you have to spend
    and maybe some info or ads with prices for restaraunts etc
*/

const Calculator = () => {
    //setting state for a couple different options to render different parts of the screen
    const [count, setCount] = useState(0);
    const handleCountState = () => {
        setCount(count + 1);
    }
    const stepsList = ['Get a thing', 'enter a thing', 'view a thing']
    // const textInput = useRef(null);
    console.log(count)
    if(count === 0) {
        console.log(`homepage count ${count}`)
        return (
            <BudgetHomePage countState={count} handleCountState={handleCountState}/>
            )
        } else if(count===1) {
            return (
                <CreateBudget countState={count} handleCountState={handleCountState} />
            )
        } else if(count===2) {
            return (
                <CustomizeBudget countState={count} handleCountState={handleCountState}/>
            )
        } else if(count === 3) {
            return (
                <BudgetResultsPage countState={count} handleCountState={handleCountState} />
            )
        } else {
            console.log(`count is not defined: ${count}`)
        }
    return (
        <div>
            <h1>This is the default</h1>
        </div>
    )
}

export default Calculator; 