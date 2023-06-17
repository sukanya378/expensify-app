import moment from "moment"
import getVisibleExpenses from "../../selectors/expenses"
import expenses from "../fixtures/expenses"


test('should filter by text and sort by default by date', () => {
    const filters = {
        text: "bill",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[4], expenses[3]
    ])
})

test('should filter by start date and sort by default by date', () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(1636227588593),
        endDate: undefined
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[4], expenses[1], expenses[0]
    ])
})

test('should filter by end date and sort by default by date', () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(1636227588593)
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[3], expenses[2]
    ])
})

test('should sort by default by amount', () => {
    const filters = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[2], expenses[0], expenses[4], expenses[3], expenses[1]
    ])
})

test('should sort by default by date', () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([
        expenses[4], expenses[1], expenses[0], expenses[3], expenses[2]
    ])
})