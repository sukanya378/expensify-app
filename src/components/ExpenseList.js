import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {props.expenses.length===0 ? <p>No Expense</p> : props.expenses.map((expense , itemIndex) => {
                return <ExpenseListItem expense = {expense} key={itemIndex}/>
            })}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)     // Higher order component;