import React from "react"
import ExpenseList from "./ExpenseList"
import ExpenseListFilter from "./ExpenseListFilter"


const ExpenseDashBoardPage = (props) => (
    <div>
        <ExpenseListFilter/>
        <ExpenseList expenses = {props.expenses}/>
    </div>
)
 
export default ExpenseDashBoardPage
