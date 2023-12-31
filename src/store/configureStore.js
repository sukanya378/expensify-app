import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expensesReducers";
import filterReducer from "../reducers/filtersReducers";


export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        }) , 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}