import { addExpense, editExpense, removeExpense } from "../../actions/expensesActions";
import uuid from 'uuid'

test('should setup  removeExpense action object', () => {
    const action = removeExpense("123")
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123"
    })

})

test('should setup  editexpense action object', () => {
    const action = editExpense("123", { description: "Rent" })
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        expense: {
            id: "123",
            updates: { description: "Rent" }
        }
    })

})

test('should setup  addExpense action object when passed in', () => {
    const action = addExpense({ description: "Rent", amount: 9000, createdAt: 1626226588493 })
    expect(action).toEqual({
        type: "ADD-EXPENSE",
        expense: {
            id: expect.any(String),
            description: "Rent",
            note: "",
            amount: 9000,
            createdAt: 1626226588493
        }
    })

})

test('should setup  addExpense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD-EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    })

})

