import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheet/index.scss';

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
  fetchTransactionMonthly,
  fetchCategoriesByExpenses,
  fetchCategoriesByIncome,
  fetchNet
} from './action/transaction_actions';

import { loginUser } from './action/session_actions';
import store from './store/store';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
