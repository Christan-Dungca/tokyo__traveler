import React from 'react';
import Styles from './Calculator.module.scss';


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
    let stepsBar2 = document.getElementsByClassName('CalculatorIncomplete');
    let stepsList = ['Enter your budget', 'Customize', 'Your results'];

    let completeStep1 = () => {
        //if the class of the element is incomplete, change to completed
        console.log(stepsBar2)
        console.log(document.getElementsByClassName("CalculatorCompleted"));
        
        // stepsBar2.classList.remove('CalculatorIncomplete');
        // stepsBar2.classList.add('CalculatorCompleted');
    }
    


    return (
        <div className={Styles.Calculator}>
            <div className={Styles.CalculatorContainer}>
                <div className={Styles.CalculatorHeader}>
                    <h1>Calculate your budget</h1>
                    <div className={Styles.CalculatorStatusBar}>
                        <div className={Styles.CalculatorCompleted} id={Styles.step1}></div>
                        <div className={Styles.CalculatorIncomplete} id={Styles.step2}></div>
                        <div className={Styles.CalculatorIncomplete} id={Styles.step3}></div>
                    </div>
                    <div className={Styles.CalculatorSteps}>
                        {stepsList.map((value, index) => {
                            return <h4 key={index}>
                                    <span className={Styles.CalculatorStepsNum}>0{index + 1}. </span>
                                    <span className={Styles.CalculatorStepsPara}>{value}</span>
                                </h4>
                        })}
                    </div>
                    <button onClick={completeStep1}>Check step</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator; 