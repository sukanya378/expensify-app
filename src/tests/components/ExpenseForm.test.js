import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/expenseForm";
import expenses from '../fixtures/expenses'
import moment from "moment";

// jest.mock(())

test('should render Expemse Form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render Expemse Form correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm inititalExpenses={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)

    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value = "New description"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value, name: 'description' }
    })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()

})

test('should set note on note text area change', () => {
    const value = "New Note"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: { value, name: 'note' }
    })
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()

})

test('should set amount on valid amount change', () => {
    const value = "23.50"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value, name: 'amount' }
    })
    expect(wrapper.state('amount')).toBe(value)
    expect(wrapper).toMatchSnapshot()

})

test('should set amount on invalid amount change', () => {
    const value = "23.78999"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value, name: 'amount' }
    })
    expect(wrapper.state('amount')).toBe(0)
    expect(wrapper).toMatchSnapshot()

})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm inititalExpenses={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    const { description, amount, note, createdAt } = expenses[0]
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description, amount, note, createdAt
    })

})

test('should set date on date change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment())
    expect(wrapper.state('createdAt')).toEqual(moment())
    expect(wrapper).toMatchSnapshot()

})

test('should set calendar focused on change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true })
    expect(wrapper.state('calenderFocused')).toBe(true)
    expect(wrapper).toMatchSnapshot()

})