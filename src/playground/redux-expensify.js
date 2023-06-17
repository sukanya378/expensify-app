












// const store = createStore(
//     combineReducers({
//         expenses: expenseReducer,
//         filters: filterReducer
//     })
// )




// store.subscribe(() => {

//     console.log(store.getState())
//     console.log("visible expenses ", getVisibleExpenses(store.getState().expenses, store.getState().filters))
// })

// const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 9000 , createdAt: 1000}))
// const expense2 = store.dispatch(addExpense({ description: 'rent', amount: 200 , createdAt: -100}))
// // store.dispatch(removeExpense(expense2.expense.id))
// const expense3 = store.dispatch(addExpense({ description: 'Coffee', amount: 10000 , createdAt: -3000}))
// store.dispatch(editExpense(expense3.expense.id, { amount: 300 }))

// store.dispatch(setTextFilter('Rent'))
// store.dispatch(setTextFilter())
// store.dispatch(setTextFilter('Rent'))

// store.dispatch(sortByDate())
// store.dispatch(setStartDate('125'))
// store.dispatch(setEndDate('1250'))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate())
// store.dispatch(sortByAmount())
// const demoState = {
//     expenses: [{
//         id: '1000',
//         description: 'Expense 1',
//         note: 'This is final payment',
//         amount: 9000,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sort: 'amount',  // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }



