import { ExpenseList } from "../../components/ExpenseList";
import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses"

test('should render Expense list with Expense', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render Expense list with no Expense', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})