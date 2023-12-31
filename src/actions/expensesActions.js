import uuid from 'uuid'

//ADD-EXPENSE
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: "ADD-EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE_EXPENSE
export const removeExpense = (id) => ({
    type: "REMOVE_EXPENSE",
    id
})


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    expense: {
        id,
        updates
    }
})