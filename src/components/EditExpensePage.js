import React from "react"
import ExpenseForm from "./expenseForm"
import { connect } from "react-redux"
import { editExpense } from "../actions/expensesActions"
import { removeExpense } from '../actions/expensesActions'

export class EditExpensePage extends React.Component {
    handleRemoveExpense = () => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push('/')
    }
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                This is my edit page of id : {this.props.expense.id}
                <h1> Edit Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                    inititalExpenses={this.props.expense}
                />

                <button onClick={this.handleRemoveExpense}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.filter((expense) => expense.id === props.match.params.id)[0]
    }
}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);