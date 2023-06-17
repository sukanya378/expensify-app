import moment from "moment"
import expensesReducers from "../../reducers/expensesReducers"
import expenses from "../fixtures/expenses"

const expenseReducerDefaultState = []

test('should set up default filter values', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' })
    expect(state).toEqual(expenseReducerDefaultState)
})

test('should add an expense', () => {
    const state = expensesReducers(undefined, {
        type: "ADD-EXPENSE",
        expense: { description: 'rent', amount: 9000, createdAt: 1686126588493 }
    })
    expect(state).toEqual([{ description: 'rent', amount: 9000, createdAt: 1686126588493 }])
})

test('should edit an expense when valid id', () => {
    const state = expensesReducers(expenses, {
        type: "EDIT_EXPENSE",
        expense: { id: "3", updates: { amount: 100 } }
    })
    expect(state).toEqual([expenses[0], expenses[1], { ...expenses[2], amount: 100 }, expenses[3], expenses[4]])
})

test('should not edit an expense when invalid id', () => {
    const state = expensesReducers(expenses, {
        type: "EDIT_EXPENSE",
        expense: { id: "-1", updates: { amount: 100 } }
    })
    expect(state).toEqual(expenses)
})

test('should remove an expense with valid id', () => {
    const state = expensesReducers(expenses, {
        type: "REMOVE_EXPENSE",
        id: "3"
    })
    expect(state).toEqual([expenses[0], expenses[1], expenses[3], expenses[4]])
})


test('should not remove an expense with invalid id', () => {
    const state = expensesReducers(expenses, {
        type: "REMOVE_EXPENSE",
        id: "8"
    })
    expect(state).toEqual(expenses)
})

// test('should sort by amount', () => {
//     const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" })
//     expect(state.sortBy).toBe('amount')
// })

// test('should set start date', () => {
//     const state = filterReducer(undefined, { type: "SET_START_DATE", date: moment(456) })
//     expect(state.startDate).toEqual(moment(456))
// })

// test('should set end date', () => {
//     const state = filterReducer(undefined, { type: "SET_END_DATE", date: moment(456) })
//     expect(state.endDate).toEqual(moment(456))
// })

// test('should set text filter', () => {
//     const state = filterReducer(undefined, { type: "SET_TEXT_FILTER", text: "Rent" })
//     expect(state.text).toBe("Rent")
// })