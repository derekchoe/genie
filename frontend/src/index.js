import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
    fetchCategories,
    fetchCategory,
    deleteCategory,
    createCategory,
    updateCategory
} from './action/category_actions';

import {
    fetchTransactions,
    fetchTransaction,
    deleteTransaction,
    createTransaction,
} from './action/transaction_actions';
import { loginUser } from './action/session_actions';
import store from './store/store';

// test start
window.loginUser = user => store.dispatch(loginUser(user));
window.fetchCategories = () => store.dispatch(fetchCategories());
window.fetchCategory = id => store.dispatch(fetchCategory(id));
window.deleteCategory = id => store.dispatch(deleteCategory(id));
window.createCategory = category => store.dispatch(createCategory(category));
window.updateCategory = category => store.dispatch(updateCategory(category));

window.fetchTransactions = () => store.dispatch(fetchTransactions());
window.fetchTransaction = id => store.dispatch(fetchTransaction(id));
window.deleteTransaction = id => store.dispatch(deleteTransaction(id));
window.createTransaction = transaction => store.dispatch(createTransaction(transaction));
// Test end

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
