import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses"
import ExpenseDashBoardPage from "../../components/ExpenseDashboardPage";


test('should render Expense dashboard page ', () => {
    const wrapper = shallow(<ExpenseDashBoardPage expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})