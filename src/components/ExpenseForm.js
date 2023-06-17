import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.inititalExpenses ? props.inititalExpenses.description : "",
            amount: props.inititalExpenses ? (props.inititalExpenses.amount / 100).toString() : 0,
            note: props.inititalExpenses ? props.inititalExpenses.note : "",
            createdAt: props.inititalExpenses ? moment(props.inititalExpenses.createdAt) : moment(),
            calenderFocused: false,
            error: ""
        }
    }



    handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === "amount") {
            if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState({ [name]: value })
        }
        else this.setState({ [name]: value })
    }

    handledateChange = (createdAt) => {
        if (createdAt) this.setState({ createdAt })
    }

    onSubmit = (e) => {
        const { description, amount, note, createdAt } = this.state
        e.preventDefault();
        if (!description || !amount) this.setState({ error: "Please provide description and amount" })
        else {
            this.setState({ error: "" })
            this.props.onSubmit({
                description,
                amount: parseFloat(amount) * 100,
                note,
                createdAt: createdAt.valueOf()
            })
        }
    }

    handleFocusChange = ({ focused }) => {
        this.setState({ calenderFocused: focused })
    }


    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Description"
                            name="description"
                            autoFocus
                            onChange={this.handleInputChange}
                            value={this.state.description}
                        />

                        <div>
                            <input
                                type="text"
                                name="amount"
                                value={this.state.amount}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <textarea
                            placeholder="Add Note For Your expense"
                            name="note"
                            onChange={this.handleInputChange}
                        />

                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.handledateChange}
                            focused={this.state.calenderFocused}
                            onFocusChange={this.handleFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={(day) => false}
                        />



                    </div>
                    <button>Add Expense</button>
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
            </div>
        )
    }
}

export default (ExpenseForm)