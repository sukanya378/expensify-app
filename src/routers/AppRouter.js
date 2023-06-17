import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashBoardPage from "../components/ExpenseDashboardPage";
import ExpenseHelpPage from "../components/ExpenseHelpPage";
import Header from "../components/Header";
import NotFoundFage from "../components/NotFound";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashBoardPage} />
                <Route path="/add" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={ExpenseHelpPage} />
                <Route component={NotFoundFage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
