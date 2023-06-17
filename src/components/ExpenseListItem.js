import React from "react";
import { NavLink } from "react-router-dom";

const ExpenseListItem = (props) => {
    const { id, description, amount, createdAt } = props.expense
    
    return (
        <div className="expense-list-item">
            <NavLink to={`/edit/${id}`} activeClassName="is-active"><h3>{description}</h3></NavLink>
            <div>{amount}</div>
            <div>{createdAt}</div>
            
        </div>
    )
}

export default ExpenseListItem;