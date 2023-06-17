import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses"
import { filters, altFilters } from "../fixtures/filters";
import { ExpenseListFilter } from "../../components/ExpenseListFilter";
import moment from "moment";


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper, setCalendarFocused;
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setCalendarFocused = jest.fn();
    wrapper = shallow(<ExpenseListFilter
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        filters={filters}
    />)
})

test('should render Expense list filter', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render Expense list filter with alt data', () => {
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: { value: 'bil' }
    })
    expect(setTextFilter).toHaveBeenCalledWith('bil')
})

test('should sort by date', () => {
    wrapper.setProps({ filters: altFilters })
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: moment(30), endDate: moment(70) })
    expect(setStartDate).toHaveBeenCalledWith(moment(30))
    expect(setEndDate).toHaveBeenCalledWith(moment(70))
})

test('should handle date focus changes', () => {
    const onFocusChange1 = jest.spyOn(React, "useState");
    onFocusChange1.mockImplementation(calendarFocused => [calendarFocused, setCalendarFocused]);
    const calendarFocusedVal = 'endDatde'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocusedVal)
    expect(wrapper).toMatchSnapshot()
    // expect(setCalendarFocused).toHaveBeenCalled() 
})

test('should handle outside date range', () => {
    wrapper.find('DateRangePicker').prop('isOutsideRange')()
    expect(wrapper).toMatchSnapshot()
})