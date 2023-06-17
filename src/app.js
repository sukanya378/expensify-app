import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css'
import './styles/style.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expensesActions";
import configureStore from "./store/configureStore";
import { setTextFilter } from "./actions/filtersActions";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";
const store = configureStore();

const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 9000 , createdAt: 1686126588493}))
const expense2 = store.dispatch(addExpense({ description: 'rent', amount: 200 , createdAt: 1686226488493}))
const expense3 = store.dispatch(addExpense({ description: 'Coffee', amount: 10000 , createdAt: 1586226588493}))
store.dispatch(addExpense({ description: 'Water Bill', amount: 800 , createdAt: 1626226588493}))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1500 , createdAt: 1686226588403}))
// store.dispatch(setTextFilter('t'))

// console.log(getVisibleExpenses(store.getState().expenses , store.getState().filters))

const jsx = (
    <Provider store= {store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))

