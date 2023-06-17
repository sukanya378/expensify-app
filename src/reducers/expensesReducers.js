//EXPENSES REDUCER

const expenseReducerDefaultState = []
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD-EXPENSE":
            return [...state, action.expense]
        // return state.concat(action.expense)
        case "EDIT_EXPENSE":
            {
                const newState = state.map(item => {
                    let obj = item
                    if (item.id === action.expense.id) obj = { ...obj, ...action.expense.updates }
                    return obj;
                })
                return newState
            }
        case "REMOVE_EXPENSE":
            {
                const newState = state.filter(item => item.id !== action.id)
                return newState;
            }
        default:
            return state;
    }
}

export default expenseReducer;